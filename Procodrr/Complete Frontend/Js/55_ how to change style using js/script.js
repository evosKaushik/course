const h1 = document.querySelector("h1");
const ancherTag = document.querySelectorAll("a");
const colorPicker = document.getElementById("colorPicker");
const btn = document.getElementById("btn");

const inputFeild = document.getElementById("inputFeild");


btn.addEventListener('click', ()=>{
  let changeColor = colorPicker.value
  document.body.style.backgroundColor = changeColor
})


ancherTag.forEach((element, i) => {
  // element.style.color = 'teal'
  // element.style.fontWeight = '700'
  // element.style.fontSize = '1.5em'
  // element.style.textDecoration = 'none'
  // element.style.fontFamily = 'cursive'
  // element.className = 'green'
  element.classList.add("green");
  if (i % 2 === 0) {
    element.classList.remove("green");
  }
});

h1.style.color = "red";
