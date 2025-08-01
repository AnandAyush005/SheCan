# 🧑‍💻 Intern Dashboard Project

A full-stack web app with a dummy login/signup frontend and a secure backend API for managing intern data, referral codes, and donation stats.

---

## 📦 Tech Stack

### 🔹 Frontend

- React (Create React App)
- React Router
- Tailwind CSS (optional for styling)

### 🔹 Backend

- Express.js
- MongoDB (via Mongoose)
- Zod (for input validation)
- dotenv (for environment config)

---

## 🚀 Features

### ✅ Frontend

- Dummy login/signup (no real authentication)
- Dashboard showing:
  - Intern name
  - Referral code (e.g., `ayush2025`)
  - Total donations raised (fetched from backend)
  - Static rewards/unlockables section

### ✅ Backend

- POST `/` to add intern data (with validation)
- GET `/` to fetch all intern entries
- MongoDB schema with unique `username` constraint
- Input validation using Zod
- Error handling for invalid input and duplicate usernames

---

## 🛠️ Setup Instructions

### 🔧 Backend

1. Clone the repo and navigate to the backend folder:

   ```bash
   cd backend
   npm install
   node index.js

2. Navigate to frontend
   
  ```bash
  cd frontend
  npm install
  npm start

