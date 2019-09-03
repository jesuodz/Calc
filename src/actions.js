import {
  CLEAR_ALL,
  ADD_OPERAND,
  ADD_OPERATOR,
  EVAL_PRECEDENCE,
  UPDATE_DISPLAY
} from './types';

export const clear = () => ({ type: CLEAR_ALL });

export const addOperand = operand => dispatch => {
  dispatch ({
    type: ADD_OPERAND,
    payload: operand
  });
  dispatch(updateDisplay(operand));
  dispatch(evalByPrecedence());
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
  dispatch(updateDisplay(operator));
};

const evalByPrecedence = () => (dispatch, getState) => {
  const state = getState();
  const lastOperator = state.operators.slice(0)[0];

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
