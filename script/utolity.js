// step 1- hide the home screen
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


 // step 2- show the play ground
 function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
 }