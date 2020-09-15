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

 const addNewResult = result => {
   return {
     // actions return objects
     type: "calculate",
     payload: result
   };
 };

 export default addNewResult;