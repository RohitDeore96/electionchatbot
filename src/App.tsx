import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import ChatAssistant from './components/ChatAssistant';
import Features from './components/Features';

function App() {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <section className="hero-section text-center">
          <h1>Your Personal Election Guide</h1>
          <p className="subtitle">Understand processes, track timelines, and vote with confidence.</p>
        </section>

        <div className="content-tabs">
          <button 
            className={`tab-btn ${activeTab === 'chat' ? 'active' : ''}`}
            onClick={() => setActiveTab('chat')}
          >
            Ask Assistant
          </button>
          <button 
            className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Explore Tools
          </button>
        </div>

        <div className="tab-content glass-panel">
          {activeTab === 'chat' ? <ChatAssistant /> : <Features />}
        </div>
      </main>
      
      <footer className="app-footer">
        <p>Election Assistant is an informational tool and not affiliated with official government entities.</p>
      </footer>
    </div>
  );
}

export default App;
