import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default class Canvas3D extends HTMLCanvasElement
{
    constructor(width, height)
    {
        super();

        this.renderer = new THREE.WebGLRenderer({antialias: true,canvas:this});
        this.renderer.setSize(width, height);
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
        this.controls = new OrbitControls(this.camera, this);
        this.camera.position.z = 3;
        this.camera.position.y = 0.5;

        const light1 = new THREE.AmbientLight("white", 0.5);
        this.scene.add(light1);
        
        const light2 = new THREE.PointLight("blue", 10);
        light2.position.set(0, 3, 0);
        this.scene.add(light2);
        
        const light3 = new THREE.PointLight("red", 10);
        light3.position.set(-3, 0, 0);
        this.scene.add(light3);

    }

    connectedCallback()
    {
        this.renderer.setAnimationLoop(_=>this.renderer.render(this.scene, this.camera))
    }
}

customElements.define("canvas-3d",Canvas3D, {extends:"canvas"});