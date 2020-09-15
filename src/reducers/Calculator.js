/**
 * Redux Reducer(s)
 * A reducer will actually carry out the request or
 * data mutation. It is expecting an "action" to be
 * passed that matches a type programmed-in.
 */

const calculatorReducer = (
  state = {
    inputOne: 0,
    inputTwo: 0,
    operator: "+",
    result: [],
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

      // Update the operation counter. React recognizes that this element has changed
      // and will cause a re-render of the page.
      // React will not detect a change if we simply add or remove from the result list.
      // -> No re-render
      newResultList.counter++;

      // Return the updated state (overwrites the state.)
      return newResultList;
    }
    case ("ADD_NEW_OPERATION"): {
      const newOperation = {...state};
      newOperation.operator = action.payload;
      return newOperation;
    }
    default:
      // Make no change if the action doesn't match
      return state;
  }
}

export default calculatorReducer;