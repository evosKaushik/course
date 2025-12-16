// const paragraph = document.querySelector('p');

// // console.log(paragraph.innerHTML
const color = ['red', 'blue', 'pink', 'yellow', 'green',]
const timmer = document.getElementById('timmer')



let i = 0
let k = 0
setInterval(() => {
    document.body.style.backgroundColor = color[i]
    i = (i + 1)% color.length
}, 1000);
setInterval(() => {
    timmer.innerText = k
    k++
}, 1000);