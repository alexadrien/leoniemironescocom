import React from 'react';
import logo from './photo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.sipios.com/blog/avenir-fintech-paiement"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fintech : l'avenir du paiement
        </a>
      </header>
    </div>
  );
}

export default App;
