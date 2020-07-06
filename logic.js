
let dice = document.getElementById("diceValue");
console.log(dice);
dice.addEventListener('click',() => {
    let number =Math.floor( Math.random()* 6 + 1);
    console.log(number);
    dice.src = "./images/"+`${number}`+".png";

   
})
