
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


function play() {
    hideElementById('home-section');
    showElementById('playground-section');
}



