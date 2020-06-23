'use strict';

let textBefore = document.getElementById('TextValidRegExp');
let textAfter = document.getElementById('TextValidRegExp');

let changeText = () => {
    let str = textBefore.textContent;
    console.log(str);

    textAfter.innerText = str.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2');

};