import * as THREE from "three";

//创建一个空的几何体
const geometry = new THREE.BufferGeometry();

// 添加顶点数据

// 类型化数组定义的一组顶点坐标数据
const vertices = new Float32Array([
  0, 0, 0, 50, 0, 0, 0, 100, 0, 0, 0, 10, 0, 0, 100, 50, 0, 10,
]);

const vertices2 = new Float32Array([
  0, 0, 0, 50, 0, 0, 50, 50, 0, 0, 0, 0, 50, 50, 0, 0, 50, 0,
]);

const vertices3 = new Float32Array([0, 0, 0, 50, 0, 0, 50, 50, 0, 0, 50, 0]);

// bufferAttrubute 属性缓冲对象表示顶点数据

const attribute = new THREE.BufferAttribute(vertices2, 3);

// 设置几何体的顶点位置属性

geometry.attributes.position = attribute;

//类型化数组创建顶点数据
const indexes = new Uint16Array([0, 1, 2, 0, 2, 3]);

geometry.index = new THREE.BufferAttribute(indexes, 1);

const normals = new Float32Array([
  0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
]);

geometry.attributes.normal = new THREE.BufferAttribute(normals, 3);

//点的材质
const material = new THREE.PointsMaterial({
  color: 0x0ffff00,
  size: 10,
});

//定义一个点模型
export const points = new THREE.Points(geometry, material);

// 线的材质
const lineMaterial = new THREE.LineBasicMaterial({
  color: 0x0ffeecc,
});
// 定义一个线模型
export const lines = new THREE.Line(geometry, lineMaterial);

// MeshBasicMaterial
const meshMaterial = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
  side: THREE.DoubleSide,
  wireframe:true,
});


export const mesh1 = new THREE.Mesh(geometry, meshMaterial);

const v3 = new THREE.Vector3(100,100,100)
