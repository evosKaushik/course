const btn = document.querySelector("button")

btn.addEventListener("click", ()=>{
    fetch("http://localhost:4000/api")
})