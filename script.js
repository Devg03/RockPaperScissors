const rockBtn = document.getElementById('btn1');
const paperBtn = document.getElementById('btn2');
const scissorBtn = document.getElementById('btn3');
const result = document.getElementById('result');

const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');

const sign = document.getElementById('sign');

let pScore = 0;
let cScore = 0;

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
            if (playerSelection == "rock") {
                return "Replay!!"
            }
            else if (playerSelection == "paper") {
                pScore = pScore + 1;
                playerScore.textContent = "Player Score: " + pScore;
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            }
            else if (playerSelection == "scissors") {
                cScore = cScore + 1;
                computerScore.textContent = "Computer Score: " + cScore;
                return `You Lose! ${playerSelection} beats ${computerSelection}`;
            }
        case "Paper":
            if (playerSelection == "paper") {
                return "Replay!!"
            }
            else if (playerSelection == "scissors") {
                pScore = pScore + 1;
                playerScore.textContent = "Player Score: " + pScore;
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            }
            else if (playerSelection == "rock") {
                cScore = cScore + 1;
                computerScore.textContent = "Computer Score: " + cScore;
                return `You Lose! ${playerSelection} beats ${computerSelection}`;
            }
        case "Scissors":
            if (playerSelection == "scissors") {
                return "Replay!!"
            }
            else if (playerSelection == "rock") {
                pScore = pScore + 1;
                playerScore.textContent = "Player Score: " + pScore;
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            }
            else if (playerSelection == "paper") {
                cScore = cScore + 1;
                computerScore.textContent = "Computer Score: " + cScore;
                return `You Lose! ${playerSelection} beats ${computerSelection}`;
            }
    }

}

const rockSign = document.createElement('div');
const paperSign = document.createElement('div');
const scissorsSign = document.createElement('div');

rockBtn.addEventListener('click', function () {
    if (sign.contains(paperSign)) {
        sign.removeChild(paperSign);
    } else if (sign.contains(scissorsSign)) {
        sign.removeChild(scissorsSign);
    }

    rockSign.setAttribute('style', 'background-image: url("https://i.pinimg.com/736x/ee/99/6d/ee996d592980ec099f24c0836b2b7070.jpg"); visibility: visible;');
    sign.appendChild(rockSign);

    if (pScore == 5) {
        result.textContent = 'You have won! Computer lose!!'
    } else if (cScore == 5) {
        result.textContent = 'The computer has won! You lose!!'
    } else {
        result.textContent = playRound('rock', getComputerChoice());
    }
});

paperBtn.addEventListener('click', function () {
    if (sign.contains(rockSign)) {
        sign.removeChild(rockSign);
    } else if (sign.contains(scissorsSign)) {
        sign.removeChild(scissorsSign);
    }

    paperSign.setAttribute('style', 'background-image: url("https://i.pinimg.com/736x/03/e6/9c/03e69c77ade2b0cf740af358283addd0.jpg"); visibility: visible;');
    sign.appendChild(paperSign);


    if (pScore == 5) {
        result.textContent = 'You have won! Computer lose!!'
    } else if (cScore == 5) {
        result.textContent = 'The computer has won! You lose!!'
    } else {
        result.textContent = playRound('paper', getComputerChoice());
    }
});

scissorBtn.addEventListener('click', function () {
    if (sign.contains(rockSign)) {
        sign.removeChild(rockSign);
    } else if (sign.contains(paperSign)) {
        sign.removeChild(paperSign);
    }

    scissorsSign.setAttribute('style', 'background-image: url("https://i.pinimg.com/236x/89/ef/5c/89ef5cd84c8a8882dfbafab475e40aac.jpg"); visibility: visible;');
    sign.appendChild(scissorsSign);


    if (pScore == 5) {
        result.textContent = 'You have won! Computer lose!!'
    } else if (cScore == 5) {
        result.textContent = 'The computer has won! You lose!!'
    } else {
        result.textContent = playRound('scissors', getComputerChoice());
    }
});
