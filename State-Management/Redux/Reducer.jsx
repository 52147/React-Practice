// Create a Reducer:

// reducer.js
const initialState = {
    data: [],
    loading: false
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA':
        return { ...state, loading: true };
      case 'FETCH_DATA_SUCCESS':
        return { ...state, loading: false, data: action.payload };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  