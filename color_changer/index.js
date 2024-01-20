const colors = ["green", "red", "yellow", "blue"]; // Colors to use

const btn = document.getElementById("btn"); // Element by ID

const color = document.querySelector('.change-this'); // matches css selector

btn.addEventListener('click', function () { //  btn Click function
    // get random number between 0 - 3
    const randomNumber = getRandomNumber(); // invoking random function
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = "Background Color:" + colors[randomNumber];
    btn.backgroundColor = colors[randomNumber];
});


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}