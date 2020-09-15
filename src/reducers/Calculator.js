/**
 * Redux Reducer(s)
 * A reducer will actually carry out the request or
 * data mutation. It is expecting an "action" to be
 * passed that matches a type programmed-in.
 */

const calculatorReducer = (
  state = {
    inputOne: [],
    inputTwo: [],
    result: []
  },
  action) => {
  switch (action.type) {
    case ("ADD_INPUT_ONE"):
      {
        // First copy the previous state.
        const newInputOne = {...state};

        // Add the new input.
        newInputOne.inputOne.push(action.payload);

        // Return the update state.
        return newInputOne;
      }
      case ("ADD_INPUT_TWO"):
      {
        // First copy the previous state.
        const newInputTwo = {...state};

        // Add the new input.
        newInputTwo.inputTwo.push(action.payload);
        
        // Return the update state.
        return newInputTwo;
      }
    case ("CALCULATE"): {
      // First copy the previous state.
      const newResultList = {...state};

      // Add the new result.
      newResultList.result.push(action.payload);

      // Return the updated state (overwrites the state.)
      return newResultList;
    }
    default:
      // Make no change if the action doesn't match
      return state;
  }
}

export default calculatorReducer;