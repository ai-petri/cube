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
        this.scene.background = new THREE.Color("white");
        this.camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
        this.controls = new OrbitControls(this.camera, this);
        this.camera.position.x = 2;
        this.camera.position.y = 2;
        this.camera.position.z = 2;
        this.camera.lookAt(0,0,0);



        const light1 = new THREE.HemisphereLight("red", "blue", 1.2);
        this.scene.add(light1);
        const light2 = new THREE.DirectionalLight("white",2.5);
        light2.position.set(4,6,5);
        this.scene.add(light2);

    }

    connectedCallback()
    {
        this.renderer.setAnimationLoop(_=>this.renderer.render(this.scene, this.camera))
    }
}

customElements.define("canvas-3d",Canvas3D, {extends:"canvas"});