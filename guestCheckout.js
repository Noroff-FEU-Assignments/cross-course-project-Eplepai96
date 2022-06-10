const firstName = document.querySelector ('#first-name')
const lastName = document.querySelector ('#last-name')
const cardNumber = document.querySelector ('#card-number')
const CVV = document.querySelector ('#cvv')
const submitButton = document.querySelector ('#submit')
const form = document.querySelector ('form')

const firstNameError = document.querySelector ('.firstname-error')
const lastNameError = document.querySelector ('.lastname-error')
const cardNumberError = document.querySelector ('.cardnumber-error')
const cvvError = document.querySelector ('.cvv-error')

firstName.addEventListener('input', validate)
lastName.addEventListener('input', validate)
cardNumber.addEventListener('input', validate)
CVV.addEventListener('input', validate)

form.addEventListener("submit", function (validation) {
    validation.preventDefault();

    confirm("Submitted")
})

function validate (validation) {
    let target = validation.target.id;

    console.log(target)

        if (checkLength(firstName.value, 3)) {
            firstName.style.color = ("black")
        }
        else {
            firstName.style.color = ("green")
        }

        if (checkLength(lastName.value, 4)) {
            lastName.style.color = ("black")
        }
        else {
            lastName.style.color = ("green")
        }

        if (isNaN(cardNumber.value) || cardNumber.value.length >= 17) {
            cardNumber.style.color = ("red")
        }
        else if (checkLength(cardNumber.value, 15)) {
            cardNumber.style.color = ("black")
        }
        
        else {
            cardNumber.style.color = ("green")
        }

        if (isNaN(CVV.value) || CVV.value.length >= 4) {
            CVV.style.color = ("red");
        }
        if (checkLength(CVV.value, 2)) {
            CVV.style.color = ("black")
        }
        else {
            CVV.style.color = ("green")
        }
}

function displayErrors () {
    event.preventDefault ()
    if (checkLength(firstName.value, 3)) {
        firstNameError.style.display = "none"
    } else {
        firstNameError.style.display = "block"
    }

    if (checkLength(lastName.value, 4)) {
        lastNameError.style.display = "none"
    } else {
        lastNameError.style.display = "block"
    }

    if (checkLength(cardNumberError.value, 15)) {
        cardNumberError.style.display = "none"
    } else {
        cardNumberError.style.display = "block"
    }

    if (checkLength(CVV.value, 2)) {
        cvvError.style.display = "none"
    } else {
        cvvError.style.display = "block"
    }
}

submitButton.addEventListener ("submit", displayErrors)

function checkLength(value, len) {
    if (value.trim().length <= len) {
        return true;
    } else {
        return false;
    }
}