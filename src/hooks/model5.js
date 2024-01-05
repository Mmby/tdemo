import * as THREE from "three";

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export const m5group = new THREE.Group();

const loader = new GLTFLoader();

loader.load( '../assets/3d/test1.gltf', function ( gltf ) {
  console.log(gltf);
	m5group.add( gltf.scene );
});