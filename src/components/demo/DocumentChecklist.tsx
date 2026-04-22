import React, { useState, useEffect } from 'react';
import './DemoStyles.css';

const DEFAULT_DOCS = [
  { id: '1', text: 'Voter ID Card', checked: false },
  { id: '2', text: 'Aadhaar Card or Passport (Backup)', checked: false },
  { id: '3', text: 'Polling Station Slip', checked: false },
  { id: '4', text: 'Pen (Blue/Black)', checked: false },
];

const DocumentChecklist = () => {
  const [docs, setDocs] = useState(DEFAULT_DOCS);

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem('election-docs');
    if (saved) {
      setDocs(JSON.parse(saved));
    }
  }, []);

  const toggleCheck = (id: string) => {
    const updated = docs.map(d => d.id === id ? { ...d, checked: !d.checked } : d);
    setDocs(updated);
    localStorage.setItem('election-docs', JSON.stringify(updated));
  };

  const resetList = () => {
    setDocs(DEFAULT_DOCS);
    localStorage.removeItem('election-docs');
  };

  return (
    <div className="demo-card checklist">
      <h4>📑 Document Checklist</h4>
      <hr />
      <p className="helper-text">Your progress is saved locally in your browser.</p>
      
      <div className="checklist-items">
        {docs.map(doc => (
          <label key={doc.id} className={`check-item ${doc.checked ? 'completed' : ''}`}>
            <input 
              type="checkbox" 
              checked={doc.checked} 
              onChange={() => toggleCheck(doc.id)} 
            />
            <span>{doc.text}</span>
          </label>
        ))}
      </div>

      <button className="reset-btn" onClick={resetList}>Reset Progress</button>
    </div>
  );
};

export default DocumentChecklist;
