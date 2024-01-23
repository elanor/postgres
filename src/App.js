import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {data ? data : "Loading..."}
        </p>
      </header>
    </div>
  );
}

export default App;
