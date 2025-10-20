let outcome = '';
let compChoice = "bear";

//Player gives name
const username = prompt("Welcome to Bear Hunter Ninja! Please enter your name to get started: ");
const amessage = 'Hi ' + username + '! Let`s Play!!';

//Welcomes player and asks for their choice
alert(amessage);
let userChoice = prompt("Who are you: Bear, Ninja, or Hunter?");

//Figures out the outcome based on input
switch(userChoice.toUpperCase()){
    case "BEAR":
        if(compChoice === "bear"){
            outcome = "You Tied!!";
        } 
        else if(compChoice === 'ninja'){
            outcome = "You Win!!";
        } 
        else {
            outcome = "You Lose!!";
        }
        break;

    case 'NINJA':
        if(compChoice === 'bear'){
            outcome = "You Lose!!";
        }
        else if(compChoice === 'ninja'){
            outcome = "You Tied!!";
        }
        else{
            outcome = "You Win!!";
        }
        break;

    case 'HUNTER':
        if(compChoice === 'bear'){
            outcome = "You Win!!";
        }
        else if(compChoice === 'ninja'){
            outcome = "You Lose!!";
        }
        else{
            outcome = "You Tied!!";
        }
        break;
}

//Prints the players+computers choice on the page and prints outcome
document.getElementById('message').innerHTML = `${username} you chose ${userChoice}!<br>The computer chose ${compChoice}!<br>` + outcome;