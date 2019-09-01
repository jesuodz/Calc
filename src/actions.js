import { CLEAR_ALL, ADD_OPERAND, ADD_OPERATOR } from './types';

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
