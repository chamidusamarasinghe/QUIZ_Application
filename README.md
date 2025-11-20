# CodeAce (Quiz_App)

CodeAce is a small MERN-style quiz application (frontend with Vite + React, backend with Node/Express + Mongoose). This repository contains two main folders: `frontend/` and `backend/`.

## What I added
- `.gitignore` configured for frontend/backend node projects
- This `README.md` with setup and GitHub instructions

## Quick setup (development)

Prerequisites:
- Node.js (v18+ recommended)
- npm
- MongoDB (local or Atlas)

1. Install frontend deps

```powershell
Set-Location -LiteralPath 'D:\MERN_Project\Quiz_App\frontend'
npm install
```

2. Install backend deps

```powershell
Set-Location -LiteralPath 'D:\MERN_Project\Quiz_App\backend'
npm install
```

3. Start backend (make sure MongoDB is running locally or set `MONGO_URI` in `backend/.env`)

```powershell
Set-Location -LiteralPath 'D:\MERN_Project\Quiz_App\backend'
npm start
```

4. Start frontend

```powershell
Set-Location -LiteralPath 'D:\MERN_Project\Quiz_App\frontend'
npm run dev
```

## Create a GitHub repo and push (simple instructions)
Option A — using GitHub website/create the remote manually:

1. In your project root run:

```powershell
Set-Location -LiteralPath 'D:\MERN_Project\Quiz_App'
git init
git add .
git commit -m "Initial commit"
```

2. On GitHub create a new repository (do not initialize with README). Copy the repo URL (HTTPS or SSH). Then:

```powershell
# Replace <URL> with the path from GitHub, e.g. https://github.com/<user>/Quiz_App.git
git remote add origin <URL>
git branch -M main
git push -u origin main
```

Option B — with GitHub CLI (if installed):

```powershell
Set-Location -LiteralPath 'D:\MERN_Project\Quiz_App'
gh repo create <your-username>/Quiz_App --public --source=. --remote=origin --push
```

## Notes
- Add sensitive values (DB credentials, JWT secret) to `backend/.env` and *do not* commit that file.
- If you want, I can also add a `LICENSE` (MIT) and a basic GitHub Actions workflow.

---
If you want me to run the git commands here to initialize and push the repo, give me permission to run terminal commands and provide the GitHub repo URL (or let me create one using `gh`).