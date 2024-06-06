// useRef
// The useRef hook is used to persist values between renders without causing a re-render. It's often used to access DOM elements directly.

// Example:
import React, { useRef } from 'react';

function TextInput() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default TextInput;
