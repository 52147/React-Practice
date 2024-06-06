// Full Example
// Here's a complete example that puts everything together:

// Create a context:
// ThemeContext.js
import React from 'react';

const ThemeContext = React.createContext('light');

export default ThemeContext;
// Create a provider:
// ThemeProvider.js
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
// // ThemedButton.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme
    </button>
  );
}

export default ThemedButton;
// Wrap your application with the provider:
// App.js
import React from 'react';
import ThemeProvider from './ThemeProvider';
import ThemedButton from './ThemedButton';

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Welcome to the Themed App!</h1>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}

export default App;






