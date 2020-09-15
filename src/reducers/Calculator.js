/**
 * Redux Reducer(s)
 * A reducer will actually carry out the request or
 * data mutation. It is expecting an "action" to be
 * passed that matches a type programmed-in.
 */

const calculatorReducer = (
  state = {
    input: "",
    inputOne: 0,
    inputTwo: 0,
    operator: "+",
    result: [],
    expression: [],
    counter: 0
  },
  action) => {
  switch (action.type) {
    case ("ADD_INPUT_ONE"):
      {
        // First copy the previous state.
        const newInputOne = {...state};

        // Add the new input.
        newInputOne.inputOne = (action.payload);

        // Return the update state.
        return newInputOne;
      }
      case ("ADD_INPUT_TWO"):
      {
        // First copy the previous state.
        const newInputTwo = {...state};

        // Add the new input.
        newInputTwo.inputTwo = (action.payload);
        
        // Return the update state.
        return newInputTwo;
      }
    case ("CALCULATE"): {
      // First copy the previous state.
      const newResultList = {...state};

      // Add the new result.
      newResultList.result.push(action.payload);

      // Add the new expression
      newResultList.expression.push(action.payloadTwo);

      // Update the operation counter. React recognizes that this element has changed
      // and will cause a re-render of the page.
      // React will not detect a change if we simply add or remove from the result list.
      // -> No re-render of the page.
      newResultList.counter++;

      // Return the updated state (overwrites the state.)
      return newResultList;
    }
    case ("ADD_NEW_OPERATION"): {
      const newOperation = {...state};
      newOperation.operator = action.payload;
      return newOperation;
    }
    case ("ADD_NEW_VARIABLE"): {
      const newInput = {...state};
      newInput.input += action.payload;
      return newInput;
    }
    default:
      // Make no change if the action doesn't match
      return state;
  }
}

export default calculatorReducer;