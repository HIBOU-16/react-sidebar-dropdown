import React, { useState, useEffect } from "react";

export const AllOutput = () => {
  const [scans, setScans] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/scans')
      .then(response => response.json())
      .then(data => setScans(data))
      .catch(err => console.error('Error fetching scans:', err));
  }, []);

  return (
    <div className="allOutput">
      <h1 style={{ margin: 0, padding: '20px', backgroundColor: 'rgb(56, 176, 0) ', color: 'white' }}>All Output Tool</h1>
      <section className="outputSection" style={{ flex: 1, margin: '20px', padding: '20px', backgroundColor: '#f0f0f0', border: '2px solid #ccc', borderRadius: '5px', overflow: 'auto' }}>
        <div>
          {scans.map((scan, index) => (
            <div key={index}>
              <h3 style={{ margin: '10px 0' }}>{scan.ip} - {scan.fileName}</h3>
              <pre style={{ whiteSpace: 'pre-wrap' }}>{scan.content}</pre>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllOutput;
