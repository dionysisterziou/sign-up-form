const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password_confirmation');
const passwordLabel = document.querySelector('label[for="password"]');
const sheet = document.styleSheets[1];

// The text under password input
let exists = true;
let passwordValue = null;
let passwordConfirmationValue = null;

// Insert text under password input
sheet.insertRule('label[for="password"]::after { content: "* Passwords do not match"; color: red; font-size: 0.8rem }');

function check(event) {
    if (event.target.id === 'password') {
        passwordValue = event.target.value;
    } else {
        passwordConfirmationValue = event.target.value;
    }

    if (passwordValue === passwordConfirmationValue && passwordValue != '' && passwordConfirmationValue != '') {
        password.classList.remove('error');
        passwordConfirmation.classList.remove('error');
    } else {
        password.classList.add('error');
        passwordConfirmation.classList.add('error');
    }

    if (password.classList.contains('error')) {
        if (!exists) {
            sheet.insertRule('label[for="password"]::after { content: "* Passwords do not match"; color: red; font-size: 0.8rem }');
            exists = true;
        }
    } else {
        sheet.deleteRule('[for="password"]::after');
        exists = false;
    }
}

password.addEventListener('keyup', check);
passwordConfirmation.addEventListener('keyup', check);
