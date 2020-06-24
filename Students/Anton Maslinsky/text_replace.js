'use strict';

let sourceText = document.querySelector('.text');
let replaceAllPoints = document.querySelector('.replaceAll');
let replaceQuotationMarks = document.querySelector('.returnApostrophe');

replaceAllPoints.addEventListener('click', () => {
    sourceText.textContent = sourceText.textContent.replace(/'/g, '\"');
})

replaceQuotationMarks.addEventListener('click', () => {
    let sourceText2 = document.querySelector('.text2');
    sourceText2.textContent = sourceText2.textContent.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2');
})