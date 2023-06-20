let countElement = document.getElementById("counter-element")

let decrementButton = document.getElementById("decrement-button")

let count = 0

function increment() {
    count++;
    countElement.innerHTML = count;
}

function decrement() {
    if (count > 0) {
        count--;
        countElement.innerHTML = count;
    }
}

let previousEntryElement = document.getElementById("previous-entry-element")


function save () {
    previousEntryElement.innerHTML += `${count} - `
    console.log(count);
}

function reset () {
    count = 0;
    countElement.innerHTML = count;
}