import * as THREE from "three";

const geometry = new THREE.BoxGeometry(20, 50, 50);

const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
});

const m3mesh1 = new THREE.Mesh(geometry, material);
const m3mesh2 = new THREE.Mesh(geometry, material);
m3mesh2.translateX(100);

export const group = new THREE.Group();
group.add(m3mesh1, m3mesh2);


const box3 = new THREE.Box3()
box3.expandByObject(group)
console.log(box3);
// group.translateY(50)

// group.scale.set(1,1,1)

// group.rotation.set(20,0,0)