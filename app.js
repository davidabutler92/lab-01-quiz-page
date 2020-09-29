import { checkScore, countsAsYes } from './helper-functions.js';

//DOM elements
const results = document.getElementById('results');
const button = document.getElementById('button');
const resultButton = document.getElementById('result-button');
let quizScore = 0;

button.addEventListener('click', () => {
    const userName = prompt('What is your name?');
  // console.log(userName);
    const confirmQuiz = confirm('Are you sure you want to take this quiz?');

    if (!confirmQuiz) {
        alert('Boo! You should take the quiz');
        return;
    }

    const questionOne = prompt(`Alright ${userName}, is Ganondorf the leader of a desert race called the Gerudo?`);
    if (countsAsYes(questionOne)) {
        quizScore++;
    }

    const questionTwo = prompt(`okay ${userName}, does being in possesion of a piece of the triforce make Ganondorf more powerful?`);
    if (countsAsYes(questionTwo)) {
        quizScore++;
    }

    const questionThree = prompt(`Last question ${userName}, is Ganondorf married to Zelda?`);
    if (!countsAsYes(questionThree)) {
        quizScore++;
    }
    alert('You have finished the quiz! Check the lower part of the page for your results.');
    button.style.display = 'none';
    resultButton.style.display = 'block';
});

resultButton.addEventListener('click', () => {
    const resultMessage = checkScore(quizScore);
    results.textContent = resultMessage;
});