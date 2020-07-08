
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