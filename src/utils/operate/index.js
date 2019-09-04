import operations from './operations';

/**
 * Handle an operation between two numbers
 * @param {*} operator Operator name
 * @param {*} b Second number
 * @param {*} a first number
 */
const operate = (operator, b, a) => {
  const firstNum = Number(a);
  const secondNum = Number(b);

  return operations[operator](firstNum, secondNum);
};

export default operate;
