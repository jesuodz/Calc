import {
  CLEAR_ALL,
  ADD_OPERAND,
  ADD_OPERATOR,
  EVAL_PRECEDENCE,
  UPDATE_DISPLAY,
  EVAL_TOTAL
} from './types';
import operate from './utils/operate';
import extractOperations from './utils/extract-operations';

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
      };
    case ADD_OPERAND:
      return {
        ...state,
        operands: [action.payload, ...state.operands]
      };
    case ADD_OPERATOR:
      const { name } = action.payload;
      
      return {
        ...state,
        operators: [name, ...state.operators]
      };
    case UPDATE_DISPLAY:
      return {
        ...state,
        display: [...state.display, action.payload]
      };
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
      // See commit log
      const { operands, operators } = state;
      let {first, last, operator_name} = extractOperations(operands, operators);
      console.log(operate(operator_name, last, first));
      return {
        ...state,
      }
    default:
      return state;
  };
};
