import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewResult } from '../actions/Calculator';

const CalculatorSingleInput = props => {
  //State initialization.
  const text = props.text;
  const userInput = useSelector(state => state.input);
  const dispatch = useDispatch();

  // First create an array with only the numbers we need to work with.
  let numbersArray = userInput.split(/[+-/\\*\\]/);

  // Create an array with just the operations we are working with.
  let operationsArray = userInput.split(/[0123456789]/);

  // Remove the empty cell at the end.
  operationsArray = operationsArray.slice(1, operationsArray.length - 1);

  // Arithmetic functions.
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

    // Remove the "" cells inside the operations array
    let operationsArrayTrimmed = operationsArray.join("").trim().split("");

    while (operationsArrayTrimmed.length >= 1 && operationsArrayTrimmed[0] !== "") {
      // Check for multiplication first
      let multiIndex = operationsArrayTrimmed.indexOf("*");
      while (multiIndex >= 0) {
        const ans = multiplication(Number(numbersArray[multiIndex]), Number(numbersArray[multiIndex + 1]));
        // Removing the operation from the operation array.
        operationsArrayTrimmed.splice(multiIndex, 1);

        // Removing the two numbers used in the operation and replacing with the result.
        numbersArray.splice(multiIndex, 2, ans);

        // Check to see if anymore multiplication
        multiIndex = operationsArrayTrimmed.indexOf("*");
      };

      // Check for division next
      let divideIndex = operationsArrayTrimmed.indexOf("/");
      while (divideIndex >= 0) {
        const ans = division(Number(numbersArray[divideIndex]), Number(numbersArray[divideIndex + 1]));
        // Removing the operation from the operation array.
        operationsArrayTrimmed.splice(divideIndex, 1);

        // Removing the two numbers used in the operation and replacing with the result.
        numbersArray.splice(divideIndex, 2, ans);

        // Check to see if anymore division.
        divideIndex = operationsArrayTrimmed.indexOf("/");
      };

      // Check for addition
      let addIndex = operationsArrayTrimmed.indexOf("+");
      while (addIndex >= 0) {
        const ans = addition(Number(numbersArray[addIndex]), Number(numbersArray[addIndex + 1]));
        // Removing the operation from the operation array.
        operationsArrayTrimmed.splice(addIndex, 1);

        // Removing the two numbers used in the operation and replacing with the result.
        numbersArray.splice(addIndex, 2, ans);

        // Check to see if anymore addition.
        console.log(numbersArray);
        addIndex = operationsArrayTrimmed.indexOf("+");
      };

      // Check for subtraction
      let subIndex = operationsArrayTrimmed.indexOf("-");
      while (subIndex >= 0) {
        const ans = subtraction(Number(numbersArray[subIndex]), Number(numbersArray[subIndex + 1]));
        // Removing the operation from the operation array.
        operationsArrayTrimmed.splice(subIndex, 1);

        // Removing the two numbers used in the operation and replacing with the result.
        numbersArray.splice(subIndex, 2, ans);

        // Check to see if anymore division.
        subIndex = operationsArrayTrimmed.indexOf("-");
      };
    };

    // Set the result state to the only number left (the result).
    dispatch(addNewResult(numbersArray[0], `${userInput} = ${numbersArray[0]}`));
  };

  return (
    <button id="calculatebttn" onClick={calculate}>
      {text}
    </button>
  );
};

export default CalculatorSingleInput;