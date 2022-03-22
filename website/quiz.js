// we watch a yutube vid for this code btw 


const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var groot = document.getElementById("groot")
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'For 24 hours, you are in a air tight room with a 3d printer, should you ?',
    answers: [
      { text: 'print with ABS', correct: false },
      { text: 'print with PLA', correct: true }
    ]
  },
  {
    question: 'Who knows more about 3d printers?',
    answers: [
      { text: 'Tommy', correct: false },
      { text: 'Harris', correct: true }
    ]
  },
  {
    question: 'Who is the best html coder?',
    answers: [
      { text: 'Iris', correct: true },
      { text: 'Toby', correct: true },
      { text: 'Tom', correct: true },
      { text: 'Harris', correct: true }
    ]
  },
  {
    question: 'Who plays under water hokey?',
    answers: [
      { text: 'Toby', correct: true },
      { text: 'Harris', correct: true },
      { text: 'Tom', correct: false },
      { text: 'Tama', correct: false }
    ]
  },
  {
    question: 'what is the capital of Russia',
    answers: [
      { text: 'Moscow', correct: true },
      { text: 'Saint Petersberg', correct: false }
     
    ]
  }
]