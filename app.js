//cache the dom - storing the variables for future use in the program which speeds up the program.
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoices(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
console.log(getComputerChoices());

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} you win!`;
}

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)} doesn't beat ${convertToWord(computerChoice)} you lose!`;
}

function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} vs ${convertToWord(computerChoice)} it's a draw!`;
}

function game(userChoice) {
    const computerChoice = getComputerChoices();
    switch(userChoice + computerChoice){
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;

        case "pp":
        case "rr":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}
main();