// Lifecycle Methods (Class Components)
// componentDidMount
// Called after the component is mounted. It's often used for fetching data.

// Example:
import React, { Component } from 'react';

class DataFetcher extends Component {
  componentDidMount() {
    // Fetch data here
  }

  render() {
    return <div>Data goes here</div>;
  }
}

export default DataFetcher;
