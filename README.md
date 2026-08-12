# React Practice

A small component playground built while practicing React fundamentals — a sign-in form and a counter, both wired to real state, with a live state readout under each card.

**Live demo:** https://login-form-five-liard.vercel.app/

## What's inside

- **Sign In form** — controlled inputs for username, email, and password. Submitting appends the entry to a table below and clears the form. Passwords are masked in the table rather than shown in plain text.
- **Counter** — increment, decrement, reset, and a directly editable input. The display shifts color for positive/negative values.
- **Live state strip** — each card shows its current React state (`{ counter: 0 }`, `{ name: "", email: "" }`) in a small mono panel, so state changes are visible without opening dev tools.

## Tech stack

- React (Create React App)
- Plain CSS, no UI framework
- Deployed on [Vercel](https://vercel.com)

## Project structure

```
src/
├── App.js          # Layout shell: nav, hero, grid
├── App.css
├── Form.js          # Sign-in form + submitted entries table
├── Form.css
├── Counter.js       # Counter component
├── Counter.css
├── index.js         # Entry point
└── index.css        # Global styles, fonts, tokens
```

## Running locally

```bash
npm install
npm start
```

Opens at [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Outputs a production build to `/build`, ready to deploy (e.g. by dragging the folder into Vercel or connecting the repo for automatic deploys).

## Notes

This is a practice project, not a production auth flow — submitted credentials are kept in memory only and are not sent anywhere or persisted.