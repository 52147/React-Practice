// Context API
// The Context API is a built-in feature of React that allows you to share state across the entire app (or part of it) without having to pass props down manually through every level of the component tree.

// Provider: A component that provides the state to its children.
// Consumer: A component that consumes the state provided by the provider.
// useContext Hook: A React hook that simplifies consuming the context.
// Example:
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [state, setState] = useState('initial state');

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

const MyComponent = () => {
  const { state, setState } = useContext(MyContext);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState('new state')}>Change State</button>
    </div>
  );
};

const App = () => (
  <MyProvider>
    <MyComponent />
  </MyProvider>
);

export default App;
