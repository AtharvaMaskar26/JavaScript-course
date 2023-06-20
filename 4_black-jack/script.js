function randomNumberGenerator () {
    return Math.floor(Math.random() * 12) + 2 // Returns a random variable between 2 and 11
}
const cardElement = document.getElementById("card-element")
const sumElement = document.getElementById("sum-element")
let newCardButton = document.getElementById("new-card")

let firstCard = randomNumberGenerator();
console.log(firstCard)
let secondCard = randomNumberGenerator();
console.log(secondCard)
console.log(sum)

let hasBlackJack = false;
let isAlive = true;

let message = ""

function startGame () {
    cardElement.innerHTML = `Cards: ${firstCard} - ${secondCard}`

    const sum = firstCard + secondCard;
    sumElement.innerHTML = `Sum: ${sum}`;
    
    let messageElement = document.getElementById("message-element")

    if (sum <= 20) {
        message = "Do you want to draw a new card"
        messageElement.innerHTML = message
        newCardButton.classList.remove("d-none")
    }
    else if (sum === 21) {
        message = "You win"
        hasBlackJack = true;
        messageElement.innerHTML = message
    }
    else {
        message = "You are out of the game"
        isAlive = false
        messageElement.innerHTML = message
    }

    newCardButton.classList.add("d-none")
}

