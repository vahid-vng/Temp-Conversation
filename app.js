const convertButton = document.querySelector(".convertButton");
const resetButton = document.querySelector(".resetButton");
const changeButton = document.querySelector(".changeButton");
let cElem = document.querySelector(".C");
let fElem = document.querySelector(".F");
let convertInput = document.querySelector(".convertor");
let pElem = document.querySelector(".result");
let sum = null;

let convertHandler = () => {
  if (cElem.innerHTML === "°C") {
    sum = convertInput.value * 1.8 + 32;
    pElem.innerHTML = `${sum} °F`;
  } else {
    sum = ((convertInput.value - 32) * 5) / 9;
    pElem.innerHTML = `${sum.toFixed(3)} °C`;
  }
};

let resetHandler = () => {
  pElem.innerHTML = "";
  convertInput.value = "";
};

let changeHandler = () => {
  if (cElem.innerHTML === "°C") {
    cElem.innerHTML = "°F";
    fElem.innerHTML = "°C";
    convertInput.setAttribute("placeholder", "°F");
    window.document.title = "VNG | Js | °F to °C";
  } else {
    cElem.innerHTML = "°C";
    fElem.innerHTML = "°F";
    convertInput.setAttribute("placeholder", "°C");
    window.document.title = "VNG | Js | °C to °F";
  }
};

convertButton.addEventListener("click", convertHandler);
resetButton.addEventListener("click", resetHandler);
changeButton.addEventListener("click", changeHandler);
