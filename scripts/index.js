import PassGen, { syncValue } from "./passgen.js";

const uppercase = document.getElementById('uppercase');
const symbols = document.getElementById('symbols');
const number = document.getElementById('number');
const range = document.getElementById('range');
const rangeNumber = document.getElementById('rangeNumber');
const submitButton = document.getElementById('submitButton');
const password = document.getElementById('password');
const copyButton = document.getElementById('copyButton');

range.addEventListener('input', e => syncValue(range, rangeNumber));
rangeNumber.addEventListener('input', e => syncValue(rangeNumber, range));
submitButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', () => {
    password.select();
    document.execCommand('copy');
    copyButton.innerText = "Copied"
});

function generatePassword() {
    password.value = new PassGen(
        range.value,
        number.checked,
        symbols.checked,
        uppercase.checked
    ).getPassword();
    copyButton.innerText = "Copy?"
}