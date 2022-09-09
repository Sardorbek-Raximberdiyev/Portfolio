const elChecbox = document.querySelector('.checbox');
const elJsChecbox = document.querySelector('.js-checbox');
const elBodyOpen = document.querySelector('.white-body');


if (elChecbox) {
  elChecbox.addEventListener('click', function () {
    elJsChecbox.classList.toggle('checbox-toggle');
  })
}

const elModalButton = document.querySelector('.js-close-button');
const elModal = document.querySelector('.modal');

if (elModalButton) {
  elModalButton.addEventListener('click', function () {
    elModal.classList.remove('modal-open');
  })
}


setTimeout(function () {
  elModal.classList.add('modal-open')
}, 5000);




document.addEventListener("DOMContentLoaded", function () {
  const theme = localStorage.getItem("theme", "dark");
  const darkModeToggle = document.getElementById("chk");

  if (theme === "dark") {
    document.body.classList.add("dark-body");
  } else {
    document.body.classList.remove("dark-body");
  }

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-body");

    if (document.body.classList.contains("dark-body")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});