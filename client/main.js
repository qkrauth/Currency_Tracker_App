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



// wish list:
const wishList = document.querySelector("#wishlist-container");
const wishForm = document.querySelector("#add-wishlist");
const wishInput = document.querySelector("#wishlist-input");

const createWishList = arr => {
    // innerHTML adds HTML into a portion of document without making a hard-code change
    wishList.innerHTML = ""
    let newWishList = document.createElement("ul")

    arr.forEach(wishListObj => {
        let { property, id } = wishListObj
        let wishListItem = document.createElement("li")

        wishListItem.textContent = property
        wishListItem.id = id
        wishListItem.addEventListener("click", deleteWishList)
        // wishListItem.classList.add("")// how to add class names to HTML created in JS

        newWishList.appendChild(wishListItem)
    })
    wishList.appendChild(newWishList)
}

const getWishList = () => {
    axios.get("/route/wishList")
    .then(response => {
        let { data } = response
        createWishList(data)
    })
}

const addToWishList = evt => {
    evt.preventDefault()
    let newWishProperty = {
        property: wishInput.value
    }

    axios.post("/route/wishList", newWishProperty)
    .then(response => {
        let { data } = response
        createWishList(data)
    })
}

const deleteWishList = evt => {
    evt.preventDefault()
    let propertyID = evt.target.id

    axios.delete(`/route/wishList/${propertyID}`)
    .then(response => {
        let { data } = response
        createWishList(data)
    })
}

wishForm.addEventListener("submit", addToWishList);
getWishList();

// collect list:
const collectList = document.querySelector("#collectlist-container");
const collectForm = document.querySelector("#add-collectlist");
const collectInput = document.querySelector("#collectlist-input");

const createCollectList = arr => {
    collectList.innerHTML = ""
    let newCollectList = document.createElement("ul")

    arr.forEach(collectListObj => {
        let { property, id } = collectListObj
        let collectListItem = document.createElement("li")

        collectListItem.textContent = property
        collectListItem.id = id
        collectListItem.addEventListener("click", deleteCollectedList)

        newCollectList.appendChild(collectListItem)
    })
    collectList.appendChild(newCollectList)
}

const getCollectList = () => {
    axios.get("/route/collectedList")
    .then(response => {
        let { data } = response
        createCollectList(data)
    })
}

const addToCollectList = evt => {
    evt.preventDefault()
    let newCollectProperty = {
        property: collectInput.value
    }

    axios.post("/route/collectedList", newCollectProperty)
    .then(response => {
        let { data } = response
        createCollectList(data)
    })
}

const deleteCollectedList = evt => {
    evt.preventDefault()
    let propertyID = evt.target.id

    axios.delete(`/route/collectedList/${propertyID}`)
    .then(response => {
        let { data } = response
        createCollectList(data)
    })
}

collectForm.addEventListener("submit", addToCollectList);
getCollectList()

