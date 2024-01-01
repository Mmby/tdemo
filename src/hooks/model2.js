import * as THREE from "three";

const geometry = new THREE.BoxGeometry(50, 50, 50);

const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
});

export const m2mesh = new THREE.Mesh(geometry, material);
