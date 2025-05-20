let userScore = 0;
let compScore = 0;


const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const userChoiceImg = document.querySelector("#user-choice-img");
const compChoiceImg = document.querySelector("#comp-choice-img");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

}

const showImages = (userChoice, compChoice) => {
    userChoiceImg.src = `image/${userChoice}.png`; // Assumes images are named image/rock.png, paper.png, scissors.png
    compChoiceImg.src = `image/${compChoice}.png`;
    userChoiceImg.style.display = "block";
    compChoiceImg.style.display = "block";
}

function showWinner(userWin, userChoice, compChoice) {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log(" hurry! you Win");
        msg.innerText = `hurry! you win, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = userScore;
        console.log("you Lose.");
        msg.innerText = `Oh no! you lose, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#cc3333";
    }
}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "game was draw.";
    msg.style.backgroundColor = "purple";

};

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    // next step is to generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);
    showImages(userChoice,compChoice)

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin = compChoice === "paper"? false : true;
        } else if(userChoice === "paper"){
            //rock , scissors
            userWin = compChoice === "scissors"? false : true; 
        }
        else{
            //rock, paper
            userWin = compChoice === "rock"? false : true; 
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choice.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});  