const container = document.querySelector('.container');
let gridQuantity = 64;

//console.log(container)

function createSquares(squareAmount){
    for(let i=1;i<=squareAmount;i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('square');
        container.appendChild(newDiv);
    }
}
createSquares(gridQuantity);

function removeSquares(){
    //for(let i=1;i<=quantity;i++){
        square.forEach(e=>container.removeChild(e));
    //}
};


let square = document.querySelectorAll('.square')
square.forEach(e=>e.addEventListener('mouseover', paintSquares));

function paintSquares(e){
    console.log(e.target.style.background);
    e.target.style.background = 'black';
}

const size = document.querySelector('#size');
size.addEventListener('click',enhanceSize);

function enhanceSize(){
    removeSquares();
    gridQuantity = 9;
    createSquares(gridQuantity);
    square = document.querySelectorAll('.square')
    square.forEach(e=>e.style.flex='1 1 133px');
    square.forEach(e=>e.addEventListener('mouseover', paintSquares));
}

const reset = document.querySelector('#reset');
reset.addEventListener('click',resetBox);
function resetBox(){
    removeSquares();
    gridQuantity = 64;
    createSquares(gridQuantity);
    square = document.querySelectorAll('.square')
    square.forEach(e=>e.style.flex='1 1 50px');
    square.forEach(e=>e.addEventListener('mouseover', paintSquares));
}