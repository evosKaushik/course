import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const App = () => {
  const boxRef = useRef();
  useGSAP(() => {
    gsap.from(boxRef.current, {
      y: -100,
      opacity: 0,
      rotate: 360,
      duration: 1,
      delay: 1,
    });
  });
  return (
    <main>
      <div className="container">
        <div className="circle"></div>
        <div className="box" ref={boxRef}></div>
      </div>
      <div className="kuch">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </main>
  );
};

export default App;
