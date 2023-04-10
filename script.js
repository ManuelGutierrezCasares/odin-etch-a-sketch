const container = document.querySelector('.container');
let input = document.querySelector('#user-input');
let gridQuantity = Number(prompt('Enter the number of squares per side: '));
let instructions = document.querySelector('#instructions');

let square = document.querySelectorAll('.square')
square.forEach(e=>e.addEventListener('mouseover', paintSquares));
square.forEach(e=>e.addEventListener('touchmove', paintSquares));

const size = document.querySelector('#size');
size.addEventListener('click',enhanceSize);

const reset = document.querySelector('#reset');
reset.addEventListener('click',resetBox);

let output = document.querySelector('#output');
output.textContent=`${gridQuantity}x${gridQuantity}`;
input.value=`${gridQuantity}`;

input.addEventListener('input',e=>output.textContent=`${e.target.value}x${e.target.value}`);
enhanceSize();

function createSquares(squareAmount){
    for(let i=1;i<=squareAmount;i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('square');
        container.appendChild(newDiv);
    }
}


function removeSquares(){
        square.forEach(e=>container.removeChild(e));
};



function paintSquares(e){
    e.target.style.background = 'black';
}



function enhanceSize(){
    if(document.querySelector('.square')){
        removeSquares();
    }
    instructions.textContent='';
    gridQuantity = Math.pow(input.value,2);
    createSquares(gridQuantity);
    square = document.querySelectorAll('.square')
    let pixels = getPixels(gridQuantity);
    square.forEach(e=>e.style.flex=`1 1 ${pixels}px`);
    square.forEach(e=>e.addEventListener('mouseover', paintSquares));
    square.forEach(e=>e.addEventListener('touchmove', paintSquares));
}


function resetBox(){
    if(document.querySelector('.square')){
        removeSquares();
    }
    input.value = 1;
    output.textContent = '';
    instructions.textContent = `Select Size and Click "Adjust Size" to begin`;
}


function getPixels(squares){
    return 400/Math.sqrt(squares);
}