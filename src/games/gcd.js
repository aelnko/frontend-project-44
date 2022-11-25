/* eslint-disable import/extensions */
import game from '../index.js';
import { randomizer } from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  if (!y) {
    return x;
  }
  return getGcd(y, x % y);
};

const getQuestionAndAnswer = () => {
  const first = randomizer(1, 100);
  const second = randomizer(1, 100);
  const question = `${first} ${second}`;
  const answer = String(getGcd(first, second));
  return [question, answer];
};

export default () => {
  game(task, getQuestionAndAnswer);
};
