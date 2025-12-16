import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const App = () => {
  const gsapRef = useRef();

  useGSAP(() => {
      gsap.to(gsapRef.current, {
        yPercent: 90,
        duration: 3,
        delay: 0.5,
        ease: "bounce.out",
      });
    });

  return (
    <main>
      <div ref={gsapRef} className="box"></div>
    </main>
  );
};

export default App;
