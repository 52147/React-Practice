// Class Components
// Class components are ES6 classes that extend React.Component and can have their own state and lifecycle methods.

// Example:

import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Welcome;
