const image = document.querySelector("img");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", () => {
    let a = JSON.parse(xhr.response);
    image.src = a.message;
  });

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
});

// setTimeout(() => {
//   console.log('hi')
// }, 4000);

const blockingBtn = document.querySelector(".blockingBtn");


blockingBtn.addEventListener("click", () => {
  const startTime = Date.now();

  let currentTime = startTime;
  while (startTime + 2000 > currentTime) {
    currentTime = Date.now();
  }
});
