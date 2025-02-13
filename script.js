let jsBtn = document.querySelector(".jsBtn");
let closeIcon = document.querySelector(".jsCloseIcon");
let modalContainer = document.querySelector(".jsModalContainer");
let content = document.querySelector(".content");

jsBtn.addEventListener("click", () => {
  modalContainer.style.display = "block";
  document.body.classList.add("darken");
  jsBtn.classList.remove("btn");
  jsBtn.classList.add("btn-clicked");
});

closeIcon.addEventListener("click", () => {
  modalContainer.style.display = "none";
  document.body.classList.remove("darken");
  jsBtn.classList.add("btn");
  jsBtn.classList.remove("btn-clicked");
});

document.body.addEventListener("click", (e) => {
  if (e.target === content) {
    modalContainer.style.display = "none";
    document.body.classList.remove("darken");
    jsBtn.classList.add("btn");
    jsBtn.classList.remove("btn-clicked");
  }
});
