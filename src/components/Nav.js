import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h2>Calculator Navigation</h2>
      <ul>
        <li>
          <Link to="/">Double Input Calculator</Link>
        </li>
        <li>
        <Link to="/results">Past Calculations and Results</Link>
        </li>
        <li>
        <Link to="/singleCalc">Single Expression Calculator</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;