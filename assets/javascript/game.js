//array of computer choices
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

let wins = 0;
let loses = 0;
let guessesLeft = 9;
const randomNumber = Math.floor(Math.random() * letters.length);
const randomLetter =letters[randomNumber];
    console.log(randomLetter);
let usedLetters = [];

let playerGuess = document.onkeyup = () =>{
    const pickedLetter = event.key;
    
    usedLetters.push(pickedLetter);
    console.log(pickedLetter);
    console.log(usedLetters);   

    if(pickedLetter === randomLetter){
        wins++;
        document.getElementById('wins').innerHTML = wins;
        reset();
        
    }

    if(pickedLetter !== randomLetter){
        guessesLeft--;
        document.getElementById('guessesLeft').innerHTML = guessesLeft;
    }

    if(guessesLeft < 1){
        loses++;
        reset();
    }
    document.getElementById('currentGuesses').innerHTML = usedLetters;
    document.getElementById('loses').innerHTML = loses;
    
    
}
document.getElementById('guessesLeft').innerHTML = guessesLeft;

function reset(){
    guessesLeft = 9;
    usedLetters = [];
}


