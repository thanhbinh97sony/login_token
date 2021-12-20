import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../Counter/counterSlice';

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  const handleClick = () => {
    const action = increase();
    dispatch(action);
  };
  const handleClick1 = () => {
    const action = decrease();
    dispatch(action);
  };
  return (
    <div>
      Counter: {count}
      <div>
        <button onClick={handleClick}>Increase</button>
        <button onClick={handleClick1}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterFeature;
