function gameStart(){
    let generatedNumberElement = document.createElement('div');
    let generateInputElement = document.createElement('input');
    let gameElement = document.querySelector('.realGame');
    let paragraph = document.createElement('p');
    let checkButton = document.createElement('button');

    let isValidNumber = false
    let seq = [];

    while (isValidNumber === false) {
        seq = Math.floor(1000 + Math.random() * 9000).toString().split('')
        
        if(validateNumber(seq)){
            isValidNumber = true;
        }
    }
    paragraph.innerText = 'Enter 4-digit number (numbers cannot be repeated)';
    checkButton.innerHTML = 'Check number'
    gameElement.appendChild(paragraph);
    gameElement.appendChild(generateInputElement);
    gameElement.appendChild(checkButton);

    console.log(seq);
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