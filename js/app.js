// DOM Ref. 
const startButton = document.getElementById("start-btn");
const nameInput = document.getElementById("pet-name");
const feedButton = document.getElementById("feed-btn");
const napButton = document.getElementById("nap-btn");
const playButton = document.getElementById("play-btn");
const ageEl = document.getElementById('age');
const hungerEl = document.getElementById("hunger");
const sleepEl = document.getElementById("sleep");
const playEl = document.getElementById("play");



// State Var. 


let hungerInterval = null;
let sleepInterval = null;
let playInterval = null;
let ageInterval = null;


//Event Listners 
startButton.addEventListener("click", startGame);
feedButton.addEventListener("click", feedPet); 
napButton.addEventListener("click", napTime);
playButton.addEventListener("click", playTime); 




// Functions
function startGame() {
    // prompt user to input name and diplay name on page
    nameInput.innerHTML += prompt("Name your pet!");
    
    // start button to disappear after being clicked
    hideStartBtn();
    
    //tamgotchi status bar displays - use timer thing teacher showed us.
    startHungerTimer();
    startSleepTimer();
    startPlayTimer();
    startAgeTimer();
} //COMPLETE

function hideStartBtn(){
    // grab the start button. already done on line one
    // access the style with .style
    // using .display set disply to none
    document.getElementById("start-btn").style.display = "none"
    
    //if you get lost, google .style javascript docs
} //COMPLETE

function startHungerTimer(){   
    //implement timer thingy that teach was talking bout
    hungerInterval = setInterval(function () {
        myPet.hunger++;
        // increase the count on the page
    hungerEl.textContent =  "Hunger: " + myPet.hunger; 
    if(myPet.hunger === 4) {
        console.log("Feed me HUMAN!")
    }else if (myPet.hunger === 10) {
        clearInterval(hungerInterval);
        console.log("YOU KILLED ME IM DEADDDD X__X!---hunger")
        }
    }, 4000)
    
    // And increase hunger count on page
} //COMPLETE


function startSleepTimer() {
    sleepInterval = setInterval(function () {
        myPet.sleep++;
        // increase the count on the page
    sleepEl.textContent =  "Sleep: " + myPet.sleep; 
    if(myPet.sleep === 6) {
        console.log("YO! Im mad sleepy!!")
    }else if (myPet.sleep === 10) {
        clearInterval(sleepInterval);
        console.log("DAMNNN....YOU KILLED ME TOO X__X!!---sleep ")
    }
    }, 6000)
    
}

function startPlayTimer() {
    console.log("I want to play!!!");
}

function startAgeTimer() {
    console.log("Damn Im getting old AF!!");
}




function feedPet() {
    console.log("Pet is being fed!");
}

function napTime() {
    console.log("Time to go to sleep!");
}

function playTime() {
    console.log("Time to play");
}


// Tamagotchi Class

class Tamagotchi {
    constructor(inputName) {
        this.name = inputName;
        this.age = 0;
        this.hunger = 0;
        this.sleep = 0;
        this.play = 0;
    }
}

let myPet = new Tamagotchi("Berry");
