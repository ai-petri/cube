import * as THREE from 'three';
import Face from './Face';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const controls = new OrbitControls(camera, renderer.domElement);


let f = new Face();
let f1 = f.addFace("left");
let f2 = f.addFace("top");
let f3 = f.addFace("right");
let f4 = f.addFace("bottom");
let f5 = f2.addFace("top");
f.mesh.rotateX(Math.PI/2)
scene.add(f.mesh);



camera.position.z = 3;
camera.position.y = 0.5;


//Lights
const light = new THREE.AmbientLight("white", 0.5);
scene.add(light);

const light2 = new THREE.PointLight("blue", 10);
light2.position.set(0, 3, 0);
scene.add(light2);

const light3 = new THREE.PointLight("red", 10);
light3.position.set(-3, 0, 0);
scene.add(light3);



function animate(time) 
{

    if(f1.getRotation()<Math.PI/2-0.01) f1.rotate(0.01);
    else if(f2.getRotation()<Math.PI/2-0.01) f2.rotate(0.01);
    else if(f3.getRotation()<Math.PI/2-0.01) f3.rotate(0.01);
    else if(f4.getRotation()<Math.PI/2-0.01) f4.rotate(0.01);
    else if(f5.getRotation()<Math.PI/2-0.01) f5.rotate(0.01);

    renderer.render(scene, camera);
 
}
renderer.setAnimationLoop(animate);