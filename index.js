let popup = document.getElementById("popup");
let grossErrorIcon = document.getElementById("gross-errorIcon");
let extraErrorIcon = document.getElementById("extra-errorIcon");
let ageErrorIcon = document.getElementById("age-errorIcon");
let deductionErrorIcon = document.getElementById("deductions-errorIcon");
let grossErrorText = document.getElementById("grossErrorText");
let extraErrorText = document.getElementById("extraErrorText");
let ageErrorText = document.getElementById("ageErrorText");
let deductionErrorText = document.getElementById("deductionsErrorText");
let grossIncome = document.getElementById("grossIncome");
let extraIncome = document.getElementById("extraIncome");
let age = document.getElementById("age");
let deductions = document.getElementById("deductions");
let ans = document.getElementById("final-income");
let isGross = true;
let isExtra = true;
let isDeduction = true;


function calculateTaxes() {
  let totalIncome =
    Number(grossIncome.value) +
    Number(extraIncome.value) -
    Number(deductions.value);

  if (totalIncome <= 800000) {
    return totalIncome;
  } else if (age.value == 1) {
    return (totalIncome = totalIncome - totalIncome * 0.3);
  } else if (age.value == 2) {
    return (totalIncome = totalIncome - totalIncome * 0.4);
  } else if (age.value == 3) {
    return (totalIncome = totalIncome - totalIncome * 0.1);
  }
}

function openPopup() {
  console.log(isGross, isExtra, isDeduction, age.value);
  if (age.value == "") {
    ageErrorIcon.style.visibility = "visible";
  } else if (!(isGross && isExtra && isDeduction)) {
  } else {
    popup.classList.add("open-popup");
    let finalIncome = calculateTaxes();
    ans.innerHTML = finalIncome;
  }
}

function containsNonNumericCharacters(input) {
  return /[^\d]/.test(input);
}

grossIncome.addEventListener("input", () => {
  if (containsNonNumericCharacters(grossIncome.value) == true) {
    grossErrorIcon.style.visibility = "visible";
    isGross = false;
  } else {
    grossErrorIcon.style.visibility = "hidden";
    isGross = true;
  }
});

grossErrorIcon.addEventListener("mouseover", function () {
  grossErrorText.style.visibility = "visible";
});

grossErrorIcon.addEventListener("mouseout", function () {
  grossErrorText.style.visibility = "hidden";
});

extraIncome.addEventListener("input", () => {
  if (containsNonNumericCharacters(extraIncome.value) == true) {
    extraErrorIcon.style.visibility = "visible";
    isExtra = false;
  } else {
    extraErrorIcon.style.visibility = "hidden";
    isExtra = true;
  }
});

extraErrorIcon.addEventListener("mouseover", function () {
  extraErrorText.style.visibility = "visible";
});

extraErrorIcon.addEventListener("mouseout", function () {
  extraErrorText.style.visibility = "hidden";
});

deductions.addEventListener("input", () => {
  if (containsNonNumericCharacters(deductions.value) == true) {
    deductionErrorIcon.style.visibility = "visible";
    isDeduction = false;
  } else {
    deductionErrorIcon.style.visibility = "hidden";
    isDeduction = true;
  }
});

deductionErrorIcon.addEventListener("mouseover", function () {
  deductionErrorText.style.visibility = "visible";
});

deductionErrorIcon.addEventListener("mouseout", function () {
  deductionErrorText.style.visibility = "hidden";
});

age.addEventListener("input", () => {
  if (age.value != "") {
    ageErrorIcon.style.visibility = "hidden";
  }
});

ageErrorIcon.addEventListener("mouseover", function () {
  ageErrorText.style.visibility = "visible";
});

ageErrorIcon.addEventListener("mouseout", function () {
  ageErrorText.style.visibility = "hidden";
});


function closePopup() {
  popup.classList.remove("open-popup");
}


