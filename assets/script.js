// variables
const scoreBtn = document.getElementById('score-btn')
const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const questionContainerEl = document.getElementById('question-container')
const questionTextEl = document.getElementById('question-text')
const answerBtnsEl = document.getElementById('answer-btns')

// variables that handle randomizing question order
// assiging them with let and no initialization, which makes them undefined
let randomQuestions, currentQuestionIndex

// when user clicks on "High Scores" button, call the showHighScores function
scoreBtn.addEventListener('click', showHighScores)

// when user clicks on "Start Quiz!" button, call the startQuiz function
startBtn.addEventListener('click', startQuiz)

// when user clicks on "Next", calls nextQuestion function
nextBtn.addEventListener('click', () => {
  // when next button is clicked, increment currentQuestionIndex
  // this will advance through the array to the next question
  currentQuestionIndex++
  nextQuestion()
})


// function that displays the high scores
function showHighScores() {
  // adding .hide class, so when this is clicked it gets hidden
  scoreBtn.classList.add('hide')
}

// function to start the quiz
function startQuiz() {
  // adding .hide class, so when startQuiz is clicked the button gets hidden
  startBtn.classList.add('hide')
  scoreBtn.classList.add('hide')

  // removing .hide class, so when startQuiz is clicked the 
  // question-container is displayed
  questionContainerEl.classList.remove('hide')

  // randomizing the order of the questions array
  // gets a random number that is either positive or negative
  // + or - will determine order of array with .sort()
  randomQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  // calling nextQuestion function so questions actually display
  nextQuestion()
  
  
}

// function that advances to the next question
// shuffles through questions array at random
function nextQuestion() {
  // reset the page when next question is clicked
  resetDisplay()

  showQuestions(randomQuestions[currentQuestionIndex])
}

// function showQuestion will display the index in the array based on
// randomized order from randomQuestions and currentQuestionIndex
// parameter 'e' is the inex we are entering from 'questions' array
function showQuestions(e) {
  // initializing the variable for the correct answer
  correctAnswer = e.correctAnswer
  // sets question string in the array to the HTML page
  questionTextEl.innerText = e.question

  // generating new buttons based on answers object
  // iterating through answers array with foreach
  e.answers.forEach(answer => {
    // dynamically creating buttons based on e.answers array
    const answerBtn = document.createElement('button')
    answerBtn.innerText = answer
    // adding .btn class so each generated button gets HTML styling
    answerBtn.classList.add('btn')

    // event listener calling the selectAnswer function
    answerBtn.addEventListener('click', selectAnswer)
    // adding to the HTML element that containts the buttons
    answerBtnsEl.appendChild(answerBtn)
  })

  // function that controls what happens when user selects an aswer
  function selectAnswer(choice) {
    // creating new variable with .target method
    // refers to whatever button the user clicked on
    chosenBtn = choice.target

    if (chosenBtn.innerText === correctAnswer) {
      console.log("Correct!")
    } else {
      console.log("Incorrect!")
    }

    if (randomQuestions.length > currentQuestionIndex + 1) {
      // after answer is selected, the nextBtn appears
      nextBtn.classList.remove('hide')
      
    } else {
      console.log('result screen')
      resultScreen()
    }
    
  }
}

// a function that resets the question text, buttons, etc to default
// also removes placeholder HTML elements so only the dynamically
// generated elements display on the website
function resetDisplay() {
  // hiding the "next" button until answer is selected
  nextBtn.classList.add('hide')

  // while loop that removes any child within the answerBtnEl
  // since this function is called before new questions are
  // displayed and generated, it clears the old exisitng answers
  // but the new ones are displayed afterwards
  while (answerBtnsEl.firstChild) {
    // removes all answerBtnsEl children
    answerBtnsEl.removeChild(answerBtnsEl.firstChild)
  }
}



// Set of quiz questions
const questions = [
  {
    question: 'Which HTML element is used to insert javascript?',
    answers: [
      'a: <js>',
      'b: <javascript>',
      'c: <jscode>',
      'd: <script>'
  ],
    correctAnswer: 'd: <script>'
  },
  {
    question: 'Where can Javascript be inserted in an HTML file?',
    answers: [
      'a: Both the <head> and <body> sections',
      'b: Only the <head> section',
      'c: Only the <body> section',
      'd: Only in an external file'
    ],
    correctAnswer: 'a: Both the <head> and <body> sections'
  },
  {
    question: 'What is the correct syntax when using an external script named "script.js"?',
    answers: [
      'a: <script href="script.js">',
      'b: <script>script.js</script>',
      'c: <script src="script.js">',
      'd: script == script.js'
    ],
    correctAnswer: 'c: <script src="script.js">'
  },
  {
    question: 'Which of the following lines of code will successfully create a function in Javascript?',
    answers: [
      'a: function = myFunction()',
      'b: myFunction = function',
      'c: function myFunction()',
      'd: function:myFunction()'
    ],
    correctAnswer: 'c: function myFunction()'
  },
  {
    question: 'In Javascript syntax, how do you call a function named "funcA"?',
    answers: [
      'a: funcA();',
      'b: call funcA();',
      'c: funcA(call);',
      'd: functionCall funcA();'
    ],
    correctAnswer: 'a: funcA();'
  },
  {
    question: 'Which of the following is the correct syntax for writing an IF statement in Javascript?',
    answers: [
      'a: if i = 10',
      'b: if (i == 10)',
      'c: if (i == 10), then',
      'd: if i = 10, then'
    ]
    ,
    correctAnswer: 'b: if (i == 10)'
  },
  {
    question: 'How would you write an IF statement that will execute if "i" is NOT equal to 10?',
    answers: [
      'a: if i =! 5 then',
      'b: if i <> 5',
      'c: if (i <> 5)',
      'd: if (i != 5)'
    ],
    correctAnswer: 'd: if (i != 5)'
  },
  {
    question: 'How do you start a WHILE loop in Javascript?',
    answers: [
      'a: while {i}',
      'b: while (i <= 10)',
      'c: while (i <=10; i++)',
      'd: while [i = 1, i = 10]'
    ],
    correctAnswer: 'b: while (i <= 10)',
  },
  {
    question: 'How do you initialize a Javascript array?',
    answers: [
      'a: const array = ["one", "two", "three"]',
      'b: const array = []("one", "two", "three")',
      'c: const array = "one", "two", "three"',
      'd: array(["one", "two", "three"])'
    ],
    correctAnswer: 'a: const array = ["one", "two", "three"]'
  },
  {
    question: 'What event occurs when the user clicks on an HTML element?',
    answers: [
      'a: onMouseClick',
      'b: onMouseButton',
      'c: onclick',
      'd: buttonClick'
    ],
    correctAnswer: 'c: onclick'
  }
]