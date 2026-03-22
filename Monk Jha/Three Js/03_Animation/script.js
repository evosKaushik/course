// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// console.log(GLTFLoader);

// const scene = new THREE.Scene();

// const geometry = new THREE.BoxGeometry(1, 1, 1);

// const material = new THREE.MeshBasicMaterial({ color: "red" });

// const mesh = new THREE.Mesh(geometry, material);

// // mesh.position.x = 0.7;
// // mesh.position.y = -0.6;
// // mesh.position.z = 1;

// scene.add(mesh);

// mesh.position.normalize();

// const size = {
//   width: 800,
//   height: 600,
// };

// const camera = new THREE.PerspectiveCamera(75, size.width / size.height);

// camera.position.set(0, 0, 3);

// scene.add(camera);

// camera.lookAt(mesh.position);

// const group = new THREE.Group();
// scene.add(group);

// // Rendering
// const target = document.getElementById("canvas");

// const renderer = new THREE.WebGLRenderer({ canvas: target });

// renderer.setSize(size.width, size.height);
// renderer.render(scene, camera);

// // let time = Date.now();

// let clock = new THREE.Clock();

// const tick = () => {
//   // const currentTime = Date.now();
//   // const delta = currentTime - time;
//   // time = currentTime; // Normal Three Js

//   const elapsedTime = clock.getElapsedTime();

//   camera.position.y = Math.sin(elapsedTime);
//   camera.rotation.y = elapsedTime;
//   camera.position.x = Math.cos(elapsedTime);

//   camera.lookAt(mesh.position);

//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// };
// tick();

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();

const size = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.set(0, 0, 5);
scene.add(camera);

// 💡 Renderer
const canvas = document.getElementById("canvas");

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(size.width, size.height);

renderer.setClearColor(0xffffff, 1);

// 💡 Loader
const loader = new GLTFLoader();

let model = null;

loader.load(
  "/Assault Rifle.glb", // 🔁 change to your file name
  (gltf) => {
    model = gltf.scene;

    model.scale.set(1, 1, 1);

    model.position.set(0, 0, 0);

    scene.add(model);
  },
  undefined,
  (error) => {
    console.error("Error loading model:", error);
  },
);

// 💡 Clock for smooth animation
const clock = new THREE.Clock();

const tick = () => {
  const delta = clock.getDelta();

  // 👉 rotate ONLY model
  if (model) {
    model.rotation.y += delta;
  }


  renderer.render(scene, camera);
  requestAnimationFrame(tick);
};

tick();


