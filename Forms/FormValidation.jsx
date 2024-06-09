// Form Validation
// Form validation ensures that the data entered by a user meets certain criteria before it is submitted. Validation can be done in several ways, including using built-in HTML validation, custom validation with JavaScript, or using libraries like Formik or React Hook Form.

// Example of Basic Validation in a Controlled Component:
import React, { useState } from 'react';

function ValidatedForm() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.length < 5) {
      setError('Input must be at least 5 characters long');
    } else {
      setError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!error) {
      alert(`Submitted: ${inputValue}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" disabled={!!error}>Submit</button>
    </form>
  );
}

export default ValidatedForm;
