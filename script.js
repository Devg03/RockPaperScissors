console.log("Hello!");

// Computer Choice
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);

    if (randNum == 1) {
        return "Rock";
    } else if (randNum == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getPlayerChoice() {
    let response = prompt("Please enter your choice:\n1. Rock\n2. Paper\n3. Scissors");
    return response;
}

function playRound(playerSelection, computerSelection) {
    switch (computerSelection) {
        case "Rock":
            if (playerSelection == "Rock")
                return "Replay!!"
            else if (playerSelection == "Paper")
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            else if (playerSelection == "Scissors")
                return `You Lose! ${playerSelection} beats ${computerSelection}`;
        case "Paper":
            if (playerSelection == "Paper")
                return "Replay!!"
            else if (playerSelection == "Scissors")
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            else if (playerSelection == "Rock")
                return `You Lose! ${playerSelection} beats ${computerSelection}`;
        case "Scissors":
            if (playerSelection == "Scissors")
                return "Replay!!"
            else if (playerSelection == "Rock")
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            else if (playerSelection == "Paper")
                return `You Lose! ${playerSelection} beats ${computerSelection}`;
    }
}

const playerSelection = getPlayerChoice()
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));