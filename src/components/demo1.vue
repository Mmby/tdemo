<template>
  <div ref="demo1"></div>
</template>

<script setup>
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
const demo1 = ref();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
camera.position.z = 5;

const loader = new GLTFLoader().setPath( '../assets/3d/' );
console.log(loader);
loader.load( 'test3.glb', function ( gltf ) {
  console.log(gltf);
	// scene.add( gltf.scene );

}, function(){}, function ( error ) {

	console.error( '未知错误' ,error );

} );

const animate = () => {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};

onMounted(() => {
  demo1.value.appendChild(renderer.domElement);
  animate();
  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
</script>

<style lang="less" scoped>
</style>