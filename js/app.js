const startButton = document.getElementById("start-btn");
const nameInput = document.getElementById("pet-name");


startButton.addEventListener("click", startGame); 

function startGame() {
    // prompt user to input name and diplay name on page
    nameInput.innerHTML += prompt("Name your pet!");

     // start button to disappear after being clicked
    hideStartBtn()
   
    //tamgotchi status bar displays - use timer thing teacher showed us.
   startHungerTimer()
} //COMPLETE

function hideStartBtn(){
    console.log("start button should disappear")
    // grab the start button. already done on line one
    // access the style with .style
    // using .display set disply to none
    document.getElementById("start-btn").style.display = "none"

    //if you get lost, google .style javascript docs
} //COMPLETE

function startHungerTimer(){
    console.log("feed me bitch!")
    //implement thingy that teach was talking bout
} //INCOMPLETE
