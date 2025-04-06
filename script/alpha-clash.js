
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


function continueGame() {
    // step 1: genarate a random alphabet
}


function play() {
    hideElementById('home-section');
    showElementById('playground-section');
    continueGame( )
}

function rendomAAlphabet() {
    // get or create a alphabet array
    const alphabetStrings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabets = alphabetStrings.split('');
    console.log(alphabets);

    // get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const indexNumber = Math.round(randomNumber);
    console.log(indexNumber);
}



