var timeEl = document.createElement("h3");
var startButton = document.getElementById("start-button");
var sameGameEl = document.querySelector(".start-game");
timeEl.setAttribute("id", "timeEl");
var time = 60;
var questionCard = document.querySelector(".question-card")

console.log(timeEl);
function startGame() {
    sameGameEl.classList.add("hide");
    questionCard.classList.remove("hide");
}
var timeInterval = setInterval(function () {
    time--;
    if (time < 0) {
        time = 0
    }

    timeEl.textContent = "timer" + time;
}, 1000)


var questions = [
    {
        questionText: "1. What does HTML stand for?",
        choices: ["a", "b", "c"],
        answer: "a"
    },

    {
        questionText: "question-2",
        choices: ["a", "b", "c"],
        answer: "a"
    },

    {
        questionText: "question-3",
        choices: ["a", "b", "c"],
        answer: "c"
    },

    {
        questionText: "question-4",
        choices: ["a", "b", "c"],
        answer: "b"
    },

    {
        questionText: "question-5",
        choices: ["a", "b", "c"],
        answer: "c"
    },
];

var score = 0;

var qi = 0
function createCard() {
    questionCard.innerHTML = ""
    var h2element = document.createElement('h2');
    var buttonBox = document.createElement("div");
    h2element.textContent = questions[qi].questionText;
    questions[qi].choices.forEach(function (choice) {
        var btnEl = document.createElement("button");
        btnEl.textContent = choice;
        btnEl.setAttribute("value", choice);
        btnEl.onclick = checkAnswer;
        buttonBox.appendChild(btnEl);
    });
    var spanEl = document.createElement("span");
    spanEl.appendChild(timeEl);
    questionCard.appendChild(spanEl);
    questionCard.appendChild(h2element);
    questionCard.appendChild(buttonBox);
}
createCard()
function checkAnswer() {
    console.log(this.value);
    if (this.value !== questions[qi].answer) {
        console.log("wrong");
        time -= 10;
        timeEl.textContent = "timer" + time;
        if (time <= 0) {
            endgame()
        }
    }
    else {
        console.log("right");
        score++;
        console.log(score);
    } qi++;
    if (qi === questions.length) {

        endgame()
    } else {
        createCard()
    }
}


function endgame() {
    questionCard.setAttribute("style", "display: none");
    clearInterval(timeInterval);
    timeEl.setAttribute("style", "display: none");
    buildEndScreen()
}

function buildEndScreen() {
    var main = document.querySelector(".main");
    var enddiv = document.createElement("div");
    enddiv.innerHTML = "<h3>endgame" + score + "</h3>";
    enddiv.setAttribute("class", "end-game");
    main.appendChild(enddiv);
}

var container = document.querySelector('body, timeEl');
var quest = document.querySelector('body questionCard');
// container.insertBefore(newDiv, quest);

startButton.addEventListener("click", startGame);