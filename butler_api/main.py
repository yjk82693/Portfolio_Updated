import json
import re
from pathlib import Path

from fastapi import FastAPI
from pydantic import BaseModel

DATA = json.loads((Path(__file__).parent / "data.json").read_text())
FACTS = DATA["facts"]
PROJECTS = DATA["projects"]
PITCH = str(DATA["pitch"])

app = FastAPI()


class Message(BaseModel):
    role: str
    content: str


class Context(BaseModel):
    page: str = "/"
    sessionDepth: int = 0


class ButlerRequest(BaseModel):
    messages: list[Message]
    context: Context


def tone(depth: int) -> str:
    if depth < 3:
        return "cool"
    if depth < 8:
        return "dry"
    return "deadpan"


def pick(t, cool, dry, deadpan):
    return {"cool": cool, "dry": dry, "deadpan": deadpan}[t]


def norm(s: str) -> str:
    s = re.sub(r"[^a-z0-9+# ]+", " ", s.lower())
    return " " + re.sub(r"\s+", " ", s).strip() + " "


def has(text: str, words) -> bool:
    n = norm(text)
    return any(norm(w) in n for w in words)


NAV_WORDS = ["show", "take me", "go to", "open", "see", "view", "bring", "visit",
             "navigate", "head to", "look at"]
CONTACT_WORDS = ["contact", "email", "reach", "hire", "hiring", "get in touch", "message him"]
GREET_WORDS = ["hello", "hi", "hey", "good morning", "good evening"]
BIO_WORDS = ["who is", "about him", "tell me about him", "bio", "introduce", "yourself"]
PITCH_WORDS = ["short version", "summary", "pitch", "elevator", "tldr"]
EXP_WORDS = ["experience", "intern", "internship", "worked", "career", "jobs", "job history",
             "nhn", "lunexio", "coconem", "kim chang", "army"]
SKILL_WORDS = ["skills", "tech stack", "technologies", "languages", "tools does he"]

PAGES = [
    ("/", ["home", "welcome", "front door"]),
    ("/estate", ["estate", "life story", "story", "journey", "hall"]),
    ("/gallery", ["gallery", "projects", "work samples"]),
    ("/report", ["report", "resume", "cv"]),
]

PHASE_KEYS = {
    "youth": ["youth", "childhood", "grew up", "north carolina", "virginia"],
    "highschool": ["high school", "uwcsea", "frozen", "the spark"],
    "university-army": ["university", "penn state", "college"],
    "after-service": ["after service", "military", "notebook"],
    "now": ["right now", "currently", "these days"],
}
FACT_PHASE = {"youth": "youth", "highschool": "highschool", "university-army": "university",
              "after-service": "afterservice", "now": "now"}

FILTERS = {
    "frontend": ["frontend", "front end"],
    "fullstack": ["fullstack", "full stack"],
    "backend": ["backend", "back end"],
    "game": ["game", "games"],
    "tools": ["tools"],
    "hackathon": ["hackathon", "hackathons"],
}

EXTRA_KEYS = {
    "basic-game-platform": ["gamebase", "game platform"],
    "last-bit-standing": ["basepoker", "last bit"],
    "portfolio-v2": ["sharvis", "this site", "this portfolio"],
    "portfolio-v1": ["first portfolio"],
}
FACT_ALIAS = {"basic-game-platform": "gamebase"}
STOP = {"about", "the", "what", "any", "how", "a", "an", "his", "him", "he", "more", "anything"}


def nav(reply, to, flt=None):
    out = {"reply": reply, "action": "navigate", "to": to}
    if flt:
        out["filter"] = flt
    return out


def find_project(text):
    for p in PROJECTS:
        keys = [p["slug"].replace("-", " "), p["title"]] + EXTRA_KEYS.get(p["slug"], [])
        if has(text, keys):
            return p
    return None


def find_filter(text):
    for name, words in FILTERS.items():
        if has(text, words):
            return name
    return None


def skill_reply(text, t):
    skills = FACTS["skills"]
    named = [s for s in skills if has(text, [s])]
    asking = has(text, ["know", "use", "uses", "skill", "experience", "familiar", "does he", "can he"])
    if named and asking:
        s = named[0]
        used_in = [p["title"] for p in FACTS["projects"] if s in p.get("tech", [])]
        extra = " He has used it in " + ", ".join(used_in) + "." if used_in else ""
        return pick(t, "Indeed, sir. " + s + " is among his skills." + extra,
                    "Naturally. " + s + " is on the list." + extra,
                    s + ". Yes. He has it." + extra)
    m = re.search(r"(?:know|use|uses|code in|program in|experience with|familiar with)\s+([a-z0-9+#.]+)",
                  text.lower())
    if m:
        term = m.group(1).strip(".")
        if term not in STOP and term:
            return pick(t, "I am afraid " + term + " is not among his skills, sir.",
                        "Not that I have on record, sir. " + term + " is absent from the list.",
                        term + "? No. I would not invent it for him.")
    if has(text, SKILL_WORDS):
        return "His skills: " + ", ".join(skills) + "."
    return None


def experience_reply(text, t):
    exp = FACTS["experience"]
    matches = [e for e in exp if has(text, [e["where"]])]
    if matches:
        e = matches[0]
        return e["role"] + " at " + e["where"] + " (" + e["when"] + "). " + e["did"]
    lines = [e["role"] + " at " + e["where"] + " (" + e["when"] + ")" for e in exp]
    return pick(t, "His experience, sir: ", "In brief: ", "The short list: ") + "; ".join(lines) + "."


@app.post("/api/butler")
def butler(req: ButlerRequest):
    t = tone(req.context.sessionDepth)
    text = req.messages[-1].content if req.messages else ""
    wants_nav = has(text, NAV_WORDS)

    if has(text, CONTACT_WORDS):
        return {
            "reply": pick(t, "By all means, sir. I have opened a note form for you.",
                          "Do write to him, sir. He reads his mail.",
                          "You could simply contact him, sir. It would save us both time."),
            "action": "contact",
            "email": FACTS["email"],
        }

    sr = skill_reply(text, t)
    if sr:
        return {"reply": sr}

    proj = find_project(text)
    if proj:
        fact = next((p for p in FACTS["projects"]
                     if p["slug"] == FACT_ALIAS.get(proj["slug"], proj["slug"])), None)
        what = fact["what"] if fact else proj["blurb"]
        if wants_nav:
            return nav("Very good, sir. " + what, "/gallery/" + proj["slug"])
        return {"reply": what + " Shall I take you there?"}

    for pid, words in PHASE_KEYS.items():
        if has(text, words):
            summary = FACTS["phases"][FACT_PHASE[pid]]
            if wants_nav:
                return nav(summary, "/estate/" + pid)
            return {"reply": summary + " I can show you that room, if you wish."}

    if has(text, EXP_WORDS):
        if wants_nav:
            return nav(experience_reply(text, t), "/report")
        return {"reply": experience_reply(text, t)}

    flt = find_filter(text)
    for path, words in PAGES:
        if has(text, words):
            base = pick(t, "Of course, sir.", "Right this way.", "Naturally.")
            if path == "/gallery" and not flt:
                base += " You may filter by game, full-stack, or hackathon, or ask me about any project by name."
            return nav(base, path, flt if path == "/gallery" else None)
    if flt:
        return nav("Very good, sir. Filtering the gallery.", "/gallery", flt)

    if has(text, PITCH_WORDS):
        return {"reply": PITCH}
    if has(text, BIO_WORDS):
        return {"reply": FACTS["bio"]}
    if has(text, GREET_WORDS):
        return {"reply": pick(t, "Good day, sir. How may I be of service?",
                              "Welcome back, sir. Still browsing, I see.",
                              "Hello again, sir. Might I suggest simply contacting him?")}

    return {"reply": pick(t,
                          "I am afraid that is beyond my remit, sir. I attend to his work only.",
                          "That falls outside the estate, sir. Might I show you a project instead?",
                          "No. I will not be drawn on that. Contact him, sir.")}
