// const { default: axios } = require("axios");
// const { response } = require("express");

// footer form:
let signUpForm = document.querySelector("#email");
let signUpBtn = document.querySelector("#sign-up");
let signUpText = document.querySelector("#newsletter");

function emailSubmission() {
    let confirm = document.createElement("h6");
    confirm.textContent = "Thank you for signing up for our weekly newsletter!";
    signUpForm.remove()
    signUpText.remove()
    document.querySelector("#bottom").appendChild(confirm);
}
signUpBtn.addEventListener("click", emailSubmission);


// generate ideas:
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


// lists:
const wishList = document.querySelector("#wishlist-container");
const wishForm = document.querySelector("#add-wishlist");
const wishInput = document.querySelector("#wishlist-input");

const createWishList = arr => {
    wishList.innerHTML = ""
    let newWishList = document.createElement("ul")

    arr.forEach(wishListObj => {
        let { property } = wishListObj
        let wishListItem = document.createElement("li")

        wishListItem.textContent = property

        newWishList.appendChild(wishListItem)
    })
    wishList.appendChild(newWishList)
}

const getWishList = () => {
    axios.get("/route/wish_list")
    .then(response => {
        let { data } = response
        createWishList(data)
    })
}

const addToWishList = evt => {
    evt.preventDefault()
}

wishForm.addEventListener("submit", addToWishList);
getWishList();