import React from 'react';
import PropTypes from 'prop-types';

const Buttons = (
  { handleOperator, handleOperand, handleClear, handleEqual }
) => (
  <div className='buttons'>
    <div className='button-container'>
      <button id='button7' value='7' onClick={handleOperand}>7</button>
      <button id='button8' value='8' onClick={handleOperand}>8</button>
      <button id='button9' value='9' onClick={handleOperand}>9</button>
      <button id='multiply' onClick={handleOperator}>x</button>
    </div>
    <div className='button-container'>
      <button id='button4' value='4' onClick={handleOperand}>4</button>
      <button id='button5' value='5' onClick={handleOperand}>5</button>
      <button id='button6' value='6' onClick={handleOperand}>6</button>
      <button id='divide' onClick={handleOperator}>&#247;</button>
    </div>
    <div className='button-container'>
      <button id='button1' value='1' onClick={handleOperand}>1</button>
      <button id='button2' value='2' onClick={handleOperand}>2</button>
      <button id='button3' value='3' onClick={handleOperand}>3</button>
      <button id='add' onClick={handleOperator}>+</button>
    </div>
    <div className='button-container'>
      <button id='button0' value='0' onClick={handleOperand}>0</button>
      <button id='clearButton' onClick={handleClear}>C</button>
      <button id='equalsButton' onClick={handleEqual}>=</button>
      <button id='substract' onClick={handleOperator}>-</button>
      <button id='decimal' onClick={handleOperand}>.</button>
    </div>
  </div>
);

Buttons.propTypes = {
  handleOperand: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  handleOperator: PropTypes.func.isRequired,
  handleEqual: PropTypes.func.isRequired
};

export default Buttons;
