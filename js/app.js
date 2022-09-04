const elChecbox = document.querySelector('.checbox');
const elJsChecbox = document.querySelector('.js-checbox');
const elBodyOpen = document.querySelector('.white-body');

if (elChecbox) {
  elChecbox.addEventListener('click', function () {
    elJsChecbox.classList.toggle('checbox-toggle');
    elBodyOpen.classList.toggle('dark-body');

  })
}
// document.addEventListener("DOMContentLoaded", function () {
//   const theme = localStorage.getItem("theme", "dark");
//   const darkModeToggle = document.getElementById("chk");

//   if (theme === "dark") {
//     document.documentElement.classList.add("dark-mode");
//   } else {
//     document.documentElement.classList.remove("dark-mode");
//   }

//   darkModeToggle.addEventListener("click", function () {
//     document.documentElement.classList.toggle("dark-mode");

//     if (document.documentElement.classList.contains("dark-mode")) {
//       localStorage.setItem("theme", "dark");
//     } else {
//       localStorage.setItem("theme", "light");
//     }
//   });
// });