import React from 'react';
import './DemoStyles.css';

const VotingGuideDemo = () => {
  return (
    <div className="demo-card guide">
      <h4>📖 Voting Guide</h4>
      <hr />
      <ul className="guide-steps">
        <li><span>Step 1:</span> Register as voter</li>
        <li><span>Step 2:</span> Verify documents</li>
        <li><span>Step 3:</span> Find polling station</li>
        <li><span>Step 4:</span> Carry valid ID</li>
        <li><span>Step 5:</span> Cast vote using EVM</li>
      </ul>
    </div>
  );
};

export default VotingGuideDemo;
