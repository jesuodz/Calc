import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Buttons from './components/Buttons';

import { clear, addOperand, addOperator, evalTotal } from '../../actions';

class KeyPad extends Component {
  constructor(props) {
    super(props);
    this.state = { operands: [], operand: '' };
    this.handleOperand = this.handleOperand.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
  };

  handleOperand = async event => {
    const input = event.target.innerHTML;
    const newOp = [...this.state.operands, input];

    await this.setState({ operands: newOp, operand: newOp.join('') });
    await this.props.addOperand(this.state.operands);
  };

  handleClear = async event => {
    if (event) this.props.clear();
    await this.setState({ operands: [], operand: '' });
  };

  handleOperator(event) {
    const { operand } = this.state;
    const name = event.target.id;
    const symbol = event.target.innerHTML;

    if (operand) this.props.addOperand(operand, true);
    this.props.addOperator(name, symbol);
    this.handleClear();
  };

  handleEqual() {
    const { operand } = this.state;

    if (operand) this.props.addOperand(operand, true);
    else this.props.addOperand(0);
    this.handleClear();
    this.props.evalTotal();
  };

  render() {
    return (
      <Buttons
        handleOperand={this.handleOperand}
        handleOperator={this.handleOperator}
        handleClear={this.handleClear}
        handleEqual={this.handleEqual}
      />
    );
  };
};

KeyPad.propTypes = {
  clear: PropTypes.func.isRequired,
  addOperand: PropTypes.func.isRequired,
  addOperator: PropTypes.func.isRequired
};

export default connect(null, {
  clear, addOperand, addOperator, evalTotal
})(KeyPad);
