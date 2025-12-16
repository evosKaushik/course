const container = document.querySelector(".container");
const card = document.querySelector(".card");

let i = 1;

card.addEventListener("click", () => {
  let cloneCard = card.cloneNode();
  cloneCard.innerText = i;
  container.append(cloneCard);
  i++;
});

let countdown = 0;

const clicker = setInterval(() => {
  card.click();
  countdown++;
  if (countdown === 10) {
    clearInterval(clicker);
  }
}, 10);
