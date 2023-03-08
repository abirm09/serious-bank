//theme change control

if (localStorage.getItem("theme") === null) {
  localStorage.setItem("theme", "light");
}

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
