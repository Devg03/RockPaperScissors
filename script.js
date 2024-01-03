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


const playerSelection = getPlayerChoice()
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));