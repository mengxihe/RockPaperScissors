

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



const game =() =>{

    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        playerSelection = window.prompt('please input your selection');
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes('Won')){
            userScore += 1;
        }
        else if (result.includes('Lose')){
            computerScore += 1;
        }
    }

    if (userScore > computerScore){
        console.log('Congratulations, You won the game!');
    }
    else if(userScore < computerScore){
        console.log('Whoops, You lost to the computer!');
    }
    else{
        console.log('The game is even');
    }

}


