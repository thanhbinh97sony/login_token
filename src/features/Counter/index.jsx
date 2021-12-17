import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../Counter/counterSlice';

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
