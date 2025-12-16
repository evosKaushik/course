const image = document.querySelector("img");
const button = document.querySelector("button");

setInterval(() => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", () => {
    let a = JSON.parse(xhr.response);
    image.src = a.message;
  });

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
}, 2000);
