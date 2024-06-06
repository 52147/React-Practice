// useCallback
// The useCallback hook returns a memoized callback function. It’s useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

// Example:
import React, { useState, useCallback } from 'react';

function Button({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}

function App() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Dependencies array ensures useCallback returns the same function reference

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
