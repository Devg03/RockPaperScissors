const rockBtn = document.getElementById('btn1');
const paperBtn = document.getElementById('btn2');
const scissorBtn = document.getElementById('btn3');

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

rockBtn.addEventListener('click', function () {
    console.log(playRound('rock', getComputerChoice()));
});

paperBtn.addEventListener('click', function () {
    console.log(playRound('paper', getComputerChoice()));
});

scissorBtn.addEventListener('click', function () {
    console.log(playRound('scissors', getComputerChoice()));
});