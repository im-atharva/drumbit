//? document.querySelector(".w ").addEventListener("click", clicked);
//!note we are not using a () after the function! coz we are not calling the function we are just passing the function.

/*Same thing with other method (anonymous function)

document.querySelector("button").addEventListener("click", function() {
    alert("I got Clicked");
});  
 */

//* button press area!

var noOfDrumbeats = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrumbeats; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", clicked);
}

function clicked() {
    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        default: console.log(buttonInnnerHTML);
    }
}

//* keypress area

document.addEventListener("keypress", function (event) {
    // alert("The key was presssed!")
    var whichKey = (event.key);
    makeSound(whichKey);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        default: console.log(buttonInnnerHTML);
    }
}

