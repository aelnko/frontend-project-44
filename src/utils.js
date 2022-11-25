import readlineSync from 'readline-sync';

const randomizer = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const getYourAnswer = () => readlineSync.question('Your answer: ');

export { randomizer, getYourAnswer };
