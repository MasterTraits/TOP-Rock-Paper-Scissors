let input = "", randomIndex, decision, value, decide = 0, User = 0, Computer = 0, 
array = ["ROCK!", "PAPER!", "SCISSORS!"],
rock = ["ROCK", "rock", "Rock"],
paper = ["PAPER", "paper", "Paper"],
scissors = ["SCISSORS", "scissors", "Scissors", "scissor", "SCISSOR", "Scissor"];

function getcomputerSelection() {
    randomIndex = Math.floor(Math.random() * array.length);
    decision = array[randomIndex];
    return decision;
}

function getPlayerChoice() {
    do { input = prompt("\rWhat will be your move: ") }
    while (!input || input.trim() === "");
    if (rock.indexOf(input) !== -1) { input = "ROCK!"; }
    else if (paper.indexOf(input) !== -1) { input = "PAPER!"; }
    else if (scissors.indexOf(input) !== -1) { input = "SCISSORS!"; }
    return input;
}

function playround(playerSelection, computerSelection) {
    alert("User\'s "+ playerSelection + " vs. Computer's " + computerSelection);

    if (playerSelection == computerSelection) { alert("Tie!"); }
    else if ((playerSelection === 'ROCK!' && computerSelection === 'SCISSORS!') ||
    (playerSelection === 'PAPER!' && computerSelection === 'ROCK!') ||
    (playerSelection === 'SCISSORS!' && computerSelection === 'PAPER!')) 
    { 
        alert("User Win!");
        return User++; 
    }
    else if ((computerSelection === 'ROCK!' && playerSelection === 'SCISSORS!') ||
    (computerSelection === 'PAPER!' && playerSelection === 'ROCK!') ||
    (computerSelection === 'SCISSORS!' && playerSelection === 'PAPER!')) 
    { 
        alert("Computer Win!");
        return Computer++; }
    }

function game() {
    do { decide = prompt("How may rounds will you play?: "); }
    while (decide === 0);
    for (; decide > 0; decide-- ) {
        playround(getPlayerChoice(), getcomputerSelection());
    }
    value = (User > Computer)? "USER WINS!!" : "COMPUTER WINS!!";
    alert("\n\nScores:\nUser\t\t" + User + "\nComputer\t" + Computer + "\n" + value);

}

console.log(game());