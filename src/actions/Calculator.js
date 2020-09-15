/**
 * Redux Action(s)
 * Actions as "request" formatting, or labels for what
 * we'll allow in terms of requests or mutations for 
 * our store.
 * Actions define what we'll allow as reuqests to our
 * reducers (which in turn, speak directly with the store
 *  on our behalf.)
 * Action names, by cc onverntion, are uppercase (they are 
 * considered "CONSTANTS")
 */

 const addNewInputOne = input => {
  return {
    // actions return objects
    type: 'ADD_INPUT_ONE',
    payload: input
  };
 };

 const addNewInputTwo = input => {
  return {
    // actions return objects
    type='ADD_INPUT_TWO',
    payload: input
  };
 };

 const addNewResult = result => {
   return {
     // actions return objects
     type: "CALCULATE",
     payload: result
   };
 };

 export {addNewInputOne, addNewInputTwo, addNewResult};