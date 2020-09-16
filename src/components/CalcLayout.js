import React from 'react';
import Button from './Button';
import { setInputVariable } from '../actions/Calculator';
import CalcButton from '../components/CalculatorSingleInput';
import { useSelector, useDispatch } from 'react-redux';
import Clear from './Clear';
import Ans from './Ans';
import Delete from './Delete';
import './CalcLayout.css';

const CalculatorLayout = () => {
  const dispatch = useDispatch();
  const inputState = useSelector(state => state.input);

  return (
    <div className="singleCalculatorContainer">
      <section className="headers">
        <h1>Welcome to my React Calculator!</h1>
        <h3>Head to the Results page to see your results!</h3>
      </section>
      <div className="calculatorContainer">
        <input
          id="expressions"
          type="text"
          value={inputState}
          onChange={event => { dispatch(setInputVariable(event.target.value)) }}>
        </input>
        <div className="row" id="row3">
          <Button text="7" />
          <Button text="8" />
          <Button text="9" />
          <Button text="+" />
          <Button text="-" />
        </div>
        <div className="row" id="row2">
          <Button text="4" />
          <Button text="5" />
          <Button text="6" />
          <Button text="*" />
          <Button text="/" />
        </div>
        <div className="row" id="row1">
          <Button text="1" />
          <Button text="2" />
          <Button text="3" />
          <Delete text="Del" />
          <Clear text="Clear" />
        </div>
        <div className="row" id="row0">
          <Button text="0" />
          <Button text="." />
          <Ans text="Ans" />
          <CalcButton text="=" />
        </div>
      </div>
    </div>
  );
};

export default CalculatorLayout;