
let dice = document.getElementById("diceValue");
console.log(dice);
dice.addEventListener('click',() => {
    let number =Math.floor( Math.random()* 6 + 1);
    console.log(number);
    dice.src = "./images/"+`${number}`+".png";

   
})
var step = document.getElementsByClassName('astep');
var rdice = document.getElementsByClassName('r-dice');
var gdice = document.getElementsByClassName('g-dice');
var bdice = document.getElementsByClassName('b-dice');
var ydice = document.getElementsByClassName('y-dice');

var dicesound = document.getElementById("diceSound");
var killedsound = document.getElementById("killedSound");
var winsound = document.getElementById("winSound");
var inoutsound = document.getElementById("inoutSound");
var stepsound = document.getElementById("stepSound");

var r = document.getElementsByClassName('r');
var g = document.getElementsByClassName('g');
var b = document.getElementsByClassName('b');
var y = document.getElementsByClassName('y');

var ri = document.getElementsByClassName('ri')[0];
var gi = document.getElementsByClassName('gi')[0];
var yi = document.getElementsByClassName('yi')[0];
var bi = document.getElementsByClassName('bi')[0];

var play = document.getElementsByClassName('play')[0];

var playerzone = document.getElementsByClassName('player');
var playerroom = document.getElementsByClassName('playerzone');
var playername = document.getElementsByClassName('playername');
var mplayername = document.getElementsByClassName('mplayername');
var welcomescreen = document.getElementsByClassName('welcome')[0];