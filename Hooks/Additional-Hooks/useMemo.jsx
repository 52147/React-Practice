// useMemo
// The useMemo hook returns a memoized value. It’s useful for optimizing expensive calculations that depend on certain dependencies.

// Example:
import React, { useState, useMemo } from 'react';

function ExpensiveComponent({ number }) {
  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    return num * 2;
  };

  const result = useMemo(() => expensiveCalculation(number), [number]);

  return <p>Result: {result}</p>;
}

function App() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setNumber(prev => prev + 1)}>Increment Number</button>
      <button onClick={() => setCount(prev => prev + 1)}>Increment Count</button>
      <ExpensiveComponent number={number} />
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
