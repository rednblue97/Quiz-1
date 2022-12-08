const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')

let currentQuestion = {}
let trueAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "What does Javascript do?",
        choice1: "Provide the styling for the webpage.",
        choice2: "Let's the user play flash games.",
        choice3: "None of the answers.",
        choice4: "Allows us to provide functionality to a webpage",
        answer: 4,
    },
    {
        question: "What is a for loop?",
        choice1: "Loop executes a block of code as long as a specified condition is true.",
        choice2: "Loops through the javascript.",
        choice3: "Allows the user to split arrays.",
        choice4: "Lets us use local storage.",
        answer: 1,
    },
    {
        question: "What is an Array?",
        choice1: "An array is another word for the blockchain.",
        choice2: "An object that allows the user to store multiple elements at once.",
        choice3: "Lets the user store the script tag at the top of the HTML file.",
        choice4: "All of the above.",
        answer: 2,
    },
    {
        question: "How do we use console.log?",
        choice1: "A way to find the boolean of a webpage.",
        choice2: "Checks for if statements.",
        choice3: "Allows the user to hoist",
        choice4: "Lets the user log information to the console of the webpage.",
        answer: 4,
    },
    {
        question: "What is the difference between let and var?",
        choice1: "Both of these variables can not be unchanged.",
        choice2: "Nothing they both do the same function in adressing a variable.",
        choice3: "Let describes a function in a for loop, while var describes a variable.",
        choice4: "None of the answers.",
        answer: 2,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5
const TIME = 1

startQuiz = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('finalScore' , score)
        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerHTML = `Question ${questionCounter} of ${MAX_QUESTIONS}`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    trueAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!trueAnswers) return

        trueAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct':
        'wrong'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 60)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText =score
}

let time = 1;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown(){
    let quizTimer = setInterval(function(){
    if(quizTime <= 0) {
        clearInterval(quizTimer)
        showScores()
    } else {
        quizTime--;
        let sec = Math.floor(quizTime % 60)
        let min = Math.floor(quizTime / 60) % 60
        counting.innerHTML = `TIME: ${min} : ${sec}`   
    }

},1000);
}

startCountdown()

startQuiz()