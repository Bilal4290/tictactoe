const title = document.querySelector('#title')
const game = document.querySelector('#game')
const boxes = document.querySelectorAll('.box')
const resetBtn = document.querySelector('#resetBtn')
const resultContainer = document.querySelector('.resultContainer')
const newBtn = document.querySelector('#newBtn')


let currentPlayer = 'X'
let count = 0

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

const startGame = (e) => {
    if(e.target.id !== 'game'){
        if(e.target.innerText === ''){
            e.target.innerText = currentPlayer
            count++
            checkWinner()
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
        }

        if(count === 9){
            title.innerText = 'Match Drawn!!'
            boxes.forEach((item) => {
                item.classList.add('redColorClass')
            })
        }
    }
}


game.addEventListener('click',startGame)




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
                title.innerText = `Winner is ${pos0} !!`
                game.removeEventListener('click', startGame)

                resultContainer.classList.remove('hide')
              }
          }
    })
}

const reset = () => {

    count = 0

    currentPlayer = 'X'

    title.innerText = 'Tic Tac Toe'

    boxes.forEach((item) => {
        item.innerText = ''
        item.classList.remove('greenColorClass')
        item.classList.remove('redColorClass')
    })

    game.addEventListener('click',startGame)

    resultContainer.classList.add('hide')
}


resetBtn.addEventListener('click',reset)
newBtn.addEventListener('click',reset)

























// const h1 = document.querySelector('h1')
// const boxes = document.querySelectorAll('.box')
// const resetBtn = document.querySelector('#resetBtn')
// const resultContainer = document.querySelector('.resultContainer')
// const newBtn = document.querySelector('#newBtn')
// const result = document.querySelector('#result')

// let turnO = true

// const winningConditions = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6],
// ]

// boxes.forEach((box) => {

//     box.addEventListener('click',() => {
//         if(turnO){
//            box.innerText = 'O'
//            turnO = false
//         }else{
//             box.innerText = 'X'
//             turnO = true
//         }
//         box.disabled = true

//         checkWinner()
//     })

// })

// const checkWinner = () => {
//     for (let pattern of winningConditions) {
//         let pos0Val = boxes[pattern[0]].innerText;
//         let pos1Val = boxes[pattern[1]].innerText;
//         let pos2Val = boxes[pattern[2]].innerText;

//          if(pos0Val !== '' && pos1Val !== '' && pos2Val !== ''){
//              if(pos0Val === pos1Val && pos1Val === pos2Val){
//                 boxes[pattern[0]].classList.add('greenColorClass')
//                 boxes[pattern[1]].classList.add('greenColorClass')
//                 boxes[pattern[2]].classList.add('greenColorClass')
//                 showWinner(pos0Val)
//              }
//          }
//     }
// }

// const showWinner = (winner) => {
//      result.innerText = `Winner is ${winner}`
//      resultContainer.classList.remove('hide')
//      disabledBtns()
// }

// const disabledBtns = () => {
//     boxes.forEach((box) => {
//         box.disabled = true
//     })
// }

// const enabledBtns = () => {
//     boxes.forEach((box) => {
//         box.disabled = false
//         box.innerText = ''
//         box.classList.remove('greenColorClass')
//     })
// }

// const resetGame = () => {
//     turnO = true;
//     enabledBtns()
//     resultContainer.classList.add('hide')

// }

// newBtn.addEventListener('click', resetGame)
// resetBtn.addEventListener('click', resetGame)