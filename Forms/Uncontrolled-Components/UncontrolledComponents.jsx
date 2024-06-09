// Uncontrolled Components
// Uncontrolled components are form elements that store their own state internally. React does not control the value of these elements. Instead, you can use refs to access their values.

// Characteristics of Uncontrolled Components:
// Value Controlled by DOM: The input field's value is controlled by the DOM.
// Refs: React refs are used to access the input's value directly from the DOM.
// Less Boilerplate: There's less code to manage the state.
// Example:
import React, { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
