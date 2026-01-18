# Pantry AI 🍳

Pantry AI is a web application that helps users discover recipes based on the ingredients they already have. Instead of searching for recipes and then shopping, users input available ingredients and receive structured, easy-to-follow recipe suggestions generated using AI.

The project is built web-first and is designed to scale to desktop (Electron) and mobile (React Native) platforms.

---

## Features (MVP)

- Input a list of available ingredients
- Generate recipes using AI (Gemini)
- Structured recipe output:
  - Recipe name
  - Ingredients used
  - Missing ingredients (if any)
  - Step-by-step instructions
  - Cooking time and calorie estimate

- Clean, responsive UI

---

## Tech Stack

### Current

- **Next.js (React)**
- **TypeScript**
- **Gemini API**
- **Node.js**

### Planned

- **Electron** (Desktop app)
- **React Native (Expo)** (Mobile app)
- Shared logic via monorepo architecture

---

## Architecture Overview

```
Client (Next.js UI)
   ↓
API Routes (Server-side)
   ↓
Gemini API
```

AI calls are handled server-side to ensure:

- API key security
- Prompt control
- Consistent output format

---

## Getting Started

### Prerequisites

- Node.js (18+ recommended)
- npm / pnpm / yarn
- Gemini API key

### Installation

```bash
git clone https://github.com/<your-username>/pantry-ai.git
cd pantry-ai
npm install
```

### Environment Variables

Create a `.env.local` file:

```
GEMINI_API_KEY=your_api_key_here
```

### Run the App

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## Project Status

This project is currently in **active development**.

Initial focus:

- Web MVP
- Stable AI output format
- Clean separation of UI and logic

Desktop and mobile apps will be added after the web version stabilizes.

---

## Roadmap (High Level)

- [ ] Ingredient input UI
- [ ] Gemini integration
- [ ] Structured recipe schema
- [ ] Result caching
- [ ] Electron desktop app
- [ ] React Native mobile app

---

## License

MIT
