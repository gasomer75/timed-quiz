// main elements
var mainEl = document.getElementById('main');
var titleEl = document.getElementById('title');
var questionEl = document.getElementById('question');
var intro1 = document.getElementById('p1');
var intro2 = document.getElementById('p2');
var intro3 = document.getElementById('p3');
var intro4 = document.getElementById('p4');

// high score element
var hsEl = document.getElementById('high-scores');
var hsLink = document.createElement('href', highScores);
var hsName = document.createTextNode('High Scores');
hsLink.setAttribute('class', 'scores');
hsLink.appendChild(hsName);
hsEl.appendChild(hsLink);
hsEl.addEventListener('click', highScores);

// timer element
var timerEl = document.getElementById('timer');

// footer elements
var resultsEl = document.getElementById('results');

// questions array
var questionArr = [
    {
        title: "Question 1",
        question: "Commonly used data types DO NOT include:",
        answers: ["alerts", "strings", "booleans", "numbers"],
        correct: "alerts"
    },
    {
        title: "Question 2",
        question: "The condition in an IF/ELSE statement is enclosed with _________ .",
        answers: ["parenthesis", "curly brackets", "quotes", "square brackets"],
        correct: "parenthesis"
    },
    {
        title: "Question 3",
        question: "Arrays in JavaScript can be used to store:",
        answers: ["all of the above", "numbers and strings", "other arrays", "booleans"],
        correct: "all of the above"
    },
    {
        title: "Question 4",
        question: "String values must be enclosed within ________ when being assigned to variables?",
        answers: ["quotes", "commas", "curly brackets", "parenthesis"],
        correct: "quotes"
    },
    {
        title: "Question 5",
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["console.log", "JavaScript", "terminal/bash", "for loops"],
        correct: "console.log"
    }
]

// initial landing page function
function landingPage() {
    titleEl.textContent = "Coding Quiz";
    intro1.textContent = "Answer the coding related questions within a 60 second time limit." 
    intro2.textContent = "Incorrect answers result in a 10 second penalty."
    intro3.textContent = "Correct answers result in a 5 second reward."
    intro4.textContent = "If the timer runs out the quiz is over."
    var startButton = document.createElement('button');
    startButton.setAttribute('class', 'start-button');
    startButton.textContent = 'START QUIZ';
    mainEl.appendChild(startButton);

    startButton.addEventListener('click', startQuiz);
}

// timer function
function countDown(seconds) {
    var elapsedTime = seconds;

    var timeInterval = setInterval(function() {

        if (elapsedTime >= 0) {
            timerEl.textContent = 'Time Remaining: ' + elapsedTime;
            elapsedTime--
        
        } else {
            clearInterval(timeInterval)
            var outOfTime = document.createElement('h1');
            outOfTime.setAttribute('class', 'title');
            outOfTime.textContent = "TIME'S UP!!";
            mainEl.textContent = "";
            mainEl.appendChild(outOfTime);
        }
    }, 1000);   
};

// function to start the quiz
function startQuiz() {
    mainEl.textContent = "";
    resultsEl.setAttribute('style', 'visibility: visible;')
    countDown(60);
};

// function to save final score to localStorage
function saveScore() {
    // function to save score to high scores if it's in the top 3 otherwise end quiz
};

// function to retrieve and display high scores from localStorage
function highScores() {
    titleEl.textContent = "High Scores";
    // high scores from localStorage will show here - top 3
};

   
landingPage();