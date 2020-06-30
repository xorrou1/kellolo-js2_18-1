class Check {
    constructor() {
        this.inputs = document.querySelectorAll('input, #inputText')
        this.inputName = document.querySelector('#inputName');
        this.inputNumber = document.querySelector('#inputNumber');
        this.inputEmail = document.querySelector('#inputEmail');
        this.inputText = document.querySelector('#inputText')
        this._init();
    }

    _init() {
        this._removeErrs();
        this._inputsCheckOnEmpty();
        this._inputNameCheck();
        this._inputNumberCheck();
        this._inputEmailCheck();
    }

    _removeErrs() {
        let clearErrs = document.querySelectorAll('.validationError');
        if (clearErrs) {
            clearErrs.forEach((err) => err.remove());
            clearErrs = document.querySelectorAll('.validError');
            clearErrs.forEach((err) => { err.classList.remove('validError') });
        }
    }

    _inputsCheckOnEmpty() {
        this.inputs.forEach((el) => {
            if (el.value == '' && !el.parentNode.querySelector('.validationError')) {


                this._renderErr(el, `<span class="validationError">Заполните это поле</span>`)
            }
        })
    }

    _inputNameCheck() {
        if (this.inputName.value.match(/\d/)) {
            this._renderErr(this.inputName, `<span class="validationError">Имя должно содержать только буквы</span>`)
        }
    }

    _inputNumberCheck() {
        if (!this.inputNumber.value.match(/\+7\(\d{3}\)\d{3}\-\d{4}$/) &&
            !this.inputNumber.value.match(/\+7\d{10}$/) && 
            !this.inputNumber.parentNode.querySelector('.validationError')) {

            this._renderErr(this.inputNumber, `<span class="validationError">Телефон должен иметь вид +7(000)000-0000</span>`)
        }
    }

    _inputEmailCheck() {
        if (!this.inputEmail.value.match(/[A-Za-z0-9]\@\D{2,5}\.\D{2,3}$/) &&
            !this.inputEmail.parentNode.querySelector('.validationError')) {

            this._renderErr(this.inputEmail, `<span class="validationError">Email адрес должен иметь вид mymail@mail.ru</span>`)
        }
    }

    _renderErr(input, html) {
        input.classList = 'validError';
        input.insertAdjacentHTML('afterend', html);
    }
}

document.querySelector('#submit').addEventListener('click', () => {
    let checkInputs = new Check();
})