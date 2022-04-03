

const computerPlay = () => {
    const options = ['Rock', 'Paper', 'Scissors']
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

const play = (playerSelection, computerSelection) => {

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

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(play(playerSelection, computerSelection));
