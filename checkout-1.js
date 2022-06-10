const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const pass = document.querySelector("#pass")

const regex = /\S+@\S+\.\S+/;

email.addEventListener('input', validate)
password.addEventListener('input', validate)

form.addEventListener("submit", function (validation) {
    validation.preventDefault();

    alert("Submitted")
})

function validate (validation) {
    let target = validation.target.id;

    console.log(target)

        if (checkLength(password.value, 4)) {
            password.style.color = ("black")
        }
        else {
            password.style.color = ("green")
        }

        if (target === email) {
        if (regex.test(email.value)) {
          email.style.color = ("green")  
        }
        else {
            password.style.color = ("red")
        }
    }
}




//if (checkLength(email.value, 4)) {
//     email.style.color = ("red")
// }
// else {
//     email.style.color = ("green")
// }

// if (target === password) {
//     if (regex.test(email.value)) {
        
// }

function checkLength(value, len) {
    if (value.trim().length <= len) {
        return true;
    } else {
        return false;
    }
}