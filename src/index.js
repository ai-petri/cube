import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const controls = new OrbitControls(camera, renderer.domElement);

const material = new THREE.MeshStandardMaterial({color:"white", roughness:0.5, metalness:0.8, side: THREE.DoubleSide});


const faceGeometry = new THREE.PlaneGeometry(1,1);

let face0 = new THREE.Mesh(faceGeometry,material);
face0.position.set(0,-0.5,0);
face0.rotateX(Math.PI/2)


let face1 = new THREE.Mesh(faceGeometry,material);
face1.position.set(-0.5,0,0)
face1.rotateX(Math.PI/2)
const pivot1 = new THREE.Group();
pivot1.position.set(-0.5, -0.5, 0);
pivot1.add(face1)


let face2 = new THREE.Mesh(faceGeometry,material);
face2.position.set(0,0,0.5)
face2.rotateX(Math.PI/2)
const pivot2 = new THREE.Group();
pivot2.position.set(0, -0.5, 0.5);
pivot2.add(face2)


let face3 = new THREE.Mesh(faceGeometry,material);
face3.position.set(0.5,0,0)
face3.rotateX(Math.PI/2)
const pivot3 = new THREE.Group();
pivot3.position.set(0.5, -0.5, 0);
pivot3.add(face3)


let face4 = new THREE.Mesh(faceGeometry,material);
face4.position.set(0,0,-0.5)
face4.rotateX(Math.PI/2)
const pivot4 = new THREE.Group();
pivot4.position.set(0, -0.5, -0.5);
pivot4.add(face4)


let face5 = new THREE.Mesh(faceGeometry,material);
face5.position.set(0.5,0,0)
face5.rotateX(Math.PI/2)
const pivot5 = new THREE.Group();
pivot5.position.set(1, 0, 0);
pivot5.add(face5)
pivot3.add(pivot5)

let cube = new THREE.Group();
cube.add(face0,pivot1,pivot2,pivot3,pivot4)
scene.add(cube);


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



function animate(time) {

    cube.rotateY(0.001);
    if(pivot1.rotation.z>-Math.PI/2)
    {
        pivot1.rotateZ(-0.01);
    }
    else if(pivot2.rotation.x>-Math.PI/2)
    {
        pivot2.rotateX(-0.01);
    }
    else if(pivot3.rotation.z<Math.PI/2)
    {
        pivot3.rotateZ(0.01);
    }
    else if(pivot4.rotation.x<Math.PI/2)
    {
        pivot4.rotateX(0.01);
    }
    else if(pivot5.rotation.z<Math.PI/2)
    {
        pivot5.rotateZ(0.01);
    }

  renderer.render(scene, camera);
 
}
renderer.setAnimationLoop(animate);