// Recoil is a state management library for React that aims to provide a more intuitive and powerful way to manage state in your application, similar to Redux but with a different approach.

// Here are some key concepts in Recoil:

// 1. **Atoms**: Units of state that are subscribed to by components. When an atom's state changes, all subscribed components re-render.
// 2. **Selectors**: Functions that derive state from atoms or other selectors. They can compute derived state based on the current state of atoms or other selectors.
// 3. **RecoilRoot**: A component that needs to wrap your entire application (or part of it) to provide the Recoil state context.

// Here's a quick example to illustrate how Recoil works:

// ### Setup Recoil

// 1. **Install Recoil**:

// npm install recoil


// 2. **Create Atoms and Selectors**:

// state.js
import { atom, selector } from 'recoil';

// Define an atom
export const taskState = atom({
  key: 'taskState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

// Define a selector
export const taskCountState = selector({
  key: 'taskCountState',
  get: ({ get }) => {
    const tasks = get(taskState);
    return tasks.length;
  },
});


// 3. **Use Recoil in Components**:

// TaskInput.js
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { taskState } from './state';

const TaskInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useRecoilState(taskState);

  const addTask = () => {
    setTasks([...tasks, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;


// 4. **Display Task Count**:
// TaskCount.js
import React from 'react';
import { useRecoilValue } from 'recoil';
import { taskCountState } from './state';

const TaskCount = () => {
  const count = useRecoilValue(taskCountState);

  return <div>Task Count: {count}</div>;
};

export default TaskCount;


// 5. **Wrap Your App with RecoilRoot**:

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './App';

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById('root')
);


// 6. **App Component**:
// App.js
import React from 'react';
import TaskInput from './TaskInput';
import TaskCount from './TaskCount';

const App = () => (
  <div>
    <TaskInput />
    <TaskCount />
  </div>
);

export default App;

// In this setup, `TaskInput` allows users to add tasks, which updates the `taskState` atom. `TaskCount` uses a selector to derive and display the number of tasks. The entire app is wrapped in `RecoilRoot` to provide the Recoil context.