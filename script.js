'use strict';

let rndNUmber = Math.trunc(Math.random() * 20) + 1
// document.querySelector(".number").textContent = ""

let score = 20;
let highScore = 0;

const displayMessage = (message) => {
    document.querySelector(".message").textContent = message
}

const clickFun = () => {

    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        displayMessage("no Message")
    }
    else if (guess === rndNUmber) {
        displayMessage("Right Guess")

        document.querySelector(".number").textContent = rndNUmber

        document.querySelector("body").style.backgroundColor = "green"
        document.querySelector(".number").style.width = "30rem"

        if (score >= highScore) {
            highScore = score
        }
        document.querySelector(".highscore").textContent = highScore;
    }
    else if (guess !== rndNUmber) {

        if (score > 1) {
            (guess > rndNUmber) ? displayMessage("Too High!!") : displayMessage("Too Low!!")
            score--
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("Game Over!!")
            document.querySelector(".score").textContent = 0;
        }
    }
}

const clickAgain = () => {
    score = 20;
    rndNUmber = Math.trunc(Math.random() * 20) + 1

    document.querySelector(".score").textContent = score

    document.querySelector(".number").textContent = '?'

    displayMessage("Start guessing...")

    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").style.width = "15rem"

    document.querySelector(".guess").value = ""
}

document.querySelector(".check").addEventListener('click', clickFun)

document.querySelector(".again").addEventListener('click', clickAgain);

