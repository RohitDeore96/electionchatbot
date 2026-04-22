import React, { useState } from 'react';
import { checkEligibility, MOCK_ELIGIBILITY_RULE } from '../../services/mockDataService';
import './DemoStyles.css';

const EligibilityDemo = () => {
  const [age, setAge] = useState(19);
  const [citizenship, setCitizenship] = useState('Indian');
  const [result, setResult] = useState<{eligible: boolean, reason?: string} | null>(null);

  const handleCheck = () => {
    const res = checkEligibility(
      { uid: 'test', email: 'test', region: 'National', preferences: { language: 'en', notifications: false }, age, citizenship },
      MOCK_ELIGIBILITY_RULE
    );
    setResult(res);
  };

  return (
    <div className="demo-card eligibility">
      <h4>✅ Eligibility Checker</h4>
      <hr />
      <div className="form-group">
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
      </div>
      <div className="form-group">
        <label>Citizenship:</label>
        <input type="text" value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
      </div>
      <button className="check-btn" onClick={handleCheck}>Check</button>
      
      {result && (
        <div className={`result ${result.eligible ? 'success' : 'error'}`}>
          {result.eligible ? '✔ Eligible to vote' : `❌ Not Eligible: ${result.reason}`}
        </div>
      )}
    </div>
  );
};

export default EligibilityDemo;
