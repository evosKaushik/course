import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <Canvas>
      <ambientLight />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>


      <mesh position={[2,0,0]}>
        <coneGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
    </Canvas>
  );
};

export default App;
