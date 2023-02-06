/* eslint-disable import/extensions */
/* eslint-disable no-console */
import greeting from './cli.js';

import { getYourAnswer } from './utils.js';

const game = (task, getQuestionAndAnswer) => {
  const name = greeting();
  console.log(task);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = getYourAnswer();
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
