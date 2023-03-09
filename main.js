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
  randomString,
  updateDataOnLocalStorage,
  getInputTextValueById,
  totalDepositOrWithdraw,
  totalAvailable,
} from "./js/utility.js";

//set localStorage
const transaction = [];
if (localStorage.getItem("transaction") === null) {
  localStorage.setItem("transaction", JSON.stringify(transaction));
}

//get deposit amount
document.getElementById("deposit-btn").addEventListener("click", () => {
  const inputAmount = getInputValueById("deposit-amount-input");
  const remarks = getInputTextValueById("deposit-remarks");
  if (isNaN(inputAmount)) {
    alert("Please check your input,and try again.");
    return;
  } else if (inputAmount <= 0) {
    alert("Amount should greater than 1.");
    return;
  } else if (remarks === "") {
    alert("Have to field remarks.");
    return;
  }
  const dateObj = new Date();
  const date = `${dateObj.getDate()}/${
    dateObj.getMonth() + 1
  }/${dateObj.getFullYear()}`;
  const time = `${
    dateObj.getHours() > 12 ? dateObj.getHours() - 12 : dateObj.getHours()
  }:${dateObj.getMinutes()}:${dateObj.getSeconds()} ${
    dateObj.getHours() > 12 ? "PM" : "AM"
  }`;
  const trId = `${dateObj.getMinutes()}${randomString()}${
    dateObj.getSeconds() < 10
      ? `9${dateObj.getSeconds()}`
      : dateObj.getSeconds()
  }`;

  const newTransaction = {
    trId: trId,
    trDate: date,
    trTime: time,
    trName: "deposit",
    remarks: remarks,
    trAmount: inputAmount,
  };
  updateDataOnLocalStorage(newTransaction);
 const totalDeposit= totalDepositOrWithdraw("deposit")
 setInnerTextById("deposit-amount", totalDeposit);
});

//withdraw function
document.getElementById("withdraw-btn").addEventListener("click", () => {
  const inputAmount = getInputValueById("withdraw-amount-input");
  const remarks = getInputTextValueById("withdraw-remarks");
  if (isNaN(inputAmount)) {
    alert("Please check your input,and try again.");
    return;
  } else if (inputAmount <= 0) {
    alert("Amount should greater than 1.");
    return;
  } else if (remarks === "") {
    alert("Have to field remarks.");
    return;
  }
  const dateObj = new Date();
  const date = `${dateObj.getDate()}/${
    dateObj.getMonth() + 1
  }/${dateObj.getFullYear()}`;
  const time = `${
    dateObj.getHours() > 12 ? dateObj.getHours() - 12 : dateObj.getHours()
  }:${dateObj.getMinutes()}:${dateObj.getSeconds()} ${
    dateObj.getHours() > 12 ? "PM" : "AM"
  }`;
  const trId = `${dateObj.getMinutes()}${randomString()}${
    dateObj.getSeconds() < 10
      ? `9${dateObj.getSeconds()}`
      : dateObj.getSeconds()
  }`;

  const newTransaction = {
    trId: trId,
    trDate: date,
    trTime: time,
    trName: "withdraw",
    remarks: remarks,
    trAmount: `-${inputAmount}`,
  };
  updateDataOnLocalStorage(newTransaction);
 const total= totalDepositOrWithdraw("withdraw")
 setInnerTextById("withdraw-amount", total);
});
//display total translation 
const globalTotalDeposit= totalDepositOrWithdraw("deposit")
setInnerTextById("deposit-amount", globalTotalDeposit);
const globalTotalWithdraw= totalDepositOrWithdraw("withdraw")
setInnerTextById("withdraw-amount", globalTotalWithdraw);
totalAvailable()