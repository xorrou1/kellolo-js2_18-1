class Validator {
    constructor(form) {
        this.patterns = {
            name: /^[a-za-яё]+$/i,
            tel: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
            email: /^[\w\.-]+@\w+\.[a-z]{2,4}$/i
        };
        this.errors = {
            name: 'Имя введено некорректно',
            tel: 'Введите телефон в формате "+7000 000 00 00"',
            email: 'Проверьте правильность ввода',
        };

        this.errorClass = 'error-msg';
        this.form = form;
        this.valid = false;
        this._validateForm();
    }

    _validateForm() {
        let errors = [...document.querySelector(this.form).querySelectorAll(`.${this.errorClass}`)]

        for (let err of errors) {
            err.remove();
        }

        let formFields = [...document.querySelector(this.form).getElementsByTagName('input')];
        console.log(formFields);

        for (let field of formFields) {
            this._validate(field)
        }

        if (![...document.querySelector(this.form).querySelectorAll('.err__field')].length) {
            this.valid = true;
        }
    }

    _validate(field) {
        if (this.patterns[field.name]) {
            if (!this.patterns[field.name].test(field.value)) {
                field.classList.add('err__field');
                this._addErrMessage(field);
                this._watchField(field);
            }
        }
    }


    _addErrMessage(field) {
        let error = `<div class="${this.errorClass}">${this.errors[field.name]}</div>`;
        field.parentNode.insertAdjacentHTML('beforeend', error);
    }


    _watchField(field) {
        field.addEventListener('input', () => {

            let error = field.parentNode.querySelector(`.${this.errorClass}`)

            if (this.patterns[field.name].test(field.value)) {
                field.classList.add('valid__field');
                field.classList.remove('err__field');
                if (error) {
                    error.remove()
                }
            } else {
                field.classList.remove('valid__field');
                field.classList.add('err__field');
                if (!error) {
                    this._addErrMessage(field);
                }
            }
        })

    }

}


