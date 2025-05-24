# 💬 Fullstack Chat Application

description: >
  A full-stack real-time chat web application built using React.js, Node.js,
  Express.js, MongoDB, and Socket.io for instant messaging. 🚀

features:
  - 🔐 User authentication & authorization (JWT)
  - 💬 Real-time messaging with Socket.io
  - 🟢 Online/offline user status indication
  - 📚 Chat history with MongoDB persistence
  - 📱 Responsive UI with Tailwind CSS
  - 🔒 Password hashing with bcrypt
  - ⚙️ REST API for user & message management

tech_stack:
  frontend:
    - ⚛️ React.js
    - ⚡ Vite
    - 🎨 Tailwind CSS
    - 🗃️ Zustand (state management)
    - 🔗 Socket.io-client
  backend:
    - 🟩 Node.js
    - 🚂 Express.js
    - 🍃 MongoDB (via Mongoose)
    - 🔗 Socket.io
    - 🔐 bcrypt
    - 🛡️ JSON Web Tokens (JWT)
  database:
    - 🍃 MongoDB
  authentication:
    - 🛡️ JWT
  realtime_communication:
    - 🔗 Socket.io

project_structure:
  server:
    - controllers: "🛠️ API business logic"
    - middleware: "🛡️ Auth middleware"
    - models: "📦 Mongoose models (User, Message)"
    - routes: "🔀 API routes"
    - utils: "🔧 Utility functions"
    - server_js: "🚀 Entry point for backend"
    - env: "🔐 Environment variables"
  client:
    src:
      - components: "🧩 Reusable UI components"
      - pages: "📄 React pages (Login, Chat)"
      - store: "🗃️ Zustand store for state management"
      - App_jsx: "🖥️ Main React app component"
      - main_jsx: "🚪 React entry point"
  root_files:
    - README_md: "📄 This file"
    - package_json: "📦 Dependency & scripts for both server & client"

installation_setup:
  steps:
    - Clone_the_Repository: 
        commands:
          - git clone https://github.com/Mythripaluri/chat-app.git
          - cd chat-app
    - Install_Dependencies:
        backend:
          - cd server
          - npm install
        frontend:
          - cd ../client
          - npm install
    - Set_Up_Environment_Variables:
        instructions: "📝 Create a .env file inside the server folder"
        env_file_content: |
          PORT=5000
          MONGODB_URI=your_mongodb_connection_string
          JWT_SECRET=your_jwt_secret
    - Run_the_Application:
        backend:
          - cd server
          - npm run dev
        frontend:
          - cd ../client
          - npm run dev
    - Open_in_Browser:
        url: http://localhost:5173

api_endpoints:
  user_authentication:
    - POST: /api/auth/register  # 🆕 Register a new user
    - POST: /api/auth/login     # 🔑 User login
  messages:
    - GET: /api/messages/:chatId  # 📥 Fetch chat messages
    - POST: /api/messages          # 📤 Send a message
  users:
    - GET: /api/users  # 👥 Get list of users (for chat selection)

future_enhancements:
  - ✍️ Typing indicators in chat
  - 👥 Group chats & channels
  - ✅ Message read receipts
  - 📁 File sharing & emojis support
  - 🔔 Push notifications
  - 🐳 Deployment with Docker & CI/CD

credits:
  developed_by: "👨‍💻 Mythri Prasanna Paluri"
  notes: >
    This project was built by following a fullstack chat app tutorial.  
