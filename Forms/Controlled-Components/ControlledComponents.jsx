// Controlled Components
// In React, a controlled component is an element whose value is controlled by React state. The form data is handled by the state within the component.

// Characteristics of Controlled Components:
// Value Controlled by State: The input field's value is controlled by the state of the component.
// Single Source of Truth: The React state is the single source of truth.
// Event Handling: Changes to the input are handled by event handlers, which update the state.
// Example:
import React, { useState } from 'react';

function ControlledForm() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
