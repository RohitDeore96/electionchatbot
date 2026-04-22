import React, { useState } from 'react';
import './DemoStyles.css';

const FAQ_DATA = [
  { q: "How do I register to vote?", a: "You can register online via the official commission portal or offline by submitting Form 6 to your local Electoral Registration Officer." },
  { q: "What documents are valid for voting?", a: "The Voter ID (EPIC) is primary. You can also use Aadhaar, Passport, Driving License, or PAN Card." },
  { q: "Can I vote if I am not in my home state?", a: "Generally, you must vote at the polling station you are registered at. Postal ballots are restricted to specific categories of service personnel." },
  { q: "What are the polling timings?", a: "Usually 7:00 AM to 6:00 PM, but verify your specific region's notice." },
];

const FaqCenter = () => {
  const [search, setSearch] = useState("");

  const filtered = FAQ_DATA.filter(item => 
    item.q.toLowerCase().includes(search.toLowerCase()) || 
    item.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="demo-card faq">
      <h4>❓ FAQ Center</h4>
      <hr />
      <input 
        type="text" 
        placeholder="Search questions..." 
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <div className="faq-list">
        {filtered.map((item, idx) => (
          <div key={idx} className="faq-item">
            <strong>Q: {item.q}</strong>
            <p>A: {item.a}</p>
          </div>
        ))}
        {filtered.length === 0 && <p className="helper-text">No matching questions found.</p>}
      </div>
    </div>
  );
};

export default FaqCenter;
