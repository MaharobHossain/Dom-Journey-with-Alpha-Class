
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
    console.log('Current Player Key Press: ',playerPress);

    //  get the expected to press
    const currentAlphabetElement= document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPress, expectedAlphabet);

    //  cheak alphabet matched or not
    if(playerPress === expectedAlphabet){
        console.log(' You are win');
    }
    else{
        console.log('You are missed. You lost a life')
    }
}
// capture keybord key press
document.addEventListener('keyup', handelKeybordButtonPress )

function continueGame() {
    // step 1: genarate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your Random Alphabet: ',alphabet);

    // set randomly genareted alphabet to the screen ( show it )
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // Set Background Color
    setBackgroundColorById(alphabet);

}


function play() {
    hideElementById('home-section');
    showElementById('playground-section');
    continueGame();
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



