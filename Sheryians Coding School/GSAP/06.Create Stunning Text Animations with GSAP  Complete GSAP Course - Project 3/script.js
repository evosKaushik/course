function textBreak() {
  const h1Tag = document.querySelector("h1");

  const textH1Tag = h1Tag.textContent.split("");

  h1Tag.innerHTML = "";

  textH1Tag.forEach((letter, index) => {
      let spanTag = document.createElement("span");
      spanTag.textContent = letter;
    if (index < textH1Tag.length / 2) {
      spanTag.classList = "halfText";
    } else {
      spanTag.classList = "moreThanHalfText";
    }
    h1Tag.append(spanTag);
  });
}

textBreak();

gsap.from("h1 span.halfText", {
  y: 80,
  duration: 0.8,
  delay: 0.5,
  opacity: 0,
  stagger: 0.15,
});
gsap.from("h1 span.moreThanHalfText", {
  y: 80,
  duration: 0.8,
  delay: 0.5,
  opacity: 0,
  stagger: -0.15,
});
