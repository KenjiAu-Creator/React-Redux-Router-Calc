import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Calculator = props => {
  // State initialization

  // Create Numbers array
  let numbersArray = userInput.split(/[+-/\\*\\]/);
  // Create operations array
  let operationsArray = userInput.split(/[0123456789]/);

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

    while (operationsArray.length >= 1) {
      // Check for multiplication first
      let multiIndex = operationsArray.indexOf("*");
      while (multiIndex >= 0) {
        const ans = multiplication(Number(numbersArray[multiIndex]), Number(numbersArray[multiIndex + 1]));
        // Removing the operation from the operation array.
        operationsArray.splice(multiIndex, 1);

        // Removing the two numbers used in the operation and replacing with the result.
        numbersArray.splice(multiIndex, 2, ans);

        // Check to see if anymore multiplication
        multiIndex = operationsArray.indexOf("*");
      };

      // Check for division next
      let divideIndex = operationsArray.indexOf("/");
      while (divideIndex >= 0) {
        const ans = division(Number(numbersArray[divideIndex]), Number(numbersArray[divideIndex + 1]));
        // Removing the operation from the operation array.
        operationsArray.splice(divideIndex, 1);

        // Removing the two numbers used in the operation and replacing with the result.
        numbersArray.splice(divideIndex, 2, ans);

        // Check to see if anymore division.
        divideIndex = operationsArray.indexOf("/");
      };

      // Check for addition
      let addIndex = operationsArray.indexOf("+");
      while (addIndex >= 0) {
        const ans = addition(Number(numbersArray[addIndex]), Number(numbersArray[addIndex + 1]));
        // Removing the operation from the operation array.
        operationsArray.splice(addIndex, 1);

        // Removing the two numbers used in the operation and replacing with the result.
        numbersArray.splice(addIndex, 2, ans);

        // Check to see if anymore division.
        addIndex = operationsArray.indexOf("+");
      };

      // Check for subtraction
      let subIndex = operationsArray.indexOf("-");
      while (subIndex >= 0) {
        const ans = subtraction(Number(numbersArray[subIndex]), Number(numbersArray[subIndex + 1]));
        // Removing the operation from the operation array.
        operationsArray.splice(subIndex, 1);

        // Removing the two numbers used in the operation and replacing with the result.
        numbersArray.splice(subIndex, 2, ans);

        // Check to see if anymore division.
        subIndex = operationsArray.indexOf("-");
      };
    };
  };

  // Return JSX
  return (
    <div>
      <h1 className="title">Single Input Field Calculator</h1>
      <form onSubmit={calculate}>
        <label htmlFor="input">Expression:</label>
        <input type="text" id="input" onChange={e => { setUserInput(e.target.value) }}></input>
        <input id="bttn" type="submit" value="calculate" />
      </form>
      <h1>Result: {result}</h1>
      <p>{userInput} Input</p>
      <p>{numbersArray} Number</p>
    </div>
  )
};

export default Calculator;