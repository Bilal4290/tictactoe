const resultContainer = document.querySelector('.resultContainer')
const newBtn = document.querySelector('#newBtn')
const title = document.querySelector('#title')
const game = document.querySelector('#game')
const boxes = document.querySelectorAll('.box')
const resetBtn = document.querySelector('#resetBtn')


let currentPlayer = 'X';
let count = 0;

const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const gameStart = (e) => {
      if(e.target.id !== game){
         if(e.target.innerText === ''){
             e.target.innerText = currentPlayer
             count++
             checkWinner()
             currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
         }

         if(count === 9){
            title.innerText = `Match Drawn!!`
            boxes.forEach((item) => {
                item.classList.add('redColorClass')
            })
         }
      }
}

game.addEventListener('click',gameStart)

const checkWinner = () => {
    winningConditions.forEach((item) => {
        const pos0 = boxes[item[0]].innerText
        const pos1 = boxes[item[1]].innerText
        const pos2 = boxes[item[2]].innerText

        if(pos0 !== '' && pos1 !== '' && pos2 !== ''){
             if(pos0 === pos1 && pos1 === pos2){
                 count = 0
                 boxes[item[0]].classList.add('greenColorClass')
                 boxes[item[1]].classList.add('greenColorClass')
                 boxes[item[2]].classList.add('greenColorClass')
                 title.innerText = `Winner is ${pos1} !!`
                 game.removeEventListener('click', gameStart)
                 resultContainer.classList.remove('hide')
             }
        }
    })
}


const reset = () => {
    currentPlayer = 'X'
    count = 0
    title.innerText = 'Tic Tac Toe'
    boxes.forEach((item) => {
        item.innerText = ''
        item.classList.remove('redColorClass')
        item.classList.remove('greenColorClass')
    })

    game.addEventListener('click', gameStart)
    resultContainer.classList.add('hide')
}


resetBtn.addEventListener('click', reset)
newBtn.addEventListener('click', reset)