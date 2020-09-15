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
        type="number" 
        value={inputState}
        onChange={event => { dispatch(setInputVariable(event.target.value)) } }>
      </input>
      <div id="row3">
      <Button text="7" />
      <Button text="8" />
      <Button text="9" />
      </div>
      <div id="row2">
      <Button text="4" />
      <Button text="5" />
      <Button text="6" />
      </div>
      <div id="row1">
      <Button text="1" />
      <Button text="2" />
      <Button text="3" />
      </div>
    </div>
  );
};

export default CalculatorLayout;