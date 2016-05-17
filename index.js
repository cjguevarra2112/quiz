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

var currentAnswer = null;
var currentStep = null;

var quizForm = document.querySelector("#quiz-form");
var submitButtons = document.querySelectorAll(".submit");

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