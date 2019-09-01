import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import {
//   updateDisplay,
//   clearDisplay,
//   addOperation,
//   evaluate
// } from '../actions/index';

class KeyPad extends Component {
  constructor(props) {
    super(props);
    this.handleData = this.handleData.bind(this);
    // this.handleOperand = this.handleOperand.bind(this);
  }

  handleData(event) {
    const input = event.target.innerHTML;
    console.log(input)
    // this.props.updateDisplay(input);
  }

  handleOperand(event) {
    const operand = event.target.id;
    // this.props.operand(operand);
    console.log(operand);
  }

  render() {
    return (
      <div className="buttons">
        <div className="button-container">
          <button id="button7" value="7" onClick={this.handleData}>7</button>
          <button id="button8" value="8" onClick={this.handleData}>8</button>
          <button id="button9" value="9" onClick={this.handleData}>9</button>
          <button id="multiply" onClick={this.handleOperand}>x</button>
        </div>
        <div className="button-container">
          <button id="button4" value="4" onClick={this.handleData}>4</button>
          <button id="button5" value="5" onClick={this.handleData}>5</button>
          <button id="button6" value="6" onClick={this.handleData}>6</button>
          <button id="divide" onClick={this.handleOperand}>&#247;</button>
        </div>
        <div className="button-container">
          <button id="button1" value="1" onClick={this.handleData}>1</button>
          <button id="button2" value="2" onClick={this.handleData}>2</button>
          <button id="button3" value="3" onClick={this.handleData}>3</button>
          <button id="add" onClick={this.handleOperand}>+</button>
        </div>
        <div className="button-container">
          <button id="button0" value="0" onClick={this.handleData}>0</button>
          <button id="clearButton">C</button>
          <button id="equalsButton">=</button>
          <button id="substract" onClick={this.handleOperand}>-</button>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   updateDisplay: (text) => {
//     dispatch(updateDisplay(text))
//   },
//   clear: () => {
//     dispatch(clearDisplay());
//   },
//   operand: (text) => {
//     dispatch(addOperation(text))
//   },
//   eval: () => {
//     dispatch(evaluate());
//   }
// });

// export default connect(null, mapDispatchToProps)(KeyPad);
export default KeyPad;
