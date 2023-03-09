//theme controller
const changeTheme = themeName => {
  const html = document.getElementsByTagName("html")[0];
  html.setAttribute("data-theme", themeName);
};
const selectedTheme = localStorage.getItem("theme");
changeTheme(selectedTheme);

//utility functions
import {
  getInputValueById,
  setInnerTextById,
  localStorageData,
} from "./js/utility.js";

//set localStorage
const transaction = [];
if (localStorage.getItem("transaction") === null) {
  localStorage.setItem("transaction", JSON.stringify(transaction));
}

//get deposit amount
document.getElementById("deposit-btn").addEventListener("click", () => {
  const inputAmount = getInputValueById("deposit-amount-input");
  if (isNaN(inputAmount)) {
    alert("Please check your input,and try again.");
    return;
  } else if (inputAmount <= 0) {
    alert("Amount should greater than 1.");
    return;
  }
  setInnerTextById("deposit-amount", inputAmount);
});
