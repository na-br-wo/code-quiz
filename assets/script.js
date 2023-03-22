// variables
const scoreBtn = document.getElementById('score-btn')
const startBtn = document.getElementById('start-btn')

// when user clicks on "High Scores" button, call the showHighScores function
scoreBtn.addEventListener('click', showHighScores)

// when user clicks on "Start Quiz!" button, call the startQuiz function
startBtn.addEventListener('click', startQuiz)




// function that displays the high scores
function showHighScores() {
  console.log("High Scores!")
}

// function to start the quiz
function startQuiz() {
  console.log("Quiz started!")
}

// function that advances to the next question
function nextQuestion() {

}

// function that controls what happens when user selects an aswer
function selectAnswer() {

}

// Set of quiz questions
const questions = [
  {
    question: 'Which HTML element is used to insert javascript?',
    answers: {
      a: '<js>',
      b: '<javascript>',
      c: '<jscode>',
      d: '<script>'
    },
    correctAnswer: 'd'
  },
  {
    question: 'Where can Javascript be inserted in an HTML file?',
    answers: {
      a: 'Both the <head> and <body> sections',
      b: 'Only the <head> section',
      c: 'Only the <body> section',
      d: 'Only in an external file'
    },
    correctAnswer: 'a'
  },
  {
    question: 'What is the correct syntax when using an external script named "script.js"?',
    answers: {
      a: '<script href="script.js">',
      b: '<script>script.js</script>',
      c: '<script src="script.js">',
      d: 'script == script.js'
    },
    correctAnswer: 'c'
  },
  {
    question: 'Which of the following lines of code will successfully create a function in Javascript?',
    answers: {
      a: 'function = myFunction()',
      b: 'myFunction = function',
      c: 'function myFunction()',
      d: 'function:myFunction()'
    },
    correctAnswer: 'c'
  },
  {
    question: 'In Javascript syntax, how do you call a function named "funcA"?',
    answers: {
      a: 'funcA();',
      b: 'call funcA();',
      c: 'funcA(call);',
      d: 'functionCall funcA();'
    },
    correctAnswer: 'a'
  },
  {
    question: 'Which of the following is the correct syntax for writing an IF statement in Javascript?',
    answers: {
      a: 'if i = 10',
      b: 'if (i == 10)',
      c: 'if (i == 10), then',
      d: 'if i = 10, then'
    },
    correctAnswer: 'b'
  },
  {
    question: 'How would you write an IF statement that will execute if "i" is NOT equal to 10?',
    answers: {
      a: 'if i =! 5 then',
      b: 'if i <> 5',
      c: 'if (i <> 5)',
      d: 'if (i != 5)'
    },
    correctAnswer: 'd'
  },
  {
    question: 'How do you start a WHILE loop in Javascript?',
    answers: {
      a: 'while {i}',
      b: 'while (i <=10)',
      c: 'while (i <=10; i++)',
      d: 'while [i = 1, i = 10]'
    },
    correctAnswer: 'b'
  },
  {
    question: 'How do you initialize a Javascript array?',
    answers: {
      a: 'const array = ["one", "two", "three"]',
      b: 'const array = []("one", "two", "three")',
      c: 'const array = "one", "two", "three"',
      d: 'array(["one", "two", "three"])'
    },
    correctAnswer: 'a'
  },
  {
    question: 'What event occurs when the user clicks on an HTML element?',
    answers: {
      a: 'onMouseClick',
      b: 'onMouseButton',
      c: 'onclick',
      d: 'buttonClick'
    },
    correctAnswer: 'c'
  }
]