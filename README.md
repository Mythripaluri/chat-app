# 💬 Fullstack Chat Application

A full-stack real-time chat web application built using React.js, Node.js, Express.js, MongoDB, and Socket.io for instant messaging.

---

## 🚀 Features

- User authentication & authorization (JWT)
- Real-time messaging with Socket.io
- Online/offline user status indication
- Chat history with MongoDB persistence
- Responsive UI with Tailwind CSS
- Password hashing with bcrypt
- REST API for user & message management

---

## 🛠️ Tech Stack

**Frontend:** React.js, Vite, Tailwind CSS, Zustand (state management), Socket.io-client  
**Backend:** Node.js, Express.js, MongoDB (via Mongoose), Socket.io, bcrypt, JSON Web Tokens (JWT)  
**Database:** MongoDB  
**Authentication:** JWT  
**Real-time Communication:** Socket.io


## 📂 Project Structure

├── server
│ ├── controllers/ # API business logic
│ ├── middleware/ # Auth middleware
│ ├── models/ # Mongoose models (User, Message)
│ ├── routes/ # API routes
│ ├── utils/ # Utility functions
│ ├── server.js # Entry point for backend
│ ├── .env # Environment variables
│
├── client
│ ├── src
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # React pages (Login, Chat)
│ │ ├── store/ # Zustand store for state management
│ │ ├── App.jsx # Main React app component
│ │ ├── main.jsx # React entry point
│
├── README.md # This file
├── package.json # Dependency & scripts for both server & client



## 💻 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/fullstack-chat-app.git
cd fullstack-chat-app
2️⃣ Install Dependencies
Backend

cd server
npm install
Frontend

cd ../client
npm install
3️⃣ Set Up Environment Variables
Create a .env file inside the server folder:

env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
4️⃣ Run the Application
Start Backend Server

bash
cd server
npm run dev
Start Frontend

bash
cd ../client
npm run dev
5️⃣ Open in Browser
Go to http://localhost:5173

📌 API Endpoints
User Authentication

POST /api/auth/register — Register a new user

POST /api/auth/login — User login

Messages

GET /api/messages/:chatId — Fetch chat messages

POST /api/messages — Send a message

Users

GET /api/users — Get list of users (for chat selection)

🛠️ Future Enhancements
✅ Typing indicators in chat

✅ Group chats & channels

✅ Message read receipts

✅ File sharing & emojis support

✅ Push notifications

✅ Deployment with Docker & CI/CD

👨‍💻 Developed by: Mythri Prasanna Paluri 🚀
This project was built by following the Burak Orkmez fullstack chat app tutorial.
All credits for the original architecture and codebase go to him.
