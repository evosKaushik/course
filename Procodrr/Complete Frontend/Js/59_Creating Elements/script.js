// const h1 = document.querySelector("h1");
const container = document.querySelector(".container");

// let images = document.createElement('img')

// for (let i = 1; i < 80; i++) {
//     const newImage = images.cloneNode()
//     images.src = `img/Rectangle (${i}).png`
//     container.appendChild(newImage)
// }

// <div class="card">
//     <img src="img/Rectangle (1).png">
//     <p>1</p>
// </div>

const cardDiv = document.createElement("div");

cardDiv.classList.add("card");

cardDiv.innerHTML = `
 <img src="img/Rectangle (1).png">
<p>1</p>
`;

container.appendChild(cardDiv);

for (let i = 1; i < 80; i++) {
  let newCard = cardDiv.cloneNode();
    newCard.innerHTML = `
    <img src="img/Rectangle (${i}).png">
    <p>${i}</p>
    `;
    container.appendChild(newCard)
}
