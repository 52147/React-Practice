// Middleware (Thunk, Saga)
// Redux Thunk: Allows you to write action creators that return a function instead of an action, useful for handling asynchronous logic.

const incrementAsync = () => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(incrementAction());
      }, 1000);
    };
  };
//   Redux Saga: A middleware library that uses generator functions to handle side effects.

import { takeEvery, put, delay } from 'redux-saga/effects';

function* incrementAsync() {
  yield delay(1000);
  yield put(incrementAction());
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

  