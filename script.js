'use strict';

const modalEL = document.querySelector('.modal');
const overlayEL = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const highscoreInfo = document.querySelector('.highscore-info');
const closeModal = function(){
  modalEL.classList.add('hidden');
  overlayEL.classList.add('hidden');
}
// Setting the click event handler

let secretNumber = Math.trunc(Math.random() * 15) + 1; //creating the random number from 1 - 15
let score = 20; // setting a variable to hold the score
let highscore = 0;// setting a variable to hold the highscore

document.querySelector('.check').addEventListener('click', function(){
const guess =  Number(document.querySelector('.guess').value); // converting the value of the input to number from string

if(!guess) { // If there is no number inputted 
  document.querySelector('.message').textContent = 'Please guess a number!';
} else if (guess === secretNumber) { // If guess is correct 
  document.querySelector('.message').textContent = 'Correct number!👏';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.background = 'linear-gradient(to top left, #28b487, #7dd56f)';
  
  modalEL.classList.remove('hidden');
  overlayEL.classList.remove('hidden');
  if (score > highscore) {
  highscore = score;
  document.querySelector('.highscore').textContent = highscore;
  highscoreInfo.textContent = `Your current highscore is ${highscore}`;
  
}
} else if(guess > secretNumber) { // if guess is higher
if (score > 1) {
   score--;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Too high!😟';
  
} else {
  document.querySelector('.message').textContent = 'You lost the game!😓. Try again'
  document.querySelector('.score').textContent = 0;
} 
} else if(guess < secretNumber) { // if guess is lower
if (score > 1) {
  document.querySelector('.message').textContent = 'Too low!😩';
  score--;
  document.querySelector('.score').textContent = score;
} else{
  document.querySelector('.message').textContent = 'You lost the game!😓. Try again'
  document.querySelector('.score').textContent = 0;
}
  
}
})

document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 15) + 1;
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = 'linear-gradient(to top left, #d21312, #f15a59)';
 
  
})

// console.log(secretNumber);

btnCloseModal.addEventListener('click', closeModal);

overlayEL.addEventListener('click', closeModal);
