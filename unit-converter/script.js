const categoryTabs = document.querySelectorAll(".tab-item");
const unitGroups = document.querySelectorAll(".unit-group");
const unitToGroups = document.querySelectorAll(".unit-to-group");
const unitFrom = document.getElementById("unit-from");
const unitTo = document.getElementById("unit-to");
const inputElement = document.getElementById("input-value");
const convertBtn = document.getElementById("convert-btn");
const resetBtn = document.getElementById("reset-btn");
const resultSection = document.getElementById("result-section");
const resultDisplay = document.getElementById("result-display");

let currentCategory = "length";

categoryTabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    categoryTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    currentCategory = tab.textContent.toLowerCase();
    const inputLabel = document.querySelector(".input-group label");
    inputLabel.textContent = `Enter the ${currentCategory} to convert`;

    unitGroups.forEach((group) => group.classList.remove("active"));
    unitGroups[i].classList.add("active");
    unitGroups[i].firstElementChild.selected = true;

    unitToGroups.forEach((group) => group.classList.remove("active"));
    unitToGroups[i].classList.add("active");
    unitToGroups[i].firstElementChild.selected = true;

    resultSection.style.display = "none";
  });
});

const lengthConversion = (value, from, to) => {
  const units = {
    millimeter: 0.001,
    centimeter: 0.01,
    meter: 1,
    kilometer: 1000,
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1609.34,
  };
  return (value * units[from]) / units[to];
};

const weightConversion = (value, from, to) => {
  const units = {
    milligram: 0.001,
    gram: 1,
    kilogram: 1000,
    ounce: 28.3495,
    pound: 453.592,
  };
  return (value * units[from]) / units[to];
};

const temperatureConversion = (value, from, to) => {
  let celsius;
  if (from === "celsius") celsius = value;
  else if (from === "fahrenheit") celsius = ((value - 32) * 5) / 9;
  else if (from === "kelvin") celsius = value - 273.15;

  if (to === "celsius") return celsius;
  else if (to === "fahrenheit") return (celsius * 9) / 5 + 32;
  else if (to === "kelvin") return celsius + 273.15;
  return value;
};

convertBtn.addEventListener("click", () => {
  const val = parseFloat(inputElement.value);
  const from = unitFrom.value;
  const to = unitTo.value;

  if (isNaN(val)) {
    alert("Please enter a valid number");
    return;
  }

  let result;
  if (currentCategory === "length") {
    result = lengthConversion(val, from, to);
  } else if (currentCategory === "weight") {
    result = weightConversion(val, from, to);
  } else if (currentCategory === "temperature") {
    result = temperatureConversion(val, from, to);
  }

  resultSection.style.display = "block";
  resultDisplay.textContent = `${val} ${from} = ${result} ${to}`;
});

resetBtn.addEventListener("click", () => {
  inputElement.value = "";
  resultSection.style.display = "none";
});
