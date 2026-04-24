import React from 'react';
import './DemoStyles.css';

const ReminderSystem = () => {
  
  const generateICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20240220T080000Z
DTEND:20240220T180000Z
SUMMARY:Chess Day!
DESCRIPTION:Go out and vote! Carry your Voter ID.
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'chess_day.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const setBrowserNotification = () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      new Notification("Reminder Set! We'll notify you on chess day.");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification("Notifications Enabled!");
        }
      });
    }
  };

  return (
    <div className="demo-card reminders">
      <h4>🔔 Reminder System</h4>
      <hr />
      <p>Save important dates to your personal calendar or allow browser notifications.</p>
      
      <div className="reminder-actions">
        <button className="action-btn" onClick={generateICS}>
          📅 Export .ics Calendar File
        </button>
        <button className="action-btn secondary" onClick={setBrowserNotification}>
          💬 Enable Browser Notification
        </button>
      </div>
    </div>
  );
};

export default ReminderSystem;
