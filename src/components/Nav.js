import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav>
      <h2>Calculator Navigation</h2>
      <ul>
        <li className="nav-links">
          <Link to="/">Double Input Calc</Link>
        </li>
        <li className="nav-links">
        <Link to="/results">Results</Link>
        </li>
        <li className="nav-links">
        <Link to="/singleCalc">Interactive Calc</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;