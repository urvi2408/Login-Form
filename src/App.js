import React from 'react';
import Form from './Form';
import Count from './Counter';
import './App.css';

function App() {
  return (
    <div className="page">
      <nav className="topnav">
        <div className="brand">
          <span className="brand-mark">R</span>
          <span className="brand-name">React Practice</span>
        </div>
        <span className="nav-meta mono">component playground</span>
      </nav>

      <header className="hero">
        <span className="eyebrow">Component Playground</span>
        <h1>Practice, wired to state.</h1>
        <p>
          Two small components, both hooked up to real React state. Each card
          shows the live value underneath, no dev tools required.
        </p>
      </header>

      <main className="app-shell">
        <Form />
        <Count />
      </main>
    </div>
  );
}

export default App;