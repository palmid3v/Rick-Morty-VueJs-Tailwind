# 👽 Rick & Morty — Vue.js + Tailwind

A compact Vue 3 frontend practice project that consumes the public Rick and Morty API and renders characters through reusable components and routing.

> **Current status:** Learning/portfolio experiment focused on API consumption, Vue state, routing, reusable UI, and responsive layouts.

## 🎯 Product scope

- Public API consumption
- Character listing
- Reusable character presentation
- Route-based views
- Responsive grid UI

## ✨ Current capabilities

- 👽 Character listing from the Rick and Morty API
- 🧩 Reusable CharacterCard
- 🧭 Vue Router
- 📱 Responsive layout
- 🎨 Utility-oriented styling
- Character-oriented view structure

## 🛠️ Technology

| Technology | Role |
| --- | --- |
| Vue 3 | UI |
| Vue Router 4 | Routing |
| Vue CLI | Tooling |
| JavaScript | Application language |
| Rick and Morty API | External data source |

## 🧠 Data flow

The home view fetches:
https://rickandmortyapi.com/api/character

Returned data is kept in Vue reactive state and rendered through CharacterCard.vue.

## 📁 Repository structure

~~~text
Rick-Morty-VueJs-Tailwind/
├── app/
│   ├── src/
│   └── README.md
├── archive/
├── CONTEXT.md
└── README.md
~~~

## 🚀 Development

~~~bash
cd app
npm install
npm run serve
npm run build
npm run lint
~~~

## 📌 Project boundary

This is a compact practice project, not a production data platform.

## 📚 Project context

See CONTEXT.md for the current implementation map and learning scope.

---

**PALMI-D3V** · Rick & Morty Vue experiment · 2026