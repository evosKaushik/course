import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

const App = () => {
  const [circle, setCircle] = useState(0);
  const random = gsap.utils.random(-window.innerWidth, window.innerWidth, 10);
  useGSAP(() => {
    gsap.to(".circle", {
      x: circle,
      borderRadius: circle,
      duration: 0.5,
    });
  }, [circle]);
  return (
    <main>
      <button
        onClick={() => {
          console.log(circle);
          setCircle(random);
        }}
      >
        Move
      </button>
      <div className="circle"></div>
    </main>
  );
};

export default App;
