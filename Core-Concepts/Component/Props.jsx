// Props
// Props (short for properties) are read-only attributes used to pass data from parent to child components.

// Example:
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  // Usage
  <Welcome name="Alice" />
  