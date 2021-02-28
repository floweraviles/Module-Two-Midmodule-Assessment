const dice = 
   [ '⚀',
     '⚁',
     '⚂',
     '⚃',
     '⚄',
     '⚅', ]

const lengthForm = document.querySelector("#length-form")
const dicePara = document.querySelector("#dice-para")
const sumPara = document.querySelector("#sum-para")
const diceCount = (e) => {
    e.preventDefault();
    const numberInput = document.querySelector("#dice-length-input")
    for (let i = 0; i < numberInput.valueAsNumber; i++) {
        const randIdx = Math.floor(Math.random() * dice.length)
        dicePara.textContent += dice[randIdx]
      
    }
}

// const diceSum = (e) => {
//     e.preventDefault();
//     const dicePara =document.querySelector("#dice-para")
//     let die = {'⚀': 1, '⚁': 2,'⚂': 3,'⚃': 4,'⚄': 5,'⚅': 6,}
//     for (let i =0; i < dicePara.length; i++) {
//         if 
//     }
// }
const saveDiceCount = (e) => {
    e.preventDefault();
   
    const ul = document.querySelector("ul");
    const li = document.createElement("li"); 
    li.textContent = dicePara.textContent;

    ul.appendChild(li);

    dicePara.textContent = dicePara.textContent += dice[randIdx];
    sumPara.textContent = " ";
}

lengthForm.addEventListener("submit", diceCount, saveDiceCount)