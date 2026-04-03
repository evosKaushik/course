import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <Canvas camera={{ position: [3, 2, 3] }}>
      <ambientLight intensity={0.3} />
      <directionalLight intensity={1} position={[2, 2, 2]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="red" wireframe={true}/>
      </mesh>
    </Canvas>
  );
};

export default App;
