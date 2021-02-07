let score = 0;
const image = document.getElementById("die");
let winScore =30;
const input = document.getElementById("inputnum");

function rollTheDice(){
        let randomNumber = Math.ceil(Math.random() * 6);

        image.setAttribute("src",
        "img/dice" + randomNumber + ".png");
    
        score += randomNumber;
        document.getElementById("scoreShow").textContent = score;
        image.style.visibility = "visible";

        if (randomNumber == 1) {
            document.getElementById("head").textContent = "You Lose!";
            document.getElementById("sobutn").style.visibility ="visible";
            document.getElementById("roll").style.visibility ="hidden";
        }
        if (score >= winScore) {
            document.getElementById("head").textContent = "You Win!";
            document.getElementById("sobutn").style.visibility = "visible";
            document.getElementById("roll").style.visibility ="hidden";
        }
    }

function startOver(){
    score= 0;
    document.getElementById("scoreShow").textContent = "0";
    document.getElementById("head").textContent = "Player 1";
    document.getElementById("die").style.visibility = "hidden";
    document.getElementById("sobutn").style.visibility ="hidden";
    document.getElementById("roll").style.visibility ="visible";
    document.getElementById("inputnum").style.visibility = "visible";
    document.getElementById("score").style.visibility = "visible";
}

function setScore(){
    winScore = inputnum.value;
    document.getElementById("inputnum").style.visibility = "hidden";
    document.getElementById("score").style.visibility = "hidden";
}