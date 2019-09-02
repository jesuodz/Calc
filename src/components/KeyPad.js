import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Buttons from './Buttons';

import { clear, addOperand, addOperator } from '../actions';

class KeyPad extends Component {
  constructor(props) {
    super(props);
    this.handleOperand = this.handleOperand.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
  }

  handleOperand(event) {
    const input = event.target.innerHTML;
    this.props.addOperand(input);
  }

  handleOperator(event) {
    const name = event.target.id;
    const symbol = event.target.innerHTML;

    this.props.addOperator(name, symbol);
  }

  render() {
    return (
      <Buttons
        handleOperand={this.handleOperand}
        handleOperator={this.handleOperator}
        handleClear={this.props.clear}
      />
    );
  }
};

KeyPad.propTypes = {
  clear: PropTypes.func.isRequired,
  addOperand: PropTypes.func.isRequired
};

export default connect(null, { clear, addOperand, addOperator })(KeyPad);
