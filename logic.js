
let dice = document.getElementById("diceValueMain");
dice.addEventListener('click',() => {
    let number =Math.floor( Math.random()* 6 + 1);
    dice.style.backgroundImage = "url(./images/"+`${number}`+".png)";

   
})
