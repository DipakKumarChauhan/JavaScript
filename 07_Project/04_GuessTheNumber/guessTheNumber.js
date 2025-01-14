let randomNumber =parseInt(( Math.random() * 100) + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');

const guessSlot= document.querySelector('.guesses')

const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');

const startOver= document.querySelector('.resultParas')
const p =document.createElement('p') ; // this line will create a para graph
let PrevGuess = []
let numGuess = 1 
let playGame = true

if(playGame)
{
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess  = parseInt (userInput.value)
        validateGuess(guess)
    });
}

function validateGuess (guess)
{
    if(isNaN(guess) )
    {
        alert(`please Enter a valid number ${guess} in not valid`)
    }else if(guess < 1 || guess > 100)
    {
        alert(`please Enter a valid number ${guess} in not valid`)
        
    }
    else 
    {
        PrevGuess.push(guess)
        if(numGuess > 10 )
        {
            displayGuess(guess)
            displayMessage(`Game Over, Random number was ${randomNumber}`)
           
            endGame()
        }
        else
        {
            displayGuess(guess)

            checkGuess(guess);

        }
    }

}

const checkGuess = (guess) =>  
{
    if(guess === randomNumber)
    {
        displayGuess(guess)
        displayMessage(`Your guess is correct random number and right guess was ${guess}`)
        endgame();

    }else  if(guess > randomNumber)
        {
            //displayGuess(guess)
            displayMessage(`Your guess is incorrect and  high`)
            //PrevGuess.push(guess)
         
        }
    else
    {
        // displayGuess(guess)
            displayMessage(`Your guess is incorrect and low`)
           // PrevGuess.push(guess)
          
    }

}

const displayGuess= (guess) =>
{
    userInput.value = '' ;  // we do this coz we already got the value of guess and now we want user input to be empty so that we can get nxt value
    guessSlot.innerHTML += `${guess} , `
    numGuess++;
    remaining.innerHTML =  `${11 - numGuess}`

}

const displayMessage  = (message) =>
{
    lowOrHigh.innerHTML = (`<h2> ${message} </h2>`)
}

function endGame()
{
    userInput.value = '';
    userInput.setAttribute('disabled' , '');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
    startOver.appendChild(p);
   
    playGame =false;


    newGame();
}

function newGame() {
const  newGameButton= document.querySelector('#newGame')

newGameButton.addEventListener('click', function (e) {
   randomNumber =parseInt(( Math.random() * 100) + 1);
    userInput.removeAttribute('disabled');
    PrevGuess =[];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    startOver.removeChild(p);

    playGame = true;

})

}




