
// function play(){
//     // step 1- hide the home screen
//     const homeSection = document.getElementById('home-section');
//     homeSection.classList.add('hidden');
//     //  console.log(homeSection.classList);

//     // step 2- show the play ground
//     const playgroundSection = document.getElementById('playground-section');
//     playgroundSection.classList.remove('hidden');
//     //  console.log(playgroundSection.classList);
// }


function handelKeybordButtonPress(event) {
    const playerPress = event.key;
    // console.log('Current Player Key Press: ',playerPress);

    //  get the expected to press
    const currentAlphabetElement= document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    //  console.log(playerPress, expectedAlphabet);

    //  cheak alphabet matched or not
    if(playerPress === expectedAlphabet){
        // console.log(' You are win');
        // console.log('You have pressed Currently', expectedAlphabet)



        // use function 
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        //----------------------------------------------
        // // Updated Score - 3 method
        // // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // // 2. increse the score by 1
        // const newScore = currentScore + 1;
        // // 3. show the updated score
        // currentScoreElement.innerText = newScore;



        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        //  console.log('You are missed. You lost a life');


        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if( updatedLife === 0 ){
            gameOver();
        }
       

        //----------------------------------------------
        // // Updated Life line - 3 method
        // // 1. get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // 2. reduce the life count
        // const newLife = currentLife - 1;
        // // 3. display the updated life line number
        // currentLifeElement.innerText = newLife;

    }
}
// capture keybord key press
document.addEventListener('keyup', handelKeybordButtonPress )

function continueGame() {
    // step 1: genarate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Your Random Alphabet: ',alphabet);

    // set randomly genareted alphabet to the screen ( show it )
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // Set Background Color
    setBackgroundColorById(alphabet);

}


function play() {
    //  hide everything show only the playground
    hideElementById('home-section');
    hideElementById('final-score');
    showElementById('playground-section');

    // reset score and life 
    setTextElementValueById('current-life', 10);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver() {
    hideElementById('playground-section');
    showElementById('final-score');

    //  Updated final score
    //  1. get the final score
    const lastScore = getTextElementValueById('current-score');
    //  console.log('Your score is: ', lastScore);
    setTextElementValueById('last-score', lastScore);

    //  clear the last selected alphabet highlight

    const currentAlphabet = getElementTextById('current-alphabet');
    //  console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}

function getARandomAlphabet() {
    // get or create a alphabet array
    const alphabetStrings = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetStrings.split('');
   // console.log(alphabets);

    // get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const indexNumber = Math.round(randomNumber);

    const alphabet = alphabets[indexNumber];
   //  console.log(indexNumber, alphabet);
    return alphabet;
}



