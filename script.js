

const computerPlay = () => {
    const options = ['Rock', 'Paper', 'Scissors']
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

const playRound = (playerSelection, computerSelection) => {

    playerSelection.toLowerCase();
    let playerS = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    if (playerS === computerSelection){
        return('its a tie!')
    }

    else if(playerS === 'Rock') {
        if(computerSelection === 'Paper'){
            return('You Lose! Paper beats Rock')
        }
        else{
            return('You Won! Rock beats Scissors')
        }
    }

    else if(playerS === 'Scissors'){
        if(computerSelection === 'Rock'){
            return('You Lose! Rock beats Scissors')
        }
        else{
            return('You Won! Scissors beats Paper')
        }
    }

    else if (playerS === 'Paper'){
        if(computerSelection === 'Scissors'){
            return('You Lose, Scissors beats Paper')
        }
        else{
            return('You Won! Paper beats Rock')
        }
    }
}

function displayMenu(menu){
    menu.style.visibility = "visible";
}

function hideMenu(menu){
    menu.style.visibility = "hidden"
}

function play(e){
    // let userScore = 0;
    // let computerScore = 0;
    let playerSelection = e.target.className;
    // console.log(e);
    // console.log(playerSelection);
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    // const interval = setInterval(draw, 10);
    console.log(result);
    const container = document.querySelector('#container');
    container.textContent = result;
    const winner = document.querySelector('#winner')
    
    if (!gameOver){
        if (result.includes('Won')){
            userScore += 1;
            user.textContent = `userScore: ${userScore}`;
            if(userScore === limit){
                gameOver =true;
                winner.textContent = 'You are the winner of the game!'
                displayMenu(gameDone);
                overTitle.textContent = 'Game Over, You Won!'
                restart.textContent = 'restart';
                hideMenu(game);
            }
        }

        else if (result.includes('Lose')){
            computerScore += 1;
            computer.textContent = `computerScore: ${computerScore}`;
            if(computerScore === limit){
                gameOver = true;
                winner.textContent = 'Whoops, you lost to the computer!'
                displayMenu(gameDone);
                overTitle.textContent = 'Game Over, You lost'
                restart.textContent = 'restart';
                hideMenu(game);
            }
        }
    }
    
}

let userScore = 0;
let computerScore = 0;
let limit = 5;
let gameOver = false;
let gameDone = document.getElementById("game-over");
let game = document.getElementById("game");
let restart = document.getElementById("restartButton");
let overTitle = document.getElementById("overTitle");
const user = document.querySelector('#userScore');
const computer = document.querySelector('#computerScore');
user.textContent = `userScore: ${userScore}`;
computer.textContent = `computerScore: ${computerScore}`;
const btn = [...document.querySelectorAll('#btn')];

btn.forEach(btn => btn.addEventListener('click', play));


