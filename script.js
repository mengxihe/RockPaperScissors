

const computerPlay = () => {
    const options = ['Rock', 'Paper', 'Scissors']
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

const play = (playerSelection, computerSelection) => {

    playerSelection.toLowerCase();
    let playerS = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    if (playerS === computerSelection){
        console.log('its a tie!')
    }
    else if(playerS == 'Rock'){
        if(computerPlay == 'Paper'){
            console.log('You Lose! Paper beats Rock')
        }
        else{
            console.log('You Won! Rock beats Scissors')
        }
    }

    else if(playerS == 'Scissors'){
        if(computerPlay == 'Rock'){
            console.log('You Lose! Rock beats Scissors')
        }
        else{
            console.log('You Won! Scissors beats Paper')
        }
    }

    else if(playerS == 'Paper'){
        if(computerPlay == 'Scissors'){
            console.log('You Lose, Scissors beats Paper')
        }
        else{
            console.log('You Won! Paper beats Rock')
        }
    }
}