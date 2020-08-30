const cardBtns = document.querySelectorAll(".card button");
const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest(".card");
  const imgSrc = card.querySelector("img").src;
  console.log(imgSrc);
  const desc = card.dataset.description;
  console.log(desc);
  const name = card.querySelector("h2").textContent;
  modalInner.innerHTML = `<img width="600" height="600" src="${imgSrc.replace(
    "200",
    "600",
  )}" alt="${name}"/>
  <p>${desc}</p>
  `;
  modalOuter.classList.add("open");
}

function closeModal() {
  modalOuter.classList.remove("open");
}

cardBtns.forEach((btn) => {
  btn.addEventListener("click", handleCardButtonClick);
});

modalOuter.addEventListener("click", (event) => {
  const isOutside = !event.target.closest(".modal-inner");
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
