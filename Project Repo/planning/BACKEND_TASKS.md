# 🛠 BACKEND_TASKS.md

## ⚙️ Setup
- [ ] Initialize Node.js project
- [ ] Install Express, CORS, dotenv, body-parser, MongoDB driver or Mongoose
- [ ] Configure environment variables (.env)

## 🔐 Authentication & Roles
- [ ] Setup JWT authentication
- [ ] Create `User` and `Role` models (Mongoose)
- [ ] Define roles: User, Staff, Admin
- [ ] Middleware for RBAC access control
- [ ] Admin setup flow (create first Admin if none exists)

## 🧠 AI & Ideation
- [ ] Setup OpenAI or similar API integration
- [ ] Route: POST /api/ideas — receive brief, call AI, return ideas
- [ ] Sanitize and format AI responses

## 📋 Client Brief Handling
- [ ] Route: POST /api/brief — save client inputs
- [ ] Route: GET /api/brief/:id — fetch saved brief

## 💾 MongoDB
- [ ] Setup DB connection utility
- [ ] Create models for:
  - User
  - Role
  - Brief
  - Session (ideation + evaluations)

## 🧠 Pinecone Integration (Phase 2)
- [ ] Setup vector DB client
- [ ] Route: POST /api/evaluate — embed idea, score relevance
- [ ] Store vector IDs in session records

## 🧪 Testing & Security
- [ ] Rate limit requests per IP
- [ ] Sanitize all input
- [ ] Hash passwords with bcrypt
- [ ] Add backend validation logic

---
All routes, models, and middleware are designed for modularity and ease of testing.

