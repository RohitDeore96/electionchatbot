import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Features from './components/Features';

function App() {
  const [activeTab, setActiveTab] = useState('features');

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <section className="hero-section text-center">
          <h1>Your Personal Chess Guide</h1>
          <p className="subtitle">Understand processes, track timelines, and vote with confidence.</p>
        </section>

        <div className="content-tabs">
          <button 
            className={`tab-btn active`}
          >
            Explore Tools
          </button>
        </div>

        <div className="tab-content glass-panel">
          <Features />
        </div>
      </main>
      
      <footer className="app-footer">
        <p>Chess Assistant is an informational tool and not affiliated with official government entities.</p>
        <p><small>All data is processed locally. No external APIs used.</small></p>
      </footer>
    </div>
  );
}

export default App;
