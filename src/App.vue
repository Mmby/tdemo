<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Stats from "three/addons/libs/stats.module.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { points, lines, mesh1, m2mesh, group, m4model } from "./threejs";

const gui = new GUI();

const stats = new Stats();

const threeRef = ref();

const scene = new THREE.Scene();
// const geometry = new THREE.BoxGeometry(50, 50, 50);
// // const geometry = new THREE.SphereGeometry(50, 50, 50);
// // const geometry = new THREE.CylinderGeometry(5, 10, 20);
// const metail = new THREE.MeshBasicMaterial({
//   color: 0x3889b7,
//   transparent: true,
//   opacity: 0.5,
// });

// const material = new THREE.MeshLambertMaterial({
//   color: 0x00ffff,
// });
// const mesh = new THREE.Mesh(geometry, material);
// mesh.position.set(50, 0, 0);

scene.add(group);

// const eu = new THREE.Euler(Math.PI/2,Math.PI,0)
// mesh.rotation.y = Math.PI/4

// scene.add(points);
// scene.add(lines)
// scene.add(mesh1)

// const num = 2;
// for (let k = 0; k < num; k++) {
//   for (let j = 0; j < num; j++) {
//     const mesh = new THREE.Mesh(geometry, material);
//     mesh.position.set(100 * k, 0, 100 * j);
//     scene.add(mesh);
//   }
// }

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

const pointLight = new THREE.PointLight(0xffffff, 1, 0, 0);
pointLight.position.set(80, 80, 60);
scene.add(pointLight);

const pointLightHelper = new THREE.PointLightHelper(pointLight, 5);
// scene.add(pointLightHelper);

const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

const directional = new THREE.DirectionalLight(0xffffff, 1);
directional.position.set(50, 100, 50);
// directional.target = mesh;
// scene.add(directional);

const directionalHelper = new THREE.DirectionalLightHelper(
  directional,
  5,
  0xff0000
);
scene.add(directionalHelper);

let obj = {
  isRotate: false,
};

const fz = gui.addFolder("分组");
// fz.close()
// fz.add(ambient, "intensity", 0, 2.0)
//   .name("环境光强度")
//   .step(0.1)
//   .onChange((value) => {
//     console.log(value);
//   });
// fz.add(directional, "intensity", 0, 2.0).name("平行光光强度").step(0.1);
// fz.addColor(material, "color").name("材质颜色");
// fz.add(mesh.position, "x", [100, 0, -100]).name("材质x轴");
// fz.add(mesh.position, "y", { left: 100, center: 0, right: -100 }).name(
//   "材质y轴"
// );

// fz.add(obj, "isRotate");

// const width = 800;
// const height = 500;

//透视投影
// const width = window.innerWidth;
// const height = window.innerHeight;
// const camera = new THREE.PerspectiveCamera(30, width / height, 1, 5000);
// // camera.position.set(200, 200, 200);
// camera.position.set(200, 100, 100);
// camera.lookAt(0, 0, 0);

// 正投影相机
const width = window.innerWidth;
const height = window.innerHeight;
const k = width/height; //画布宽高比
const s = 600 // 控制left right top bottom 范围大小
const camera = new THREE.OrthographicCamera(-s*k, s*k,s,-s,1,8000)
camera.position.set(0, 2000, 0);
// camera.lookAt(2000, 0, 2000);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setClearColor(0x444444, 1);
// renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement);
// controls.target.set(2000,0,2000);
// controls.update()
controls.addEventListener("change", () => {
  // renderer.render(scene, camera);
});

// const clock = new THREE.Clock();

const render = () => {
  // const spt = clock.getDelta() * 1000; // 单位 毫秒
  // console.log('渲染帧率'， 1000/spt);

  if (obj.isRotate) mesh.rotateY(0.01);
  stats.update();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
};

onMounted(() => {
  threeRef.value.appendChild(renderer.domElement);
  threeRef.value.appendChild(stats.domElement);
  render();
  addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    // camera.aspect = window.innerWidth / window.innerHeight;
    const h = width/height; //画布宽高比
    camera.left = -s*h;
    camera.right = s*h;
    camera.updateProjectionMatrix();
  });
});
</script>

<template>
  <div ref="threeRef"></div>
</template>

<style scoped></style>
<template>
    <demo1/>
</template>

<script setup>
import demo1 from './components/demo1.vue'

</script>

<style lang="less" scoped>

</style>