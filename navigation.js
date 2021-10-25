const menuNav = document.querySelector(".hamburger-icon");

function openNav() {
  document.getElementById("myNav").style.height = "100%";
  menuNav.style.display = "none";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  menuNav.style.display = "flex";
}

menuNav.addEventListener("click", openNav);
