//theme change control

if (localStorage.getItem("theme") === null) {
  localStorage.setItem("theme", "light");
}

const changeTheme = themeName => {
  const html = document.getElementsByTagName("html")[0];
  html.setAttribute("data-theme", themeName);
};

const themeBtn = document.getElementById("theme");
themeBtn.addEventListener("click", event => {
  if (event.target.innerText === "Dark") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  const selectedTheme = localStorage.getItem("theme");
  changeTheme(selectedTheme);
});
const selectedTheme = localStorage.getItem("theme");
changeTheme(selectedTheme);
