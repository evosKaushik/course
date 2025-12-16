const container = document.querySelector(".container");
const card = document.querySelector(".card");

let i = 1;

card.addEventListener("click", () => {
  let cloneCard = document.createElement("div");
  cloneCard.classList.add("card");
  cloneCard.innerText = i++;

  // cloneCard.addEventListener('click', ()=>{
  // cloneCard.remove()
  // })

  container.append(cloneCard);
});

container.addEventListener("click", (e) => {
  if (e.target !== container) {
    e.target.remove();
  }
});
