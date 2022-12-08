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