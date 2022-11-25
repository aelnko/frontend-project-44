/* eslint-disable quotes */
/* eslint-disable import/extensions */
import game from "../index.js";
import { randomizer } from "../utils.js";

const task = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getQuestionAndAnswer = () => {
  const operatorsMap = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
  };
  const operand1 = randomizer(1, 100);
  const operand2 = randomizer(1, 100);
  const operator = operators[randomizer(0, 2)];
  const question = `${operand1} ${operator} ${operand2}`;
  const answer = String(operatorsMap[operator](operand1, operand2));
  return [question, answer];
};

export default () => {
  game(task, getQuestionAndAnswer);
};
