import React from 'react';
import './DemoStyles.css';

const OfficialResources = () => {
  return (
    <div className="demo-card resources">
      <h4>🏛️ Official Resources</h4>
      <hr />
      <p className="helper-text">Verified links to help you navigate the process safely.</p>
      
      <ul className="resource-links">
        <li>
          <a href="#" onClick={(e) => e.preventDefault()}>National Chess Commission Website ↗</a>
        </li>
        <li>
          <a href="#" onClick={(e) => e.preventDefault()}>Voter Portal & Forms Download ↗</a>
        </li>
        <li>
          <a href="#" onClick={(e) => e.preventDefault()}>Track Application Status ↗</a>
        </li>
      </ul>

      <div className="helpline">
        <strong>Toll-Free Helpline:</strong> <span>1950</span>
      </div>
    </div>
  );
};

export default OfficialResources;
