let signUpForm = document.querySelector("#email")
let signUpBtn = document.querySelector("#sign-up")

function emailSubmission() {
    let confirm = document.createElement("p");
    confirm.textContent = "Thank you for signing up for our weekly newsletter!";
    signUpForm.remove()
    document.querySelector("#bottom").appendChild(confirm);
}
signUpBtn.addEventListener("click", emailSubmission);