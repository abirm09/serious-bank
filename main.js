const changeTheme = themeName => {
  const html = document.getElementsByTagName("html")[0];
  html.setAttribute("data-theme", themeName);
};
const selectedTheme = localStorage.getItem("theme");
changeTheme(selectedTheme);
