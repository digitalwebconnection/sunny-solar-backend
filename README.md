# Sunny Solar Full-Stack Project

This project contains both the frontend and backend applications for **Sunny Solar**.

## Directory Structure

```
sunny-solar-backend/
├── frontend/               # React + TypeScript + Vite application
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
│
├── backend/                # Node.js + Express REST API
│   ├── src/
│   │   ├── config/         # Database and third-party configurations
│   │   ├── controllers/    # Request controllers
│   │   ├── middleware/     # Custom middlewares (e.g., error handler)
│   │   ├── routes/         # Express routes
│   │   ├── app.js          # Express app configuration
│   │   └── server.js       # Server entry point
│   ├── .env.example
│   ├── .env
│   └── package.json
│
└── package.json            # Root monorepo scripts
```

## Quick Start

### 1. Install Dependencies
You can install dependencies for both services from the root:
```bash
npm run install:all
```
Or individually:
```bash
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install
```

### 2. Configure Backend Environment
Copy `backend/.env.example` to `backend/.env`:
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### 3. Run Applications

#### From Root Directory
- **Run Frontend**:
  ```bash
  npm run dev:frontend
  ```
- **Run Backend**:
  ```bash
  npm run dev:backend
  ```

#### Running Directly Inside Subdirectories
- **Frontend** (Vite Dev Server on `http://localhost:5173`):
  ```bash
  cd frontend
  npm run dev
  ```
- **Backend** (Express API on `http://localhost:5000` with nodemon auto-reload):
  ```bash
  cd backend
  npm run dev
  ```
