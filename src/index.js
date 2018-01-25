import './index.scss';

let form = document.querySelector('.form');
let validateButton = form.querySelector('.form__submit');
let login = form.querySelector('.form__login');
let password = form.querySelector('.form__password');
let passwordConf = form.querySelector('.form__password-conf');
let message = form.querySelector('.form__message');
let fields = form.querySelectorAll('.field');

function generateError(text) {
    let error = document.createElement('span');
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
            let error = generateError('*');
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

// let form = document.querySelector('.cards');
// console.log('нашлась!', form);
//
// function showError(container, errorMessage) {
//     container.className = 'error';
//     let msgElem = document.createElement('span');
//     msgElem.className = "error-message";
//     msgElem.innerHTML = errorMessage;
//     container.appendChild(msgElem);
// }
//
// function resetError(container) {
//     container.className = '';
//     if (container.lastChild.className === "error-message") {
//         container.removeChild(container.lastChild);
//     }
// }
//
// function validate(form) {
//     let elems = form.elements;
//
//     resetError(elems.number.parentNode);
//     if (!elems.number.value) {
//         showError(elems.number.parentNode, ' * ');
//     }
//
//     resetError(elems.month.parentNode);
//     if (!elems.month.value) {
//         showError(elems.month.parentNode, ' * ');
//     }
//
//     resetError(elems.year.parentNode);
//     if (!elems.year.value) {
//         showError(elems.year.parentNode, ' * ');
//     }
//
//     resetError(elems.username.parentNode);
//     if (!elems.username.value) {
//         showError(elems.username.parentNode, ' * ');
//     }
//
//     resetError(elems.pass.parentNode);
//     if (!elems.pass.value) {
//         showError(elems.pass.parentNode, ' * ');
//     }
// }