
class Form {
    constructor (textValue) {
        this.value = textValue;
        this._render();
    }

    _render() {
        return this.value;
    }   
}

function correction(text) {

    let value = text.value;

    value = value.replace(/'/gm, '"');
    value = value.replace(/\b\"\b/gm, '\''); 

     return value;
}
// JSON, загружаем текст из стороннего источника, заодно повторяем асинхрон
document.getElementById('input_load').onclick = function () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://raw.githubusercontent.com/Sergey-TR/testrepo/master/text.json', true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            console.log('Ошибка', xhr.status, xhr.statusText);
        } else {
            let fileJson = JSON.parse(xhr.responseText);

// Нужно было здесь создавать класс или нет

            let formNew = new Form(fileJson.text);
            document.getElementById('text').value = formNew.value;
        }
    }
};

//Clicking submit
document.getElementById('form').onsubmit = function (e) {
    e.preventDefault();
    let textArea = document.getElementById('text');
    let formNew = new Form(textArea.value);
    textArea.value = correction(formNew);
};

