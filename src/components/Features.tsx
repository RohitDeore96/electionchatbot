import React, { useState } from 'react';
import { Calendar, MapPin, CheckSquare, HelpCircle } from 'lucide-react';
import TimelineDemo from './demo/TimelineDemo';
import PollingStationsDemo from './demo/PollingStationsDemo';
import EligibilityDemo from './demo/EligibilityDemo';
import VotingGuideDemo from './demo/VotingGuideDemo';
import './Features.css';

const featureList = [
  {
    id: 'timeline',
    title: 'Election Timeline',
    description: 'Track important dates, registration deadlines, and election days.',
    icon: <Calendar size={32} />,
    color: 'var(--primary-color)'
  },
  {
    id: 'locator',
    title: 'Polling Station Locator',
    description: 'Find your nearest polling station and get directions.',
    icon: <MapPin size={32} />,
    color: 'var(--secondary-color)'
  },
  {
    id: 'eligibility',
    title: 'Eligibility Checker',
    description: 'Verify your eligibility and learn what documents you need.',
    icon: <CheckSquare size={32} />,
    color: 'var(--success-color)'
  },
  {
    id: 'guide',
    title: 'Step-by-Step Guide',
    description: 'A comprehensive guide for first-time voters.',
    icon: <HelpCircle size={32} />,
    color: 'var(--accent-color)'
  }
];

const Features = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const renderDemo = () => {
    switch (activeDemo) {
      case 'timeline': return <TimelineDemo />;
      case 'locator': return <PollingStationsDemo />;
      case 'eligibility': return <EligibilityDemo />;
      case 'guide': return <VotingGuideDemo />;
      default: return null;
    }
  };

  return (
    <div className="features-container">
      {activeDemo ? (
        <div className="demo-view">
          <button className="back-btn" onClick={() => setActiveDemo(null)}>
            ← Back to Features
          </button>
          {renderDemo()}
        </div>
      ) : (
        <div className="features-grid">
          {featureList.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon" style={{ color: feature.color, background: `color-mix(in srgb, ${feature.color} 15%, transparent)` }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
              <button className="feature-btn" onClick={() => setActiveDemo(feature.id)}>Explore</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Features;
