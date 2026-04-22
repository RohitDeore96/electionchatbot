import React, { useState } from 'react';
import { Calendar, MapPin, CheckSquare, HelpCircle, FileCheck, Bell, HelpCircle as FaqIcon, Landmark } from 'lucide-react';
import TimelineDemo from './demo/TimelineDemo';
import PollingStationsDemo from './demo/PollingStationsDemo';
import EligibilityDemo from './demo/EligibilityDemo';
import VotingGuideDemo from './demo/VotingGuideDemo';
import DocumentChecklist from './demo/DocumentChecklist';
import ReminderSystem from './demo/ReminderSystem';
import FaqCenter from './demo/FaqCenter';
import OfficialResources from './demo/OfficialResources';
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
    title: 'Polling Stations',
    description: 'Find your nearest polling station via OpenStreetMap fallback data.',
    icon: <MapPin size={32} />,
    color: 'var(--secondary-color)'
  },
  {
    id: 'eligibility',
    title: 'Eligibility Checker',
    description: 'Verify your eligibility deterministically without external servers.',
    icon: <CheckSquare size={32} />,
    color: 'var(--success-color)'
  },
  {
    id: 'guide',
    title: 'Voting Guide',
    description: 'A comprehensive step-by-step process for first-time voters.',
    icon: <HelpCircle size={32} />,
    color: 'var(--accent-color)'
  },
  {
    id: 'checklist',
    title: 'Document Checklist',
    description: 'Save required documents to browser storage.',
    icon: <FileCheck size={32} />,
    color: '#E02424' // Red
  },
  {
    id: 'reminders',
    title: 'Reminder System',
    description: 'Export .ics calendar files and browser notifications.',
    icon: <Bell size={32} />,
    color: '#8B5CF6' // Purple
  },
  {
    id: 'faq',
    title: 'FAQ Center',
    description: 'Search common questions based on local static data.',
    icon: <FaqIcon size={32} />,
    color: '#06B6D4' // Cyan
  },
  {
    id: 'official',
    title: 'Official Resources',
    description: 'Direct links to official election commission sites.',
    icon: <Landmark size={32} />,
    color: '#F97316' // Orange
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
      case 'checklist': return <DocumentChecklist />;
      case 'reminders': return <ReminderSystem />;
      case 'faq': return <FaqCenter />;
      case 'official': return <OfficialResources />;
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
