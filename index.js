var randNum1 = Math.floor(Math.random() * 6) + 1;
var randNum2 = Math.floor(Math.random() * 6) + 1;

var fileName1 = "./images/dice" + randNum1 + ".png";
var fileName2 = "./images/dice" + randNum2 + ".png";

document.querySelector(".img1").setAttribute("src", fileName1);
document.querySelector(".img2").setAttribute("src", fileName2);

var winningText = "";
if (randNum1 > randNum2) {
    winningText = "🚩Player 1 Wins!";
} else if (randNum1 < randNum2) {
    winningText = "Player 2 Wins!🚩";
} else {
    winningText = "Draw!";
}

document.querySelector("h1").textContent = winningText;
