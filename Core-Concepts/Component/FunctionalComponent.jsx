// Components
// Functional Components
// Functional components are simple JavaScript functions that return JSX. They don't have their own state or lifecycle methods but can use hooks to add state and other features.

// Example:

import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;
