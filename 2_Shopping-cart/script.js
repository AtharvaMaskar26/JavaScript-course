const errorElement = document.getElementById("error-element")

function purchaseButtonClicked() {
    let clasesToAdd = ['alert', 'alert-danger']
    errorElement.classList.add(...clasesToAdd)
    errorElement.innerHTML = "Something went wrong, please try again"
}