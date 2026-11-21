# Daily commit routine

Rule: **within 15 minutes a day**, one small commit with real content. **No filler commits** (no `--allow-empty`, whitespace-only, or date-only changes). Rest days are fine.

## Pick one
1. **Study note** — `notes/daily/YYYY-MM-DD.md`. Copy `notes/daily/_template.md` and summarize what you learned in 3 lines.
2. **One algorithm problem** — e.g. `notes/algorithms/<site>/<problem>.py`. Solution + a 2-line comment on top (approach, time complexity). Link the problem; do not copy its statement.
3. **Small tool improvement** — one small feature, test, or README fix in this repo's tools.

## Steps
```
cp notes/daily/_template.md notes/daily/2026-11-22.md   # today's date
# fill the 3 lines
git add notes/daily/2026-11-22.md
git commit -m "daily: <one-line summary>"   # the hook checks secrets, blocked words, large files
```
Never publish solutions for courses currently being taken (`notes/docs/publish-rules.en.md`).
