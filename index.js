let form = document.querySelector('.form');
let validateButton = form.querySelector('.form__submit');
let login = form.querySelector('.form__login');
let password = form.querySelector('.form__password');
let passwordConf = form.querySelector('.form__password-conf');
let message = form.querySelector('.form__message');
let fields = form.querySelectorAll('.field');

function generateError(text) {
    let error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.innerHTML = text;
    return error;

}

function removeValidation() {
    let errors = form.querySelectorAll('.error');

    for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
    }
}

function checkField() {
    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            console.log('field is blanck', fields[i]);
            let error = generateError('Поле не заполнено');
            form[i].parentElement.insertBefore(error, fields[i]);
        }
    }
}

function checkPasswordMatch() {
    if (password.value !== passwordConf.value) {
        let error = generateError('пароли не совпадают');
        password.parentElement.insertBefore(error, password);
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    removeValidation();
    checkField();
    checkPasswordMatch();
});