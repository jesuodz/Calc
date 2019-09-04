import { CLEAR_ALL, ADD_OPERAND, ADD_OPERATOR, EVAL_PRECEDENCE, EVAL_TOTAL } from './types';
import operate from './utils/operate';

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
        operands: [action.payload, ...state.operands],
        display: [...state.display, action.payload]
      }
    case ADD_OPERATOR:
      const { name, sym } = action.payload;
      
      return {
        ...state,
        operators: [name, ...state.operators],
        display: [...state.display, sym]
      }
    case EVAL_PRECEDENCE: 
      const [unwanted, operator, ...restOperators] = state.operators;
      const [a, b, ...restOperands] = state.operands;

      const result = operate(operator, a, b);
      
      return {
        ...state,
        operands: [result, ...restOperands],
        operators: [unwanted, ...restOperators]
      };
    case EVAL_TOTAL:
      const { operands, operators } = state;
      console.log( operands, operators )
      // for (let i = 0; i < operators.length; i++) {
      //   result = operate(operator[i], )
      // }
      return {
        ...state,
      }
    default:
      return state;
  }
};
