import {
  CLEAR_ALL,
  ADD_OPERAND,
  ADD_OPERATOR,
  EVAL_PRECEDENCE,
  UPDATE_DISPLAY,
  EVAL_TOTAL
} from './types';

export const clear = () => ({ type: CLEAR_ALL });

export const addOperand = (operand, update = null) => dispatch => {
  if (update) {
    dispatch ({
      type: ADD_OPERAND,
      payload: operand
    });
  } else {
    if (operand.length) { // Got new operand
      const lastOperand = operand.slice(-1).toString(); 
      dispatch(updateDisplay(lastOperand));
    } 
    dispatch(evalByPrecedence());
  }
};

/**
 * 
 * @param {*} operator_name Name of operator. Ej: 'multiply'
 * @param {*} operator Symbol. Ej: '*'
 */
export const addOperator = (operator_name, operator) => dispatch => {
  dispatch({
    type: ADD_OPERATOR,
    payload: {
      name: operator_name,
      sym: operator
    }
  });
  dispatch(evalByPrecedence());
  dispatch(updateDisplay(operator));
};

const evalByPrecedence = () => (dispatch, getState) => {
  const state = getState();
  const lastOperator = state.operators.slice(0)[1];

  if (lastOperator === 'multiply' || lastOperator === 'divide') {
    dispatch({
      type: EVAL_PRECEDENCE
    });
  }
};

export const updateDisplay = output => dispatch => {
  dispatch({
    type: UPDATE_DISPLAY,
    payload: output
  });
};

export const evalTotal = () => ({ type: EVAL_TOTAL });
