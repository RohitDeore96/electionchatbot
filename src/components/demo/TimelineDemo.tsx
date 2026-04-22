import React, { useEffect, useState } from 'react';
import { fetchElectionEvents } from '../../services/mockDataService';
import { ElectionEvent } from '../../types';
import './DemoStyles.css';

const TimelineDemo = () => {
  const [event, setEvent] = useState<ElectionEvent | null>(null);

  useEffect(() => {
    fetchElectionEvents().then(data => setEvent(data[0]));
  }, []);

  if (!event) return <div className="loading">Loading timeline...</div>;

  return (
    <div className="demo-card timeline">
      <h4>📅 Election Timeline</h4>
      <hr />
      <ul className="timeline-list">
        <li><span>Registration Start:</span> {new Date(event.registrationStart).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</li>
        <li><span>Registration End:</span> {new Date(event.registrationEnd).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</li>
        <li><span>Verification:</span> {event.verificationPeriod}</li>
        <li className="highlight"><span>Voting Day:</span> {new Date(event.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</li>
        <li><span>Results:</span> {new Date(event.resultsDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</li>
      </ul>
    </div>
  );
};

export default TimelineDemo;
