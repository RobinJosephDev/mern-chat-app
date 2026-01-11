# Full Stack Realtime Chat App

A **full-stack real-time chat application** built with the **MERN stack** (MongoDB, Express, React, Node.js) and **Socket.io**. Includes authentication, real-time messaging, online status, global state management, and deployment-ready features.

---

## Tech Stack

* **Frontend:** React, TailwindCSS, DaisyUI, Zustand (global state)
* **Backend:** Node.js, Express, Socket.io
* **Database:** MongoDB Atlas
* **Authentication:** JWT
* **File Upload / Media:** Cloudinary
* **Deployment:** Vercel / Render (or free hosting options)

---

## Features

### User Features

* Register, login, and logout (JWT-based authentication)
* Real-time private and group messaging with Socket.io
* Online/offline user status indicator
* Responsive UI built with TailwindCSS + DaisyUI

### Admin / App Features

* JWT-protected API routes
* Global state management using Zustand
* Error handling on both client and server
* Media/image uploads via Cloudinary
* Ready for production deployment

---

## Project Structure

```
chat-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
└── README.md
```

---

## Backend Setup

### 1️⃣ Install dependencies

```bash
cd backend
npm install
```

### 2️⃣ Environment Variables

Create a `.env` file with the following:

```env
MONGODB_URI=your_mongodb_uri
PORT=5001
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

NODE_ENV=development
```

### 3️⃣ Run Backend

```bash
npm run dev   # if using nodemon
npm start     # start production server
```

---

## 💻 Frontend Setup

### 1️⃣ Install dependencies

```bash
cd frontend
npm install
```

### 2️⃣ Run Frontend

```bash
npm start
```

* Frontend runs on `http://localhost:3000` by default.
* Connects to backend on `http://localhost:5001`.

---

## Security

* JWT-based authentication for protected routes
* Input validation and error handling
* Secure image/media upload via Cloudinary
* HTTPS-ready production setup

---

## Testing & Local Development

* Test backend endpoints using Postman or similar tool
* Client side: interact with chat interface to verify real-time messaging and online status

---

## 👤 Author

**Robin Joseph**
📧 [robinjo1776@gmail.com](mailto:robinjo1776@gmail.com)
🔗 [GitHub: RobinJosephDev]([https://github.c](https://github.c)
