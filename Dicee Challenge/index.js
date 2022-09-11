var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDieceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDieceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);   // Changes the value of "src" attribute to randomImageSource


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDieceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDieceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);   // Changes the value of "src" attribute to randomImageSource


if ( randomNumber1 > randomNumber2 ) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if ( randomNumber1 < randomNumber2 ) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "It's a draw!";
}