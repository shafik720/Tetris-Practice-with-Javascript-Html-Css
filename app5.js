let grid = Array.from(document.querySelectorAll('.tetris-parent div')),
width = 10,
currentRotation  = 0,
currentPosition = 4;


// lTetromino 
const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
  ]

  const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1]
  ]

  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
  ]

  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
  ]

  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
  ]

let nextTetromino = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];
let random = Math.floor(Math.random() * nextTetromino.length);
let current = nextTetromino[random][currentRotation];

let x = setInterval(moveDown,300)

function moveDown(){
    unDraw();
    currentPosition += width;
    draw();
}

document.addEventListener('keydown', control);

function control(e){
    if(e.keyCode == 37){
        moveLeft();
    }
}

function draw(){
    current.forEach(index=>grid[index + currentPosition].classList.add('blue'));
}

function unDraw(){
    current.forEach(index=>grid[currentPosition + index].classList.remove('blue'));
}
draw();

function moveLeft(){
    unDraw();
    let isLeft = current.some(index=>(index + currentPosition) % width == 0 );
    if(!isLeft){
        currentPosition -= 1;
    }
    if(current.some(index=>grid[index + currentPosition].classList.contains('taken'))){
        currentPosition += 1;
    }
    draw();
}