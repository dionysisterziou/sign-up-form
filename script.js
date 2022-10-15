const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password_confirmation');
let passwordValue = null;
let passwordConfirmationValue = null;

function check(event) {
    if (event.target.id === 'password') {
        passwordValue = event.target.value;
    } else {
        passwordConfirmationValue = event.target.value;
    }

    if (passwordValue === passwordConfirmationValue && passwordValue != '' && passwordConfirmationValue != '') {
        password.classList.toggle('error');
        passwordConfirmation.classList.toggle('error');
    } else {
        password.classList.add('error');
        passwordConfirmation.classList.add('error');
    }
}

password.addEventListener('keyup', check);
passwordConfirmation.addEventListener('keyup', check);
