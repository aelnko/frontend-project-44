/* eslint-disable import/extensions */
import game from '../index.js';
import { randomizer } from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < number / 2; i += 1) {
    if (!(number % i)) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = randomizer(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  game(task, getQuestionAndAnswer);
};
