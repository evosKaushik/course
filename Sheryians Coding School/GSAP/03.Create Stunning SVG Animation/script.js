let initialPath = `M 10 100 Q 250 100 990 100`; //? initial path of svg
let finialPath = `M 10 100 Q 250 100 990 100`; //? finial path of svg

const containerString = document.getElementById("string");

containerString.addEventListener("mousemove", (e) => {
  (initialPath = `M 10 100 Q ${e.x} ${e.y} 990 100`),
    gsap.to("svg path", {
      attr: { d: initialPath },
      duration: 0.3,
      ease: "power3.out",
    });
});

containerString.addEventListener("mouseleave", (e) => {
    gsap.to("svg path", {
        attr: { d: finialPath },
        duration: 2,
        ease: "elastic.out(1,0.2)",
  });
});
containerString.addEventListener("touchmove", (e) => {
  (initialPath = `M 10 100 Q ${e.x} ${e.y} 990 100`),
    gsap.to("svg path", {
      attr: { d: initialPath },
      duration: 0.3,
      ease: "power3.out",
    });
});

containerString.addEventListener("touchcancel", (e) => {
    gsap.to("svg path", {
        attr: { d: finialPath },
        duration: 2,
        ease: "elastic.out(1,0.2)",
  });
});
