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
const commentEl = document.getElementById("comment");



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
        hungerEl.textContent =  "Hunger: " + myPet.hunger; 
        if(myPet.hunger === 4) {
            console.log("Feed me HUMAN!")
        }else if (myPet.hunger === 10) {
            gameOver();
            console.log("YOU KILLED ME IM DEADDDD X__X!---hunger")
        }
    },2000)
    

} //COMPLETE


function startSleepTimer() {
    sleepInterval = setInterval(function () {
        myPet.sleep++;
        sleepEl.textContent =  "Sleep: " + myPet.sleep; 
        if(myPet.sleep === 6) {
            console.log("YO! Im mad sleepy!!")
        }else if (myPet.sleep === 10) {
            gameOver();
            console.log("DAMNNN....YOU KILLED ME TOO X__X!!---sleep ")
        }
    }, 4000)
    
} //COMPLETE

function startPlayTimer() {
    playInterval = setInterval(function () {
        myPet.play++;
        playEl.textContent =  "Play: " + myPet.play; 
        if(myPet.play === 7) {
            console.log("UGH!! Im SO bored!!")
        }else if (myPet.play === 10) {
            gameOver();
            console.log("UGGHH you so lame Im dead...LITERALLY!! X___X!!---play")
        }
    }, 3000)
} //COMPLETE

function startAgeTimer() {
    ageInterval = setInterval(function () {
        myPet.age++;
        ageEl.textContent =  "Age: " + myPet.age;
        if(myPet.hunger === 10 || myPet.sleep === 10 || myPet.play === 10) {
            gameOver();  
            console.log("Im a goner!! X____X---age")
        } else if (myPet.age === 25) {
            gameOver();
            console.log("AYYEEE!! Im 25!! Lets get LIT!!---age")
        }
    }, 2000)
} // Complete

function gameOver() {
    clearInterval(ageInterval);
    clearInterval(hungerInterval);
    clearInterval(sleepInterval);
    clearInterval(playInterval);
    // Hide buttons when pet dies!
}



function feedPet() {
    // reduce the pets hunger
    // update text on screen
    if(myPet.hunger < 3) {
        //myPet.hunger = 0;
        hungerEl.textContent = "Hunger: " + myPet.hunger;
        commentEl.textContent = "Yuck food Gross!!";
    } else {
        myPet.hunger = myPet.hunger -3;
        hungerEl.textContent = "Hunger: " + myPet.hunger;
        console.log("Pet is being fed!");
        
    }
}

function napTime() {
    if(myPet.sleep < 4) {
        sleepEl.textContent = "Sleep: " + myPet.hunger;
        
    } else { 
        myPet.sleep = myPet.sleep -1;
        sleepEl.textContent = "Sleep: " + myPet.sleep;
        console.log("Time to go to sleep!");

    }
}

function playTime() {
    if(myPet.play < 2) {
        playEl.textContent = "Play: " + myPet.play;
    } else {
        myPet.play = myPet.play -2;
        playEl.textContent = "Play: " + myPet.play;
        console.log("Time to play");

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
