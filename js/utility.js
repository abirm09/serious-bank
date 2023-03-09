//get input function
export const getInputValueById = id => {
  const element = document.getElementById(id);
  const elementValue = element.value;
  const inputNumber = parseFloat(elementValue);
  element.value = "";
  return inputNumber;
};
//set Inner Text By Id
export const setInnerTextById = (id, value) => {
  const element = document.getElementById(id);
  element.innerHTML = value;
};

//get localStorage data
export const localStorageData = () => {
  const getData = JSON.parse(localStorage.getItem("transaction"));
  return getData;
};

//set data on local storage
export const setDataOnLocalStorage = data => {
  localStorage.setItem("transaction", JSON.stringify(data));
};

//update date on local storage
export const updateDataOnLocalStorage = data => {
  const previOusData = localStorageData();
  previOusData.push(data);
};
