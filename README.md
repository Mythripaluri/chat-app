# 💬 Fullstack Chat Application

A full-stack real-time chat web application built using React.js, Node.js, Express.js, MongoDB, and Socket.io for instant messaging. 🚀

---

## 🚀 Features

- 🔐 User authentication & authorization (JWT)
- 💬 Real-time messaging with Socket.io
- 🟢 Online/offline user status indication
- 📚 Chat history with MongoDB persistence
- 📱 Responsive UI with Tailwind CSS
- 🔒 Password hashing with bcrypt
- ⚙️ REST API for user & message management

---

## 🛠️ Tech Stack

**Frontend:**  
⚛️ React.js, ⚡ Vite, 🎨 Tailwind CSS, 🗃️ Zustand, 🔗 Socket.io-client  

**Backend:**  
🟩 Node.js, 🚂 Express.js, 🍃 MongoDB (Mongoose), 🔗 Socket.io, 🔐 bcrypt, 🛡️ JWT  


## 💻 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Mythripaluri/chat-app.git
cd chat-app

2️⃣ Install Dependencies
Backend
cd ../client
npm install

Frontend
cd ../client
npm install

3️⃣ Set Up Environment Variables
Create a .env file in the server folder:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4️⃣ Run the Application
Backend
cd server
npm run dev
Frontend
cd ../client
npm run dev

5️⃣ Open in Browser
📬 Navigate to: http://localhost:5173

📌 API Endpoints
User Authentication

POST /api/auth/register — 🆕 Register

POST /api/auth/login — 🔑 Login

Messages

GET /api/messages/:chatId — 📥 Fetch messages

POST /api/messages — 📤 Send message

Users

GET /api/users — 👥 Fetch all users

🔮 Future Enhancements
✍️ Typing indicators

👥 Group chats

✅ Message read receipts

📁 File sharing & emoji support

🔔 Push notifications

🐳 Docker & CI/CD deployment

👨‍💻 Developed by: Mythri Prasanna Paluri
🎓 Inspired by Burak Orkmez's Fullstack Chat App Tutorial 🙏
