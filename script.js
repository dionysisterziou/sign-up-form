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
console.log(sheet);

const check = (event) => {
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
            console.log(sheet);
            exists = true;
        }
    } else {
        sheet.cssRules[0].style.content = "";
        exists = false;
    }
}

password.addEventListener('keyup', check);
passwordConfirmation.addEventListener('keyup', check);
