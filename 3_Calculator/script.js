

const answerElement = document.getElementById("answer-element")


function add () {
    const firstNumber = document.getElementById("first-number").value
    const secondNumber = document.getElementById("second-number").value
    console.log("Added")
    console.log(firstNumber)
    const answer = firstNumber + secondNumber
    console.log(typeof(answer))
    answerElement.innerHTML = answer
}

function subtract () {
    const firstNumber = document.getElementById("first-number").value
    const secondNumber = document.getElementById("second-number").value
    const answer = firstNumber - secondNumber  
    answerElement.innerHTML = answer
}
function multiply () {
    const firstNumber = document.getElementById("first-number").value
    const secondNumber = document.getElementById("second-number").value
    const answer = firstNumber * secondNumber
    answerElement.innerHTML = answer
}

function divide () {
    const firstNumber = document.getElementById("first-number").value
    const secondNumber = document.getElementById("second-number").value
    const answer = firstNumber / secondNumber
    answerElement.innerHTML = answer
}