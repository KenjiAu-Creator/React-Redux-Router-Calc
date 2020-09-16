import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputVariable } from '../actions/Calculator';

const Delete = (props) => {
  const text = props.text;
  const dispatch = useDispatch();
  
  // Grab the global input state
  const currentInput = useSelector(state => state.input);

  const deleteLastInput = () => {
    // Grab the input string and take away the last number
    const newInput = currentInput.slice(0, currentInput.length-1);
    
    // Update the store
    dispatch(setInputVariable(newInput));
  };

  return (
    <>
      <button onClick={deleteLastInput}>
        {text}
      </button>
    </>
  );
};

export default Delete;