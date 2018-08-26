//array of computer choices
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
//create my variables 
var win = 0;
var lose = 0;
var wordsLeft = 9;
var usedLetters = [];

//create random inex and apply it to the letters array to select a random letter
var randomLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(randomLetter);

//This function is called when a new letter is needed after a win or loss
function newLetter(){
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
}

//Here is where I will track my guesses left
function reduceWordsLeft(){
    document.getElementById('guessesLeft').innerHTML = wordsLeft;
}
//This function will be called to get things back to a new game
function reset(){
    wordsLeft = 9;
    usedLetters = [];
    newLetter();
    reduceWordsLeft();
}


//Now I need to keep track the letters chosen by the player by 'reading' their keypresses
document.onkeyup = (event) =>{
    var pressedKey = event.key;
    console.log(usedLetters);
    console.log(pressedKey);

    //Begin logic for letters chosen. FYI, notice this is still inside of the document.onkeyup

    //Do this if player guesses the letter
    if( pressedKey === randomLetter ){
        win++;
        document.getElementById('wins').innerHTML = win;

        reset();
        console.log('match');
    }   
    //Do this if player chooses the wrong letter
    if( pressedKey !== randomLetter ){
        //Now I have to .push the selected letters to the usedLetters array
        usedLetters.push(pressedKey);
        wordsLeft--;
        document.getElementById('currentGuesses').innerHTML = usedLetters;
        reduceWordsLeft();   
    }

    if ( wordsLeft < 1 ){
        reset();
        lose++;
        document.getElementById('loses').innerHTML = lose;
        alert('Sorry the correct letter was ' + randomLetter);

    }

} /*closing bracket for document.onkeyup*/