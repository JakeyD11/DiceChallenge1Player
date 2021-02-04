let score = 0;
const image = document.getElementById("die")



function rollTheDice(){
        let randomNumber = Math.ceil(Math.random() * 6);

        image.setAttribute("src",
        "img/dice" + randomNumber + ".png");
    
        score += randomNumber;
        document.getElementById("scoreShow").textContent = score;
        image.style.visibility = "visible";
    }
