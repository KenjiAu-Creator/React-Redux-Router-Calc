import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewResult } from '../actions/Calculator';

const CalculatorSingleInput = props => {
  //State initialization.
  const text = props.text;
  const userInput = useSelector( state => state.input );
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

    while (operationsArray.length >= 1 && operationsArray[0] != "") {
      // Check for multiplication first
      let multiIndex = operationsArray.indexOf("*");
      while (multiIndex >= 0) {
        const ans = multiplication(Number(numbersArray[multiIndex]), Number(numbersArray[multiIndex + 1]));
        // Removing the operation from the operation array.
        operationsArray.splice(multiIndex,1);

        // Removing the two numbers used in the operation and replacing with the result.
        numbersArray.splice(multiIndex,2,ans);

        // Check to see if anymore multiplication
        multiIndex = operationsArray.indexOf("*");
      };

      // Check for division next
      let divideIndex = operationsArray.indexOf("/");
      while (divideIndex >= 0) {
        const ans = division(Number(numbersArray[divideIndex]), Number(numbersArray[divideIndex + 1]));
        // Removing the operation from the operation array.
        operationsArray.splice(divideIndex,1);

        // Removing the two numbers used in the operation and replacing with the result.
        numbersArray.splice(divideIndex,2,ans);
        
        // Check to see if anymore division.
        divideIndex = operationsArray.indexOf("/");
      }; 

      // Check for addition
      let addIndex = operationsArray.indexOf("+");
      while (addIndex >= 0) {
        console.log(numbersArray);
        const ans = addition(Number(numbersArray[addIndex]), Number(numbersArray[addIndex + 1]));
        // Removing the operation from the operation array.
        operationsArray.splice(addIndex,1);

        // Removing the two numbers used in the operation and replacing with the result.
        numbersArray.splice(addIndex,2,ans);
        
        // Check to see if anymore division.
        addIndex = operationsArray.indexOf("+");
        console.log(addIndex);
        console.log(operationsArray);
      }; 

      // Check for subtraction
      let subIndex = operationsArray.indexOf("-");
      while (subIndex >= 0) {
        const ans = subtraction(Number(numbersArray[subIndex]), Number(numbersArray[subIndex + 1]));
        // Removing the operation from the operation array.
        operationsArray.splice(subIndex,1);

        // Removing the two numbers used in the operation and replacing with the result.
        numbersArray.splice(subIndex,2,ans);
        
        // Check to see if anymore division.
        subIndex = operationsArray.indexOf("-");
      };
      console.log(operationsArray.length);
    };
    
    // Set the result state to the only number left (the result).
    dispatch(addNewResult(numbersArray[0], `${userInput} = ${numbersArray[0]}`) );
  };

  return (
    <div>
      <button onClick={calculate}>
        {text}
      </button>
    </div>
  );
};

export default CalculatorSingleInput;