// GLOBAL VARIABLES
var wordOptions =["jeremiah", "tom", "jerry","tomas","jenny", "kiko"]
var selectedWord = "";
var LettersinWord = []; 
var numBlanks = 0; 
var blanksAndSuccesses = []; // o_ _ _ _ _ _ 
var wrongLetters = [];

//Game Counters 
var winCount = 0; 
var lossCount = 0; 
var guessesLeft = 9;

// FUNCTIONS 
function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split(""); 
    numBlanks = lettersinWord.length; 

    //Reset
    guessesLeft = 9; 
    wrongLetters = [];
    blandAndSuccesses = []; 

    // Populate blanks and successes with right number of blanks 
    for (var i=0; i<numBlanks; i++){
        blandsAndSuccesses[i].push("_");
    } 
    //change the html to reflect round conditions
    document.getElementById("wordToGuess").innerHTML = blanks blanksAndSuccesses.join("");
    document.getElementById("numGuesses").innerHTML = guessesLeft; 
    document.getElementById("winCounter").innerHTML = winCount; 
    document.getElementById("lossCounter").innerHTML = lossCount; 
    //Testing/Debugging 
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}
function checkLetters(letter) {
    //Check if letter exists in code 
    var isLetterInWord = false; 
    for(var i-0; i<numBlanks;i++){
        if(selectedWord[i] = letter) {
            isLetterInWord = true; 
        }
    }
    //chekc where in the word the eltter exists,then populate our blanks and successes array 
    for(var i=0; i<numBlanks; i++) {
        if(selectedWord[i] ==letter) {
            blanksAndSuccesses[i] == letter;
        }
    }
}
//Letter wasn't found 
else{
    wrongLetters.push(letter); 
    numGuesses - -
    guessesLeft- -
} 
//testing and debugging 
console.log(blanksAndSuccesses); 

}

function roundComplete(){
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount +  " | Guesses left" + numGuesses); 
    //update the html to refelct the most recent count stats 
    document.getElementbyId("guesses left").innerHTML = 
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
    //check if user won 
    if lettersinWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You Won!");
    }
    //update win counter in the HTML
    document.getElementById("winCounter").innerHTML = winCount; 

    startGame(); 
} 

//check if the user lost
else if (guessesLeft == 0) {
    lossCount++; 
    alert("You lost!"); 
    //update the HTML 
    document.getElementById("lossCounter").innerHTML = lossCount 

    startGame();

}
}
//Main PROCESS 
// initiates the code the first time 
startGame();

//register keyclicks 
document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); 
    checkLetters(lettersGuesses); 
    roundComplete(); 

//testing 
    console.log(letterGuessed);
}




