import * as THREE from "three";

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(2, 2, 2);

const material = new THREE.MeshBasicMaterial({ color: "red" });

const mesh = new THREE.Mesh(geometry, material);

// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;

mesh.scale.set(2, 0.25, 0.5);

mesh.rotation.reorder("ZYX");
mesh.rotation.y = Math.PI;
mesh.rotation.x = 0.25;

mesh.position.set(0.7, -0.6, 1);
// scene.add(mesh);

// console.log(mesh.position.length());

mesh.position.normalize();

const size = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, size.width / size.height);

camera.position.set(0, 0, 3);

scene.add(camera);

camera.lookAt(mesh.position);

const group = new THREE.Group();
scene.add(group);

group.position.x = 1
group.position.y = -1

const box1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "blue" }),
);
const box2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "green" }),
);
const box3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "orange" }),
);

box2.position.x = 2
box3.position.x = -2


group.add(box1,box2,box3);

const accessHelper = new THREE.AxesHelper();

scene.add(accessHelper);

// console.log(mesh.position.distanceTo(new THREE.Vector3(camera.position)));

// Rendering
const target = document.getElementById("canvas");

const renderer = new THREE.WebGLRenderer({ canvas: target });

renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
