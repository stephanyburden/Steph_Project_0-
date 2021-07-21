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
    // grab the start button. already done on line one
    // access the style with .style
    // using .display set disply to none
    document.getElementById("start-btn").style.display = "none"

    //if you get lost, google .style javascript docs
} //COMPLETE

function startHungerTimer(){
    console.log("feed me bitch!")
    // Grab feed me button
    // assign an even listner to it so it can be clicked   
    //implement timer thingy that teach was talking bout
    // And increase hunger count on page
} //INCOMPLETE
