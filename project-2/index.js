"use strict";
const form = document.querySelector("form");// to select the submit button inside form tag

form.addEventListener("submit", function (e) {           // to add eventlistner with call back function 
  e.preventDefault();// to prevent the instant submission while clicking on submit button 
  const height = parseInt(document.querySelector(".height").value);// to get value of height
  const weight = parseInt(document.querySelector(".weight").value);// to get value of weight
  const result = document.querySelector(".results");// to get value of result 
  if (height === "" || height <= 0 || isNaN(height)) { // check points by if else 
    result.innerHTML = `Please enter valid Height : Height is ${height}`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Please enter valid weight : weight is ${weight}`;
  } else {
    // Fixing upto 2 decimal places
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Dividing as per the bmi conditions
    if (bmi < 18.6) result.innerHTML = `Under Weight : <span>${bmi}</span>`;
    else if (bmi >= 18.6 && bmi < 24.9)
      result.innerHTML = `Normal : <span>${bmi}</span>`;
    else result.innerHTML = `Over Weight : <span>${bmi}</span>`;
  }
});
