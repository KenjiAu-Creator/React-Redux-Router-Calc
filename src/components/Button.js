import React from 'react';
import './components/button.css'
import { useDispatch } from 'react-redux';
import { addNewInputVariable } from '../actions/Calculator';


const Button = props => {
  // Set the button to be the prop we pass into the component
  const text = props.text;
  const dispatch = useDispatch();

  // Create a onClick function for adding the text to the input state
  const addInputVariable = () => {
    // Action to add to input state
    dispatch(addNewInputVariable(text));
  };

  // Output the button
  return (
    <>
      <button onClick={addInputVariable}>
        {text}
      </button>
    </>
  );
};

export default Button;