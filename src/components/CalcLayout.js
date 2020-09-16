import React from 'react';
import Button from './Button';
import { setInputVariable } from '../actions/Calculator';
import CalcButton from '../components/CalculatorSingleInput';
import {useSelector, useDispatch} from 'react-redux';
import Clear from './Clear';
import Ans from './Ans';

const CalculatorLayout = () => {
  const dispatch = useDispatch();
  const inputState = useSelector(state => state.input );

  // currently need to code in delete function.

  return (
    <div>
      <h1>Welcome to my React Calculator with Buttons!</h1>
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
      <Clear text="Clear" />
      </div>
      <div id="row0">
      <Button text="0" />
      <Button text="." />
      <Ans text="Ans" />
      <CalcButton text="=" />
      </div>
    </div>
  );
};

export default CalculatorLayout;