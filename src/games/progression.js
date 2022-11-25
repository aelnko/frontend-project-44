/* eslint-disable import/extensions */
import game from '../index.js';
import { randomizer } from '../utils.js';

const task = 'What number is missing in the progression?';

const getProgression = (element, diff) => {
  const length = randomizer(5, 10);
  const progression = [element];
  while (progression.length !== length) {
    progression.push(progression[progression.length - 1] + diff);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const firstElement = randomizer(1, 20);
  const diff = randomizer(1, 10);
  const progression = getProgression(firstElement, diff);
  const searchIndex = randomizer(0, progression.length - 1);
  const answer = String(progression[searchIndex]);
  progression[searchIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  game(task, getQuestionAndAnswer);
};
