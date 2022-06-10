const contactEmail = document.querySelector ('#contact-email')
const contactName = document.querySelector ('#contact-name')
const contactForm = document.querySelector ('form')
const textarea = document.querySelector ('#textarea-contact')
const submitButton = document.querySelector ('#submit-button')

const regex = /\S+@\S+\.\S+/;

const contactNameError = document.querySelector ('#contact-name-error')
const contactEmailError = document.querySelector ('#contact-email-error')
const textareaError = document.querySelector ('#textarea-error')

const formMessage = document.querySelector ('#form-confirmation')

contactEmail.addEventListener('input', validate)
contactName.addEventListener('input', validate)
textarea.addEventListener('input', validate)


contactForm.addEventListener("submit", function (validation) {
    validation.preventDefault();

    confirm("Submitted")
})

function validate (validation) {
    let target = validation.target.id;

    console.log(target)

        if (checkLength(contactName.value, 4)) {
            contactName.style.color = ("black")
        }
        else {
            contactName.style.color = ("green")
        }

        if (checkLength(textarea.value, 29)) {
            textarea.style.color = ("black")
        }
        else {
            textarea.style.color = ("green")
        }

        if (regex.test(contactEmail.value)) {
            contactEmail.style.color = ("green")  
          }
          else {
              contactEmail.style.color = ("black")
          }
}

function displayErrors () {
    event.preventDefault ()
    
    if (regex.test(contactEmail.value)) {
        contactEmailError.style.display = "none"
    } else {
        contactEmailError.style.display = "block"
    }

    if (checkLength(contactName.value, 4)) {
        contactNameError.style.display = "block"
    } else {
        contactNameError.style.display = "none"
    }

    if (checkLength(textarea.value, 29)) {
        textareaError.style.display = "block"
    } else {
        textareaError.style.display = "none"
    }
 
}

contactForm.addEventListener ("submit", displayErrors);

function checkLength(value, len) {
    if (value.trim().length <= len) {
        return true;
    } else {
        return false;
    }
}

function formConfirmation () {
    console.log(formConfirmation)

    if (displayErrors && validate){
        formMessage.style.display = 'block'
    } else {
        formMessage.style.display = 'none'
    }
}

submitButton.addEventListener('click', formConfirmation) 


function closeMessage () {
    formMessage.style.display = 'none'
}

window.addEventListener ('mouseup', closeMessage)