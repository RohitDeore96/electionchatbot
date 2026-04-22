import React, { useEffect, useState } from 'react';
import { fetchPollingStations } from '../../services/mockDataService';
import { PollingStation } from '../../types';
import './DemoStyles.css';

const PollingStationsDemo = () => {
  const [stations, setStations] = useState<PollingStation[]>([]);

  useEffect(() => {
    fetchPollingStations().then(data => setStations(data));
  }, []);

  return (
    <div className="demo-card stations">
      <h4>📍 Nearby Polling Stations</h4>
      <hr />
      <ol className="stations-list">
        {stations.map((station, idx) => (
          <li key={station.id}>
            <strong>{station.name}</strong> <span className="distance">({station.distance})</span>
          </li>
        ))}
      </ol>
      <div className="map-placeholder">
        (Map integrated via Google Maps API)
      </div>
    </div>
  );
};

export default PollingStationsDemo;
