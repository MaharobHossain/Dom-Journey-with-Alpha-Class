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

 function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
 }

 function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
 }



 function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
 }