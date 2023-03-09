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

//get input value text
export const getInputTextValueById = id => {
  const input = document.getElementById(id);
  const inputValue = input.value;
  return inputValue;
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
  setDataOnLocalStorage(previOusData);
  // console.log(localStorageData());
};
//random string
export const randomString = () => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < 6) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};
//get total withdraw or total deposit
export const totalDepositOrWithdraw = command => {
  const localData = localStorageData();
  const filteredDta = [];
  if (command === "deposit") {
    localData.filter(x => {
      if (x.trName === "deposit") {
        return filteredDta.push(x.trAmount);
      }
    });
  } else if (command === "withdraw") {
    localData.filter(x => {
      if (x.trName === "withdraw") {
        return filteredDta.push(parseFloat(Math.abs(x.trAmount)));
      }
    });
  }
  const total = filteredDta.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return total;
};
export const totalAvailable = () => {
  const localData = localStorageData();
  let ab = 0;
  const available = localData.map(x => {
    ab += parseFloat(x.trAmount);
  });
  return ab;
};
