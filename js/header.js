const menuIcon = document.querySelector(".menu");
const headerNav = document.querySelector(".header-nav");
const headerTitle = document.querySelector(".header-title");
const theeIconsHeader = document.querySelector(".icons-car-person");

menuIcon.addEventListener("click", () => {
    headerNav.classList.toggle("show");
    theeIconsHeader.classList.toggle("hide");
  if (headerNav.classList.contains("show")) {
    headerTitle.style.display = "none";
  }else{
    headerTitle.style.display = "block";
  }
});

const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
  menuIcon.classList.remove("show");
});
