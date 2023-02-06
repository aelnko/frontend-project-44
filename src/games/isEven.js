/* eslint-disable import/extensions */
import game from '../index.js';
import { randomizer } from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = randomizer(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  game(task, getQuestionAndAnswer);
};
