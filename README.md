# The Estate

A butler-guided personal portfolio by Yoojun Kim. Instead of a static page, visitors wander an estate and can ask Sharvis, a JARVIS-style shark butler, to show them around.

## Pages

- **Welcome** (`/`): the front door
- **The Estate** (`/estate`): my life story told as five phases, with hand-drawn comics
- **The Gallery** (`/gallery`): selected projects with category filters and screenshot walkthroughs
- **The Report** (`/report`): resume and experience

## Meet Sharvis

Sharvis floats on every page except the welcome screen. He can take visitors to any real page or project, answer questions about my experience and skills, and open a note form to get in touch. His answers come only from data stored in this repo, so he never invents details. The backend is a small rule-based FastAPI app in `butler_api/`, so it has no API usage costs.

## Tech

- Frontend: React, TypeScript, Vite, react-router-dom
- Butler backend: Python, FastAPI, Uvicorn

## Run locally

Frontend:

~~~bash
npm install
npm run dev
~~~

Butler backend, in a second terminal:

~~~bash
cd butler_api
python3 -m venv .venv
source .venv/bin/activate
pip install fastapi uvicorn
uvicorn main:app --reload --port 8000
~~~

Vite proxies `/api` to port 8000 in dev, so both servers need to be running for Sharvis to answer.

When project or phase data changes, regenerate the butler's data file from the repo root:

~~~bash
npx --yes tsx butler_api/export_data.ts > butler_api/data.json
~~~

## Structure

~~~
src/
  components/   layout (Navbar, Footer, ButlerSummon) and ui pieces
  data/         projects, phases, butler facts
  pages/        Welcome, Report, estate/, gallery/
  lib/          frontend helper for the butler API
butler_api/     Python backend for Sharvis
public/         butler expressions, screenshots, phase illustrations
~~~
