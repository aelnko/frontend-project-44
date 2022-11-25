/* eslint-disable import/extensions */
/* eslint-disable no-console */
import greeting from './cli.js';

import { getYourAnswer } from './utils.js';

const game = (task, getQuestionAndAnswer) => {
  const name = greeting();
  console.log(task);
  let i = 0;
  while (i < 3) {
    const [question, answer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = getYourAnswer();
    if (answer === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
