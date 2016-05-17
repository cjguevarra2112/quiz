"use strict";

let theQuestions = [
    {
        text: "Who is the first vocalist of Iron Maiden?",
        choices: [
            "Bruce Dickinson",
            "Blaze Bayley",
            "Ronnie James Dio",
            "Paul D'anno"
        ],
        correct: 3,
        answer: null
    },
    {
        text: "What is the worst game console considered by the Nerd in AVGN?",
        choices: [
            "R-zone",
            "LJN Video Art",
            "Atari 5200",
            "Atari Jaguar"
        ],
        correct: 1,
        answer: null
    },
    {
        text: "Who is the current president of the Philippine republic? ",
        choices: [
            "Emilio Aguinaldo",
            "Mar Roxas",
            "Rodrigo Duterte",
            "Grace Poe"
        ],
        correct: 2,
        answer: null,
    },
    {
        text: "What is the southernmost province in Luzon region in the Phils.?",
        choices: [
            "Sorsogon",
            "Mindoro",
            "Camarines Sur",
            "Masbate"
        ],
        correct: 0,
        answer: null
    }
];


let currentIndex = 0;

init();
onQuestionSubmit();

function init() {
    renderQuestion(theQuestions[0], currentIndex);
}

function renderQuestion(question, index) {
    
    // Cache DOM
    let questionText = document.querySelector("#question-text");
    let questionNumber = document.querySelector("#question-number");
    let choices = document.querySelector("#choices");
    
    // Render question text
    questionText.textContent = question.text;
    // Render question number
    questionNumber.textContent = (currentIndex + 1).toString();
    
    // Render choices
    question.choices.forEach((choice) => {
        let choiceParagraph = document.createElement("p");
        let choiceRadio = document.createElement("input");
        let choiceText = document.createTextNode(choice);
        
        choiceRadio.type = "radio";
        choiceRadio.name = "choice";
        choiceRadio.value = choice;
        choiceParagraph.appendChild(choiceRadio);
        choiceParagraph.appendChild(choiceText);
        
        choices.appendChild(choiceParagraph);
    });
    
}



function onQuestionSubmit() {
    var currentAnswer = null; // current choice to the current question
    var currentStep = null;   // current step (next/previous)
    
    // The question form
    var quizForm = document.querySelector("#quiz-form");
    // Either of previous or next button
    var submitButtons = document.querySelectorAll(".step");

    quizForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let choice = event.target.choice.value;
        currentAnswer = choice;
        
        alert(currentAnswer);
        alert(currentStep);
    });

    Array.prototype.forEach.call(submitButtons, (button) => {
        button.addEventListener("click", (event) => {
            let step = event.target.value;
            currentStep = step;
        });
    });
}

