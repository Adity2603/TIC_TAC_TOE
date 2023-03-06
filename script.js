let turn = "X"
let isgameover = false
let reset = document.getElementById('reset')

const ChangeTurn = () => {

    return turn === "X" ? "0" : "X"
}

const CheckWin = () => {

    let boxText = document.getElementsByClassName('boxText')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText === boxText[e[2]].innerText) && boxText[e[0]].innerText !== "") {

            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Win the Game  "

            isgameover = true
            document.querySelector(".imageBox").getElementsByTagName('img')[0].style.width = "150px"

        }
    })

}

// GAME LOGIC 

let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element => {

    let boxText = element.querySelector(".boxText")
    element.addEventListener('click', () => {
        if (!isgameover) {
            if (boxText.innerText === '') {
                boxText.innerText = turn;

                turn = ChangeTurn()
                CheckWin();
                if (!isgameover) {
                    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn
                }
            }
        }
        else {
            alert("Sorry the game is Over ")
        }
    })


})

reset.addEventListener('click', () => {
    let boxText = document.querySelectorAll(".boxText")
    Array.from(boxText).forEach((element) => {
        element.innerText = ""

    })
    turn = "X"
    isgameover = false
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn
    document.querySelector(".imageBox").getElementsByTagName('img')[0].style.width = "0px"

})