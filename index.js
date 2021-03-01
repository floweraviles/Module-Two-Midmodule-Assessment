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
const historyTitle = document.querySelector("#history-title")


const diceCount = (e) => {
    e.preventDefault();
    dicePara.textContent = "";
    sumPara.textContent = "Sum = ";
    sum = 0
    const numberInput = document.querySelector("#dice-length-input")
    for (let i = 0; i < numberInput.valueAsNumber; i++) {
        const randIdx = Math.floor(Math.random() * dice.length)
        dicePara.textContent += dice[randIdx]
        sum += randIdx+ 1
        
    }
    sumPara.textContent = "Sum = " + sum
    historyTitle.textContent = "History"
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = `${dicePara.textContent} = ${sum}`
    ul.appendChild(li);
}

lengthForm.addEventListener("submit", diceCount )