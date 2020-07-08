
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

var pp = [];
play.addEventListener("click", function () {
    if (gi.value == "") {
        var i;
        for (i = 0; i < 4; i++) {
            g[i].style.display = "none";
        }
        gdice[0].style.display = "none";
        gdice[1].style.display = "none";
        totalplayer -= 1;
        playername[2].innerHTML = "";
        mplayername[1].innerHTML = "";
    } else {
        playername[2].innerHTML = gi.value;
        mplayername[1].innerHTML = gi.value;
        pp.push('g');
    }


    if (ri.value == "") {
        var i;
        for (i = 0; i < 4; i++) {
            r[i].style.display = "none";
        }
        rdice[0].style.display = "none";
        rdice[1].style.display = "none";
        totalplayer -= 1;
        playername[0].innerHTML = "";
        mplayername[0].innerHTML = "";
    } else {
        playername[0].innerHTML = ri.value;
        mplayername[0].innerHTML = ri.value;
        pp.push('r');
    }




    if (yi.value == "") {
        var i;
        for (i = 0; i < 4; i++) {
            y[i].style.display = "none";
        }
        ydice[0].style.display = "none";
        ydice[1].style.display = "none";
        totalplayer -= 1;
        playername[3].innerHTML = "";
        mplayername[3].innerHTML = "";
    } else {
        playername[3].innerHTML = yi.value;
        mplayername[3].innerHTML = yi.value;
        pp.push('y');
    }




    if (bi.value == "") {
        var i;
        for (i = 0; i < 4; i++) {
            b[i].style.display = "none";
        }
        bdice[0].style.display = "none";
        bdice[1].style.display = "none";
        totalplayer -= 1;
        playername[1].innerHTML = "";
        mplayername[2].innerHTML = "";
    } else {
        playername[1].innerHTML = bi.value;
        mplayername[2].innerHTML = bi.value;
        pp.push('b');
    }
    if (pp[0] == 'r') {
        rdice[0].style.display = "";
        rdice[1].style.display = "";
    }
    if (pp[0] == 'g') {
        gdice[0].style.display = "";
        gdice[1].style.display = "";
    }
    if (pp[0] == 'y') {
        ydice[0].style.display = "";
        ydice[1].style.display = "";
    }
    if (pp[0] == 'b') {
        bdice[0].style.display = "";
        bdice[1].style.display = "";
    }
    if (pp.length < 2) {
        alert('Please Enter Atleast 2 Players !');
        return 0;
    } else {
        welcomescreen.remove();
    }

});
