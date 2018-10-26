// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}



function getComputerChoice() {
   var randomNo = getRandomInt(3)
   var computerChoice;  
   
   if (randomNo == 0) {
    computerChoice = "Rock"
    } else if (randomNo == 1) {
        computerChoice = "Scissors"
    } else if (randomNo == 2) {
        computerChoice = "Paper"
    }
    
    return computerChoice
}


var userChoiceDisplay = document.getElementById("userChoice")
var computerChoiceDisplay = document.getElementById("computerChoice")
var userChoiceInput = document.getElementById("input")

$("#shoot").click(function() {
    var computerChoice = getComputerChoice()
    userChoiceDisplay.textContent = userChoiceInput.value
    computerChoiceDisplay.textContent = computerChoice
})


// DOCUMENT READY FUNCTION BELOW

