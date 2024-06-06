// Babel
// Transpiling ES6+ to ES5 with Babel:

// 1. Initialize npm and install Babel dependencies:
npm init -y
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
// 2.  Create a Babel configuration file (.babelrc):

{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
  }

//  3. Create a source file (src/index.js):

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <h1>Hello, Babel!</h1>;

ReactDOM.render(<App />, document.getElementById('root'));
// 4. Transpile the code:
npx babel src --out-dir dist

