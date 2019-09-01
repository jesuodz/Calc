import { CLEAR_ALL, ADD_OPERAND } from './types';

export const clear = () => {
  return {
    type: CLEAR_ALL
  };
}

export const addOperand = operand => dispatch => {
  dispatch ({
    type: ADD_OPERAND,
    payload: operand
  });
}
