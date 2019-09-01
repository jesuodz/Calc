import { CLEAR_ALL, ADD_OPERAND, ADD_OPERATOR, EVAL_PRECEDENCE  } from './types';

export const clear = () => {
  return {
    type: CLEAR_ALL
  };
};

export const addOperand = operand => dispatch => {
  dispatch ({
    type: ADD_OPERAND,
    payload: operand
  });
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
};

const evalByPrecedence = () => (dispatch, getState) => {
  const state = getState();
  const lastOperator = state.operators.slice(0)[0];

  if (lastOperator === 'multiply' || lastOperator === 'divide') {
    dispatch(evaluate());
  }
};
