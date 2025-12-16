const userName = document.querySelector(".displayName");

const inputFeild = document.getElementById("inputFeild");
const inputFeildAge = document.getElementById("inputFeildAge");

// userName.innerText = localStorage.username
// userName.innerText = localStorage.getItem('username')

// console.log(localStorage.username);

// inputFeild.addEventListener('input', (e)=>{
//     // localStorage.username = e.target.value
//     localStorage.setItem('username', e.target.value)
//     userName.innerHTML = e.target.value
// })

const myData = JSON.parse(localStorage.getItem('myData')) || {}

inputFeild.addEventListener("input", (e) => {
  myData.name = e.target.value;
  localStorage.setItem("myName", JSON.stringify(myData));
});

inputFeildAge.addEventListener("input", (e) => {
  myData.age = e.target.value;
  localStorage.setItem("myName", JSON.stringify(myData));
});
