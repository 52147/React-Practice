// Redux
// Redux is a state management library that provides a predictable state container for JavaScript applications. It is widely used with React and helps manage the state of the application in a more predictable way.
// Setting Up Redux
// Install Redux and React-Redux:
// npm install redux react-redux

// Actions: Plain JavaScript objects that describe what happened in the app. They have a type property and can carry additional data.
// Reducers: Pure functions that take the current state and an action, and return a new state.
// Store: An object that holds the application state and provides methods to access the state, dispatch actions, and register listeners.
// Middleware: Functions that intercept actions dispatched to the reducer to add additional logic. Popular middleware includes Thunk and Saga.
// Actions
// actions.js
export const fetchData = () => ({
    type: 'FETCH_DATA'
  });
  
  export const fetchDataSuccess = (data) => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: data
  });
  