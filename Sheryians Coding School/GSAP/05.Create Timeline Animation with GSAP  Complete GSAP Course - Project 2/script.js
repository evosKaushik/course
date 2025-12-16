// const menuIcon = document.querySelector(".ri-menu-line");

// const closeIco = document.querySelector('.ri-close-large-line');

// const tl = gsap.timeline();

// const sidebar =document.getElementById('sidebar')

// tl.to(sidebar, {
//   right: 0,
//   duration: 0.5,
// });

// tl.from("#sidebar li", {
//   x: 150,
//   duration: 0.4,
//   stagger: 0.28,
//   opacity: 0,
// });

// tl.from("#sidebar i", {
//   opacity: 0,
// });


// tl.pause()

// menuIcon.addEventListener('click', ()=>{
//     tl.play()
// })

// closeIco.addEventListener('click', ()=>{
//     tl.reverse()
// })

// sidebar.addEventListener('blur', ()=>{
//     tl.reverse()
// })


const menuIcon = document.querySelector(".ri-menu-line");
const closeIco = document.querySelector('.ri-close-large-line');
const sidebar = document.getElementById('sidebar');

const tl = gsap.timeline();

tl.to(sidebar, {
  right: 0,
  duration: 0.5,
});
tl.from("#sidebar li", {
  x: 150,
  duration: 0.4,
  stagger: 0.28,
  opacity: 0,
});
tl.from("#sidebar i", {
  opacity: 0,
});

tl.pause();

// ✅ Make sidebar focusable
sidebar.setAttribute('tabindex', '0');

menuIcon.addEventListener('click', () => {
  tl.play();
  sidebar.focus(); // ✅ Give it focus when opened
});

closeIco.addEventListener('click', () => {
  tl.reverse();
});

// ✅ When sidebar loses focus, close it
sidebar.addEventListener('blur', () => {
  tl.reverse();
});
