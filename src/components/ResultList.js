import React from 'react';
import { useSelector } from 'react-redux';
import './ResultList.css';

const ResultsList = () => {
  const results = useSelector(state => state.expression);

  // Special thanks to Zhen(Alex) Liu for showing 
  // and helping me with the useEffect function.

  // The useSelect has useEffect built into it
  // This function will track the expression counter state
  // When the counter goes up then the page will re-render.
  const counter = useSelector(state => state.counter);

  return (
    <div>
      <h1>Previous Results:</h1>
      <ul>
        {results.map((result, index) => {
          return (
            <li className="resultExpressions" key={index}>{result}</li>
          )
        })}
      </ul>
    </div>
  );
};

export default ResultsList;