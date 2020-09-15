import React from 'react';
import Button from './Button';
import { setInputVariable } from '../actions/Calculator';
import {useSelector, useDispatch} from 'react-redux';

const CalculatorLayout = () => {
  const dispatch = useDispatch();
  const inputState = useSelector(state => state.input );
  return (
    <div>
      <input 
        id="expressions"
        type="text" 
        value={inputState}
        onChange={event => { dispatch(setInputVariable(event.target.value)) } }>
      </input>
      <div id="row3">
      <Button text="7" />
      <Button text="8" />
      <Button text="9" />
      <Button text="+" />
      <Button text="-" />
      </div>
      <div id="row2">
      <Button text="4" />
      <Button text="5" />
      <Button text="6" />
      <Button text="*" />
      <Button text="/" />
      </div>
      <div id="row1">
      <Button text="1" />
      <Button text="2" />
      <Button text="3" />
      <Button text="Del" />
      <Button text="Clear" />
      </div>
      <div id="row0">
      <Button text="0" />
      <Button text="." />
      <Button text="Ans" />
      <Button text="=" />
      </div>
    </div>
  );
};

export default CalculatorLayout;