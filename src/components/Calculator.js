import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewInputOne, addNewInputTwo, addNewResult, addNewOperation } from '../actions/Calculator';

const Calculator = props => {
  // State initialization
  const inputOne = useSelector(state => state.inputOne)
  const inputTwo = useSelector(state => state.inputTwo)
  const operation = useSelector(state => state.operator)
  const result = useSelector(state => state.result)
  const dispatch = useDispatch();

  // Arithmetic functions
  const addition = (x, y) => {
    return x + y;
  };

  const subtraction = (x, y) => {
    return x - y;
  };

  const multiplication = (x, y) => {
    return x * y;
  };

  const division = (x, y) => {
    return x / y;
  };

  // Calculate function
  const calculate = (event) => {
    // Prevent the page from reloading when we run the calculate function
    event.preventDefault();
    const x = parseInt(inputOne);
    const y = parseInt(inputTwo);

    // Set / overwrite the state of the result
    switch (operation) {
      case "+":
        {
          dispatch(addNewResult(addition(x, y)));
          break;
        }
      case "-":
        {
          dispatch(addNewResult(subtraction(x, y)));
          break;
        }
      case "*":
        {
          dispatch(addNewResult(multiplication(x, y)));
          break;
        }
      case "/":
        {
          dispatch(addNewResult(division(x, y)));
          break;
        }
      default:
        return 0;
    };
  };

  // Return JSX
  return (
    <div>
      <h1 className="title">Welcome to my Calculator</h1>
      <form onSubmit={calculate}>
        <label htmlFor="input-1">Input 1:</label>
        <input type="number" id="input-1" onChange={e => { dispatch(addNewInputOne(e.target.value)) }}></input>
        <label htmlFor="operations">Operation:</label>
        <select onChange={e => { dispatch(addNewOperation(e.target.value)) }} id="operations">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option></select>
        <label htmlFor="input-2">Input 2:</label>
        <input type="number" id="input-2" onChange={e => { dispatch(addNewInputTwo(e.target.value)) }}></input>
        <input id="bttn" type="submit" value="calculate" />
      </form>
      <h1>Results:</h1>
      <ul>
        {result.map( number => <li>{number}</li>)}
      </ul>
    </div>
  )
};

export default Calculator;