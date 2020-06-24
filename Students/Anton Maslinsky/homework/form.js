function valideForm() {
    let regexpName = /^[a-zа-яё]+$/gi,
        regexpEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/,
        regexpPhone = /^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}(-\d{2}){2}$/,
        regexpMessage = /[a-zа-яё0-9]/;

    let name = document.getElementsByName('name')[0].value,
        email = document.getElementsByName('email')[0].value,
        phone = document.getElementsByName('phone')[0].value,
        message = document.getElementsByName('message')[0].value;

    if(regexpName.test(name) === true) {
        document.getElementById('name').className = 'done_val';
    } else {
        document.getElementById('name').className = 'error_val';
    }
    
    if(regexpPhone.test(phone) === true) {
        document.getElementById('phone').className = 'done_val';
    } else {
        document.getElementById('phone').className = 'error_val';
    }
    
    if(regexpEmail.test(email) === true) {
        document.getElementById('email').className = 'done_val';
    } else {
        document.getElementById('email').className = 'error_val';
    }
    
    if(regexpMessage.test(message) === true) {
        document.getElementById('message').className = 'done_val';
    } else {
        document.getElementById('message').className = 'error_val';
    }
}
document.querySelector('.button').addEventListener('click', valideForm);