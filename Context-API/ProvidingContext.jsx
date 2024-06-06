// Providing Context
// To provide context to components, you use the Provider component that comes with the context object. The Provider component accepts a value prop, which is the value you want to pass down to the consuming components.

// Example:
import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
// In the above example, ThemeProvider is a component that wraps its children with the ThemeContext.Provider and passes down the current theme and a function to update it.


