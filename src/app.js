//Global variables
let randomNumber = [];

function gameStart(){
    let generateInputElement = document.createElement('input');
    let gameElement = document.querySelector('.realGame');
    let paragraph = document.createElement('p');
    let checkButton = document.createElement('button');

    let isValidNumber = false
    
    while (isValidNumber === false) {
        randomNumber = Math.floor(1000 + Math.random() * 9000).toString().split('').map(Number)
        
        if(validateNumber(randomNumber)){
            isValidNumber = true;
        }
    }
    paragraph.innerText = 'Enter 4-digit number (numbers cannot be repeated)';
    checkButton.innerHTML = 'Check number'
    gameElement.appendChild(paragraph);
    gameElement.appendChild(generateInputElement);
    gameElement.appendChild(checkButton);

    checkButton.addEventListener('click',checkForCowsAndBulls);
}

function checkForCowsAndBulls(e){
    let enteredNumber = document.querySelector('input').value.split('').map((character) => Number(character));
    let resultElement = document.querySelector('.result');
    
    if (enteredNumber.length !== 4) {
        alert('Please enter 4-digit number');
        return;
    }

    let cows = 0;
    let bulls = 0;

    for (let i = 0; i < 4; i++) {
        if (randomNumber[i] === enteredNumber[i]) {
            bulls++;
        } else if (randomNumber.includes(enteredNumber[i]) && randomNumber[i] !== enteredNumber[i]){
            cows++;
        }
    }

    if (bulls === 4) {
        document.write(`Congratulations you guess the number ${randomNumber.join('')}`)
    }
    console.log(randomNumber);
    console.log(enteredNumber);

    let divResultElement = document.createElement('div');
    divResultElement.innerHTML = `${enteredNumber.join('')} has ${cows} cows and ${bulls} bulls`

    resultElement.appendChild(divResultElement);

    console.log(resultElement);
}

function validateNumber(arr){
    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }
        }
    }

    return true;
}