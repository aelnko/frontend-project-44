#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';

import greeting from '../src/cli.js';
import randomizer from '../src/randomizer.js';

const playEven = () => {
  const name = greeting();
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  let i = 0;
  console.log(task);
  while (i < 3) {
    const number = randomizer();
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

playEven();
