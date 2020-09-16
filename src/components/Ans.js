import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewInputVariable } from '../actions/Calculator';

const Answer = (props) => {
  const text = props.text;
  const dispatch = useDispatch();
  
  // Grab the global state results
  const results = useSelector(state => state.result);

  const LastResult = () => {
    // Grab the last element in the results array
    const lastResult = results[results.length-1];
    
    // Update the input state with the last element in the results
    dispatch(addNewInputVariable(lastResult));
  };

  return (
    <>
      <button onClick={LastResult}>
        {text}
      </button>
    </>
  );
};

export default Answer;