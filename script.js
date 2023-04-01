let result = document.getElementById("result");

function insertValue(value) {
	result.value += value;
}

function allClear() {
	result.value = "";
}

function calculateResult() {
	result.value = eval(result.value);
}
