import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputVariable } from '../actions/Calculator';

const Delete = (props) => {
  const text = props.text;
  const dispatch = useDispatch();
  const currentInput = useSelector(state => state.input);

  const deleteLastInput = () => {
    const newInput = currentInput.slice(0, currentInput.length-1); 
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