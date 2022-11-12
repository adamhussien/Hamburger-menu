const menuIcon = document.querySelector
('.Hamburger-menu');
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
 navbar.classList.toggle('change');
});