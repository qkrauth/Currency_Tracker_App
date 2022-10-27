let signUpForm = document.querySelector("#email");
let signUpBtn = document.querySelector("#sign-up");
let signUpText = document.querySelector("#newsletter");

function emailSubmission() {
    let confirm = document.createElement("p");
    confirm.textContent = "Thank you for signing up for our weekly newsletter!";
    signUpForm.remove()
    signUpText.remove()
    document.querySelector("#bottom").appendChild(confirm);
}
signUpBtn.addEventListener("click", emailSubmission);


let currencyData = [
    "United States Dollar",
    "Euro",
    "British Pound Sterling",
    "Canadian Dollar",
    "Swiss Franc",
    "Austrailian Dollar",
    "Japanese Yen",
    "New Zealand Dollar",
    "South African Rand",
    "Indian Rupee",
    "Albanian Lek",
    "Kuwaiti Dinar",
    "Russian Ruble",
    "Danish Krone",
    "Mexican Peso",
    "Swedish Krona",
    "Brunei Dollar"
];

let generateBtn = document.querySelector("#generate");
let generateOutput = document.querySelector("#output");

function randomizer() {
    let selectItem = currencyData[Math.floor(Math.random() * currencyData.length)]
    generateOutput.innerHTML = selectItem;
}

generateBtn.addEventListener("click", randomizer);
