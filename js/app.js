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
const commentEl1 = document.getElementById("comment1");
const commentEl2 = document.getElementById("comment2");
const commentEl3 = document.getElementById("comment3");


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
    document.getElementById("start-btn").style.display = "none"
    
} //COMPLETE

function startHungerTimer(){   
    hungerInterval = setInterval(function () {
        myPet.hunger++;
        hungerEl.textContent =  "Hungry: " + myPet.hunger; 
        if(myPet.hunger === 1) {
            commentEl1.textContent = "Feed me!"
        }else if (myPet.hunger === 10) {
            commentEl1.textContent = "X___X DEAD!"
            gameOver();
        }
    },2000)
    

} //COMPLETE


function startSleepTimer() {
    sleepInterval = setInterval(function () {
        myPet.sleep++;
        sleepEl.textContent =  "Sleepy: " + myPet.sleep; 
        if(myPet.sleep === 3) {
            commentEl2.textContent = "Im so sleepy."
        }else if (myPet.sleep === 10) {
            commentEl2.textContent = "X___X DEAD!"
            gameOver();
        }
    }, 4000)
    
} //COMPLETE

function startPlayTimer() {
    playInterval = setInterval(function () {
        myPet.play++;
        playEl.textContent =  "Playful: " + myPet.play; 
        if(myPet.play === 4) {
            commentEl3.textContent = "Im bored!!";
        }else if (myPet.play === 10) {
            commentEl3.textContent = "X___X DEAD!" 
            gameOver();
        }
    }, 3000)
} //COMPLETE

function startAgeTimer() {
    ageInterval = setInterval(function () {
        myPet.age++;
        ageEl.textContent =  "Age: " + myPet.age;
        if(myPet.hunger === 10 || myPet.sleep === 10 || myPet.play === 10) {
            gameOver();  
        } else if (myPet.age === 100) {
            gameOver();
        }
    }, 1000)
} // Complete

function gameOver() {
    console.log(myPet.hunger);
    clearInterval(ageInterval);
    clearInterval(hungerInterval);
    clearInterval(sleepInterval);
    clearInterval(playInterval);
    document.getElementById("feed-btn").style.display = "none"
    document.getElementById("nap-btn").style.display = "none"
    document.getElementById("play-btn").style.display = "none"
    nameInput.textContent = "GAME OVER!"

}// COMPLETE



function feedPet() {
    // reduce the pets hunger
    // update text on screen
    if(myPet.hunger < 3) {
        //myPet.hunger = 0;
        hungerEl.textContent = "Hungry: " + myPet.hunger;
        commentEl1.textContent = "Yuck! Too much food!";
    } else {
        myPet.hunger = myPet.hunger -2;
        hungerEl.textContent = "Hungry: " + myPet.hunger;
        commentEl1.textContent = "YUM!"
        
    }
}

function napTime() {
    if(myPet.sleep < 4) {
        sleepEl.textContent = "Sleepy: " + myPet.hunger;
        commentEl2.textContent = "Im not sleepy!"
        
    } else { 
        myPet.sleep = myPet.sleep -1;
        sleepEl.textContent = "Sleepy: " + myPet.sleep;
        commentEl2.textContent = "That was a good nap!"

    }
}

function playTime() {
    if(myPet.play < 2) {
        playEl.textContent = "Playful: " + myPet.play;
        commentEl3.textContent = "I dont want to play."
    } else {
        myPet.play = myPet.play -2;
        playEl.textContent = "Playful: " + myPet.play;
        commentEl3.textContent = "Yay!"

    }
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

let myPet = new Tamagotchi("Berry")
