import React from 'react';
import Button from './Button';

const CalculatorLayout = () => {
  return (
    <div>
      <div id="row3">
      <Button text="7" />
      <Button text="8" />
      <Button text="9" />
      </div>
      <div id="row2">
      <Button text="4" />
      <Button text="5" />
      <Button text="6" />
      </div>
      <div id="row1">
      <Button text="1" />
      <Button text="2" />
      <Button text="3" />
      </div>
    </div>
  );
};

export default CalculatorLayout;