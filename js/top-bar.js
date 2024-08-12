// function for close my topbar
const topBar = document.querySelector(".top-bar");
const topClose = document.querySelector(".top-close");

topClose.addEventListener("click", () => {
  topBar.style.display = "none";
});
