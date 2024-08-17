// Create variables

const menuIcon = document.querySelector(".menu");
const headerNav = document.querySelector(".header-nav");
const headerTitle = document.querySelector(".header-title");
const theeIconsHeader = document.querySelector(".icons-car-person");
const closeBtn = document.querySelector(".close-btn");

// function  show menu
menuIcon.addEventListener("click", () => {
  headerNav.classList.add("show");
  theeIconsHeader.classList.add("hide");
  menuIcon.style.display = "none"; // Hide the menu icon
  closeBtn.classList.add("show");
  headerTitle.style.display = "none";
});

// function close menu
closeBtn.addEventListener("click", () => {
  headerNav.classList.remove("show");
  theeIconsHeader.classList.remove("hide");
  menuIcon.style.display = "block"; // Show the menu icon
  closeBtn.classList.remove("show");
  headerTitle.style.display = "block";
});
