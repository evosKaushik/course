import * as Three from "three";

const canvas = document.querySelector("canvas");

const scene = new Three.Scene();

const camera = new Three.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const geometry = new Three.BoxGeometry(1, 1, 1);
const material = new Three.MeshBasicMaterial({ color: "red", wireframe: true });

const cube = new Three.Mesh(geometry, material);

// cube.position.y = -3;
// cube.position.x = 1;
cube.position.z = 3;
cube.rotation.x = 90;

camera.position.z = 5;

scene.add(cube);

const renderer = new Three.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);

window.addEventListener("resize", (e) => {
  const height = window.innerHeight;
  const width = window.innerWidth;

  camera.aspect = width / height;

  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
  renderer.render(scene, camera);
});
