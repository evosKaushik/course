const username = document.getElementById("username");
const form = document.querySelector("form");


// username.addEventListener('dblclick', ()=>{
//     console.log('Clicked');
// })

form.addEventListener("submit", (e) => {
  e.preventDefault();
    console.log('form submited');
});
