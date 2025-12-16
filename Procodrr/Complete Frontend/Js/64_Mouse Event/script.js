const h1 = document.querySelector("h1");
const addBtn = document.querySelector(".card");
const container = document.querySelector(".container");

let count = 0;

// addBtn.addEventListener("click", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });
// addBtn.addEventListener("dblclick", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });
// addBtn.addEventListener("mousedown", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });
// addBtn.addEventListener("mouseup", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// addBtn.addEventListener("mouseenter", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });
// addBtn.addEventListener("mousemove", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });
// addBtn.addEventListener("mouseover", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });
// addBtn.addEventListener("wheel", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });
// addBtn.addEventListener("touchstart", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });
// addBtn.addEventListener("touchmove", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });
// h1.addEventListener("drag", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });
h1.addEventListener("pointermove", (e) => {
  console.log(e);
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});
