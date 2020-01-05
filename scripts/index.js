import PassGen, { syncValue } from "./passgen.js";

const uppercase = document.getElementById('uppercase');
const symbols = document.getElementById('symbols');
const number = document.getElementById('number');
const range = document.getElementById('range');
const range_number = document.getElementById('rangeNumber');
const submit_boton = document.getElementById('submitButton');
const password = document.getElementById('password');

range.addEventListener('input', e => syncValue(range, range_number));
range_number.addEventListener('input', e => syncValue(range_number, range));
submit_boton.addEventListener('click', generatePassword);

function generatePassword() {
    password.value = new PassGen(
        range.value,
        number.checked,
        symbols.checked,
        uppercase.checked
    ).getPassword();
}