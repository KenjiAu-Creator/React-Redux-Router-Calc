import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewInputVariable } from '../actions/Calculator';

const Answer = (props) => {
  const text = props.text;
  const dispatch = useDispatch();
  const results = useSelector(state => state.result);

  const LastResult = () => {
    const lastResult = results[results.length-1]; 
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