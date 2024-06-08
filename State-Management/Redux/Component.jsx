// Dispatch Actions:
// component.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchDataSuccess } from './actions';

const MyComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    const getData = async () => {
      dispatch(fetchData());
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    };

    getData();
  }, [dispatch]);

  return (
    <div>
      {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default MyComponent;
