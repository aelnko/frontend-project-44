/* eslint-disable import/extensions */
import game from '../index.js';
import { randomizer } from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (!(number % i)) {
      return 'no';
    }
  }
  return 'yes';
};

const getQuestionAndAnswer = () => {
  const question = randomizer(1, 100);
  const answer = isPrime(question);
  return [question, answer];
};

export default () => {
  game(task, getQuestionAndAnswer);
};
