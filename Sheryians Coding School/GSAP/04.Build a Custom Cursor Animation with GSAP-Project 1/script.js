const cursor = document.querySelector("#cursor");

const main = document.querySelector("#main");

const imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1,
});
});

imageDiv.addEventListener("mouseenter", () => {
    cursor.innerHTML = `View More`;
  gsap.to(cursor, {
    scale: 4,
    duration: 0.5,
  });
});
imageDiv.addEventListener("mouseleave", () => {
  cursor.innerHTML = ``;
  gsap.to(cursor, {
    scale: 1,
    duration: 0.5,
    ease: "back.out(4)",
  });
});
