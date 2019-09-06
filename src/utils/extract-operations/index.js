import isEmpty from './isEmpty';

const validations = (operands = null, operators = null) => {

  // Return single operand
  if (!isEmpty(operands) && isEmpty(operators)) return operands.join('');
  return 0;
}

const extractOperations = (operands = null, operators = null) => {

  const [ next, ...restOperators] = operators;
  const [ first, last, ...restOperands] = operands;

  console.log(restOperands, restOperators)
  return {
    'operator_name': next,
    'first': first,
    'last': last,
    restOperators,
    restOperands
  }

  // const response = validations(operands, operators);

  // if (response) return response;
  
  // return {
  //   operator_name: operands[0],
  //   first: operators[0],
  //   second: operands[1]
  // }
};

export default extractOperands;
