let text = document.querySelector('.text');

document.querySelector('.edit').addEventListener('click', () => {
    let editedText = new Render();
})

class Render {
    constructor() {
        this._init();
    }

    _init() {
        this.editText();
        this._render();
    }

    editText() {
        this.newText = text.innerText.replace(/( ')/g, ' "');
        this.newText = this.newText.replace(/(' )/g, '" ');
    }

    _render() {
        text.innerText = this.newText;
    }
}