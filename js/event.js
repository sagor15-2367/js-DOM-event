// option :1 directly set on the html element
/* <button onclick="document.body.style.backgroundColor='Yellow'">Make Yellow</button> */


// option:2  add onclick function on the html elemnent
// <button onclick="makeRed()">make red</button>

function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// option :3
const makeBlueButton = document.getElementById('make-blue');
// console.log(makeBlueButton);
makeBlueButton.onclick = makeBlue

function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}
// option : 3 another
const makePurple = document.getElementById('make-purple');
// console.log(makePurple);
makePurple.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


// option : 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makepink)

function makepink() {
    document.body.style.backgroundColor = 'pink';
}
// option : 4 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

// option : 4 final
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';

})