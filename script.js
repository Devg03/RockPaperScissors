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
            if (playerSelection == "rock")
                return "Replay!!"
            else if (playerSelection == "paper")
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            else if (playerSelection == "scissors")
                return `You Lose! ${playerSelection} beats ${computerSelection}`;
        case "Paper":
            if (playerSelection == "paper")
                return "Replay!!"
            else if (playerSelection == "scissors")
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            else if (playerSelection == "rock")
                return `You Lose! ${playerSelection} beats ${computerSelection}`;
        case "Scissors":
            if (playerSelection == "scissors")
                return "Replay!!"
            else if (playerSelection == "rock")
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            else if (playerSelection == "paper")
                return `You Lose! ${playerSelection} beats ${computerSelection}`;
    }
}

function game() {

    let playerSelection = getPlayerChoice()
    let computerSelection = getComputerChoice();

    console.log(playRound(playerSelection.toLowerCase(), computerSelection));
}

for (let i = 0; i < 5; i++) {
    game();
}