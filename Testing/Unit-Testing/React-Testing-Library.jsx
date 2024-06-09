// React Testing Library
// React Testing Library is a lightweight library for testing React components. It focuses on testing components from the user's perspective by querying the DOM in the same way a user would.

// Example Usage:
// Button.js
import React from 'react';

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;

// Button.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
  fireEvent.click(getByText('Click Me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
