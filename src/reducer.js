import { CLEAR_ALL, ADD_OPERAND } from './types';

const initialState = {
  display: [],
  operands: [],
  operators: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case CLEAR_ALL:
      return {
        ...state,
        ...initialState
      }
    case ADD_OPERAND:
      return {
        ...state,
        operands: [...action.payload],
        display: [ ...state.display, action.payload]
      }
    default:
      return state;
  }
}
