const openModelBtn = document.querySelector(".openModelBtn");
const container = document.querySelector(".modelContainer");

function openModel(toggle) {
  container.style.display = toggle ? "flex" : "none";
}
container.addEventListener("click", (e) => {
  if (e.target.className === "modelContainer") openModel(false);
});
openModelBtn.addEventListener("click", () => {
  openModel(true);
});
