# RhinoSnips

An AI-powered code snippet manager built with React, Node.js, and OpenAI. Save, organize, and intelligently search your code snippets with syntax highlighting and AI-assisted tagging.

## Features

- 🤖 AI-powered snippet tagging and description via OpenAI
- 🎨 Syntax highlighting for 50+ languages with react-syntax-highlighter
- 💾 Full CRUD — create, edit, delete, and organize snippets
- 🔍 Search and filter snippets by language or tag
- 🌊 Smooth UI with Lenis scroll animations
- 📦 MongoDB persistence for all snippets

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Tailwind CSS, react-syntax-highlighter, Lenis |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| AI | OpenAI API |

## Getting Started

```bash
git clone https://github.com/bokhtier19/RhinoSnips.git
cd RhinoSnips

# Backend
cd backend
cp .env.example .env
npm install && npm run dev

# Frontend (new terminal)
cd frontend
npm install && npm run dev
```

### Environment Variables

```env
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
PORT=5000
```

## License
MIT