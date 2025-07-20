const openModelBtn = document.querySelector(".openModelBtn");
const container = document.querySelector(".modelContainer");

function openModel(toggle) {
  container.style.display = toggle ? "flex" : "none";
}
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("modelContainer")) openModel(false);
  // here, we are checking if wee are clicking on that model itself, then we are calling openModel(false) which sets the style property to none and that's why our model
});
openModelBtn.addEventListener("click", () => {
  openModel(true);
});
