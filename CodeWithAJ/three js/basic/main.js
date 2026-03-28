import * as Three from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.querySelector("canvas");

const scene = new Three.Scene();

const camera = new Three.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const cube = new Three.Mesh(
  new Three.BoxGeometry(1.6, 1.2, 2),
  new Three.MeshStandardMaterial({ color: "red" }),
);

// const light = new Three.AmbientLight(0x404040, 10);

// scene.add(light);
// const cap = new Three.Mesh(
//   new Three.CapsuleGeometry(1,3,0),
//   new Three.MeshBasicMaterial({ color: "red", wireframe: true }),
// );
// const circle = new Three.Mesh(
//   new Three.CircleGeometry(),
//   new Three.MeshBasicMaterial({ color: "red", wireframe: true }),
// );
// const sphere = new Three.Mesh(
//   new Three.SphereGeometry(),
//   new Three.MeshBasicMaterial({ color: "red", wireframe: true }),
// );

scene.add(cube);
// scene.add(cap);
// scene.add(circle);
// scene.add(sphere);

camera.position.z = 4;

// camera.lookAt(sphere.position);
// camera.lookAt(circle.position);
// camera.lookAt(cap.position);
camera.lookAt(cube.position);

const renderer = new Three.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);

const pointLight = new Three.PointLight(0xffffff, 50);
pointLight.position.set(2, 3, 4);

const pointLightHelper = new Three.PointLightHelper(pointLight, 1)
scene.add(pointLight, pointLightHelper);

window.addEventListener("resize", (e) => {
  const height = window.innerHeight;
  const width = window.innerWidth;

  camera.aspect = width / height;

  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
  renderer.render(scene, camera);
});

const controls = new OrbitControls(camera, renderer.domElement);
// controls.autoRotate = true;
// controls.autoRotateSpeed = 4;
// controls.cursorStyle = "grab";
controls.enableDamping = true;
controls.dampingFactor = 0.09;

controls.enableZoom = true;

controls.update();

const clock = new Three.Clock();

function animate() {
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // cube.rotation.y = clock.getElapsedTime() * 1;
  controls.update();
}

animate();
