// useEffect
// The useEffect hook is used to perform side effects in functional components, such as fetching data, directly updating the DOM, and setting up subscriptions.

// Example:
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {data ? <p>Data: {data}</p> : <p>Loading...</p>}
    </div>
  );
}

export default DataFetcher;
