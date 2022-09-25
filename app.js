let label = document.querySelector(".convertLabel");
let input = document.querySelector(".convertor");
let result = document.querySelector(".result");
let convertButton = document.querySelector(".convertButton");
let resetButton = document.querySelector(".resetButton");
let changeButton = document.querySelector(".changeButton");

let firstValue = document.querySelector(".fVal");
let secondValue = document.querySelector(".sVal");

let sum = null;

changeButton.addEventListener("click", () => {
  if (firstValue.innerHTML === "°C") {
    result.innerHTML = "";
    input.value = "";
    document.title = "VNG °F to °C";
    firstValue.innerHTML = "°F";
    secondValue.innerHTML = "°C";
    input.setAttribute("placeholder", "°F");
  } else if (firstValue.innerHTML === "°F") {
    result.innerHTML = "";
    input.value = "";
    document.title = "VNG °C to °F";
    firstValue.innerHTML = "°C";
    secondValue.innerHTML = "°F";
    input.setAttribute("placeholder", "°C");
  }
});
resetButton.addEventListener("click", () => {
  result.innerHTML = "";
  input.value = "";
});
convertButton.addEventListener("click", () => {
  let inputValue = input.value;
  if (firstValue.innerHTML === "°C") {
    sum = inputValue * 1.8 + 32;
    result.innerHTML = `${sum} °F`;
  } else if (firstValue.innerHTML === "°F") {
    sum = ((inputValue - 32) * 5) / 9;
    result.innerHTML = `${sum} °C`;
  }
});
