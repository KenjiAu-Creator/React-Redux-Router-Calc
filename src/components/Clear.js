import React from 'react';
import { useDispatch } from 'react-redux';
import { setInputVariable } from '../actions/Calculator';

const Clear = (props) => {
  const text = props.text;
  const dispatch = useDispatch();

  const ClearInput = () => {
    // Set the global input to be blank
    dispatch(setInputVariable(""));
  };

  return (
    <>
      <button onClick={ClearInput}>
        {text}
      </button>
    </>
  );
};

export default Clear;