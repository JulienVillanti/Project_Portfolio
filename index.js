document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navList = document.getElementById("navlist");

  menuToggle.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});
