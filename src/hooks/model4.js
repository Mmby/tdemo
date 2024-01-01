import * as THREE from "three";

export const m4group = new THREE.Group();
m4group.name = "高层楼";
for (let k = 0; k < 5; k++) {
  const geometry = new THREE.BoxGeometry(20, 60, 10);

  const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = `${k + 1}号楼`;
  mesh.position.x = k * 30;
  m4group.add(mesh);
}

m4group.position.y = 30;

export const m4group2 = new THREE.Group();
m4group.name = "洋房";
for (let k = 0; k < 5; k++) {
  const geometry = new THREE.BoxGeometry(20, 30, 10);

  const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = `${k + 6}号楼`;
  mesh.position.x = k * 30;
  m4group2.add(mesh);
}
m4group2.position.z = 50;
m4group2.position.y = 15;

export const m4model = new THREE.Group();
m4model.name = "小区房子";
m4model.add(m4group, m4group2);
m4model.position.set(-50, 0, -25);

// 遍历
m4model.traverse((obj) => {
  if(obj.isMesh){
    obj.material.color.set('#ffeecc')
  }
});
