import { CLEAR_ALL, ADD_OPERAND, ADD_OPERATOR } from './types';

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
        operands: [...state.operands, action.payload],
        display: [...state.display, action.payload]
      }
    case ADD_OPERATOR:
      const { name, sym } = action.payload;
      
      return {
        ...state,
        operators: [...state.operators, name],
        display: [...state.display, sym]
      }
    default:
      return state;
  }
}
