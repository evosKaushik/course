import * as THREE from "three";

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: "red" });

const mesh = new THREE.Mesh(geometry, material);

// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;

scene.add(mesh);

mesh.position.normalize();

const size = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(
  75,
  size.width / size.height,
  1,
  100,
);

camera.position.set(0, 0, 3);

scene.add(camera);

camera.lookAt(mesh.position);

const group = new THREE.Group();
scene.add(group);

// Rendering
const target = document.getElementById("canvas");

const renderer = new THREE.WebGLRenderer({ canvas: target });

renderer.setSize(size.width, size.height);
renderer.render(scene, camera);

// let time = Date.now();

let clock = new THREE.Clock();

const tick = () => {
  // const currentTime = Date.now();
  // const delta = currentTime - time;
  // time = currentTime; // Normal Three Js

  const elapsedTime = clock.getElapsedTime();

  camera.position.y = Math.sin(elapsedTime);
  camera.rotation.y = elapsedTime;
  camera.position.x = Math.cos(elapsedTime);

  camera.lookAt(mesh.position);

  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();
