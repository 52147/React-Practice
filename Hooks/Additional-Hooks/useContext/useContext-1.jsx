// useContext
// The useContext hook is used to access the value of a context directly within a functional component.

// Example:
import React, { useContext } from 'react';

const MyContext = React.createContext('default value');

function DisplayValue() {
  const value = useContext(MyContext);

  return <p>Value: {value}</p>;
}

function App() {
  return (
    <MyContext.Provider value="Hello, World!">
      <DisplayValue />
    </MyContext.Provider>
  );
}

export default App;
