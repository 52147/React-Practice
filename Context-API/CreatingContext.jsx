// Creating Context
// To create a context, you use the React.createContext function. This function returns a context object with two components: a Provider and a Consumer.

// Example:
import React from 'react';

// Create a context with a default value
const ThemeContext = React.createContext('light');

export default ThemeContext;
