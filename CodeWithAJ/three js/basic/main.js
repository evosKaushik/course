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

camera.position.z = 5;

const renderer = new Three.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = Three.PCFSoftShadowMap;

const cube = new Three.Mesh(
  new Three.BoxGeometry(1.6, 1.2, 2),
  new Three.MeshStandardMaterial({ color: "red", roughness: .4, metalness: .5 }),
);

cube.castShadow = true

const plane = new Three.Mesh(
  new Three.PlaneGeometry(10, 10),
  new Three.MeshStandardMaterial({ color: "white" }),
);

plane.rotation.x = -Math.PI / 2;
plane.position.y = -1;
plane.receiveShadow = true;
scene.add(cube, plane);

camera.lookAt(cube.position);

renderer.render(scene, camera);

const directionalLight = new Three.DirectionalLight(0xffffff, 1);
directionalLight.position.set(2, 3, 4);

directionalLight.castShadow = true

scene.add(directionalLight);

window.addEventListener("resize", (e) => {
  const height = window.innerHeight;
  const width = window.innerWidth;

  camera.aspect = width / height;

  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
  renderer.render(scene, camera);
});

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.04;
controls.update();

const clock = new Three.Clock();

function animate() {
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // cube.rotation.y = clock.getElapsedTime() * 1;
  controls.update();
}

animate();
