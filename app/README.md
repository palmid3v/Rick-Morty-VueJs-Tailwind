# 👽 Rick & Morty — App Context

## 🎯 Purpose
A Vue 3 frontend practice project that consumes the public Rick and Morty API and renders characters through reusable components.

## ✨ Current implementation
- 👽 Character listing from the API
- 🧩 Reusable `CharacterCard` component
- 🧭 Vue Router
- 📱 Responsive grid
- 🎨 Utility-oriented styling

## 🧠 Data flow
`home.vue` fetches `https://rickandmortyapi.com/api/character`, stores the returned results in a Vue `ref`, and renders them through `CharacterCard.vue`.

## 📁 Structure
- `src/App.vue` — application shell
- `src/main.js` — Vue entry point
- `src/views/home.vue` — character listing and API fetch
- `src/views/character.vue` — character view
- `src/components/CharacterCard.vue` — reusable character UI
- `src/router/index.js` — routing
- `public/index.html` — HTML entry
- `package.json` — Vue CLI dependencies/scripts

## 🧱 Stack
Vue 3 · Vue Router 4 · Vue CLI · JavaScript · Rick and Morty API.

## ▶️ Commands
```bash
npm install
npm run serve
npm run build
npm run lint
```

## 📌 Status
Compact learning/portfolio experiment focused on API consumption, Vue state, routing, and reusable UI.