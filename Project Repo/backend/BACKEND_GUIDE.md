# 🧭 BACKEND\_GUIDE.md — Event Slammer Backend Walkthrough

## 📁 Overview

This backend powers the AI-enhanced ideation and session management for **Event Slammer**. It uses Express.js with simple modular routes and is ready for future expansion (auth, MongoDB, OpenAI, Pinecone).

---

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
npm install express cors dotenv
```

### 2. Create `.env` File

```env
PORT=3000
OPENAI_API_KEY=your-openai-key-here
MONGO_URI=your-mongodb-uri-here
```

### 3. Run Server

```bash
node index.js
```

> Server will start on `http://localhost:3000`

---

## 🔁 API Endpoints

### `POST /api/ideas`

Generates mock AI event ideas based on client brief inputs.

```json
Request Body:
{
  "audience": "young professionals",
  "goals": "launch a product",
  "theme": "innovation"
}

Response:
{
  "ideas": [
    { "title": "Gen Z Tech Fair", "description": "Immersive VR and influencer demos" },
    { "title": "Eco-Gamified Conference", "description": "Interactive booths + sustainable design" }
  ]
}
```

### `GET /`

Health check route for simple status confirmation.

---

## 🔮 Future Enhancements

- **Connect to OpenAI** for real-time idea generation
- **Add MongoDB** for storing briefs and sessions
- **Integrate Pinecone** for vector-based evaluation
- **Add JWT auth middleware** and RBAC roles

---

## 🧪 Testing Tips

- Use Postman or VSCode REST client to test `/api/ideas`
- Validate edge cases: empty input, malformed body
- Ensure CORS headers are respected for frontend connection

---

## 🗂 Suggested Structure (Next Phase)

```
backend/
├── index.js          # Entry point
├── routes/           # Express routers
│   └── ideas.js      # POST /api/ideas
├── services/         # OpenAI, Pinecone clients
├── models/           # Mongoose schemas
├── middleware/       # Auth, validation
└── .env              # Environment secrets
```

---

Happy building the backend! 🛠

