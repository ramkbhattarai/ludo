
let dice = document.getElementById("diceValueMain");
console.log(dice);
dice.addEventListener('click',() => {
    let number =Math.floor( Math.random()* 6 + 1);
    
    console.log(number);
    dice.style.backgroundImage = "url(./images/"+`${number}`+".png)";

   
})
// let collection = document.getElementById('collection');
// let chances = 6;
// let strike = 0;
// for (let i = 0; i < wordLength; i++) {
//     let ele = document.createElement('li');
//     collection.append(ele);
//     ele.innerHTML = '__';
// }
// let input = document.getElementById('input');
// let check = '';
// input.addEventListener('change', () => {

//     let char = input.value.toLowerCase();

//     input.value = "";
//     if (word.includes(char)) {
//         check += char;
//         for (let i = 0; i < word.length; i++) {
//             if (word[i] === char) {
//                 collection.children[i].innerHTML = char;
//             }
//         }
//     } else {
//         let li = document.createElement('li');
//         document.getElementById('guessed').append(li);
//         li.innerHTML = char;
//         document.getElementById('length').innerHTML = --chances;
//         document.getElementById('image').src = `./images/strike-${++strike}.png`;
//     }

//     if (check === word) {
//         let h = document.createElement('h2');
//         document.getElementById('guessed').append(h);
//         h.innerHTML = "Congraulation You Won";
//     }
//     if (!chances) {
//         let h = document.createElement('h2');
//         document.getElementById('guessed').append(h);
//         h.innerHTML = "Game Over";
//     }

// });