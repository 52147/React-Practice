// In React, "context" refers to a feature that allows you to share data (state) across multiple components without having to pass props down manually at every level. It is especially useful for managing global data that needs to be accessed by many components at different levels of the component tree, such as user authentication status, theme settings, or application settings.

// ### Key Concepts of React Context

// 1. **Creating Context**: You create a context using `React.createContext()`. This returns a context object that contains a Provider and a Consumer component.

// 2. **Provider**: The Provider component is used to wrap parts of your application that need access to the context. It accepts a `value` prop, which represents the data that should be available to the context consumers.

// 3. **Consumer**: The Consumer component allows any nested component to subscribe to the context changes. It can be used to access the context value provided by the nearest Provider.

// 4. **useContext Hook**: The `useContext` hook provides a way to access the context value directly within functional components.

// ### Example of Using React Context

// #### Step 1: Create a Context


import React, { createContext, useState } from 'react';

// Create a Context for the current theme (with "light" as the default).
const ThemeContext = createContext('light');

export default ThemeContext;


// #### Step 2: Create a Provider Component

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


// #### Step 3: Use the Provider in Your Application

import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from './ThemeProvider';
import App from './App';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);


// #### Step 4: Consume the Context in a Component

// Using the `useContext` hook:


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

// Using the Consumer component:


import React from 'react';
import ThemeContext from './ThemeContext';

function ThemedButton() {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <button
          style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemedButton;


// ### Advantages of Using Context

// 1. **Avoids Prop Drilling**: Context helps in avoiding prop drilling, where you pass props down through multiple layers of components.
// 2. **Centralized State Management**: It allows for centralized management of global state that can be accessed from any component within the Provider.
// 3. **Cleaner Code**: It makes the code cleaner and easier to manage by reducing the number of props passed between components.

// ### When to Use Context

// - When you have data that needs to be accessed by many components at different nesting levels.
// - When you want to avoid passing props through many layers of the component tree.
// - For global data such as theme, user information, locale settings, and other application-wide settings.

// Using context can simplify the management of state and props in your application, especially as it grows in complexity.