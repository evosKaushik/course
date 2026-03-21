import * as THREE from "three";

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(2, 2, 2);

const material = new THREE.MeshBasicMaterial({ color: "red" });

const box = new THREE.Mesh(geometry, material);

scene.add(box);

const size = {
  width: 700,
  height: 500,
};

const camera = new THREE.PerspectiveCamera(75, size.width / size.height);

camera.position.z = 4;
camera.position.x = 4;
camera.position. = 4;



scene.add(camera);

// Rendering
const target = document.getElementById("canvas");

const renderer = new THREE.WebGLRenderer({ canvas: target });

renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
