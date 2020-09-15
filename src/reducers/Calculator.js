/**
 * Redux Reducer(s)
 * A reducer will actually carry out the request or
 * data mutation. It is expecting an "action" to be
 * passed that matches a type programmed-in.
 */

 const calculatorReducer = (state = 0, action) => {
   switch (action.type) {
     case ("calculate"): {
      // First copy the previous state.
      const newResultList = [...state];

      // Add the new result to the state.
      newResultList.push(action.payload);

            // Return the updated state (overwrites the state.)
      return newResultList;
     }
     default:
       // Make no change if the action doesn't match
       return state;
   }
 }
 
 export default calculatorReducer;