const input = document.getElementById("num-input");
const result = document.getElementById("result");
const xpDisplay = document.getElementById("xp");
let xp = 0;

function handleClickBtn(el) {
    const val = el.innerText;
    input.value += val;
}

function calculate() {
    try {
        result.value = eval(input.value);
        xp += 10;
        xpDisplay.innerText = `XP: ${xp}`;
    } catch (e) {
        result.value = "Error";
    }
}

function reset() {
    input.value = "";
    result.value = "";
}

function backspace() {
    input.value = input.value.slice(0, -1);
}