import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';


export default class Canvas3D extends HTMLCanvasElement
{
    /**@type {THREE.Object3D} */
    object;
    constructor(width, height)
    {
        super();

        this.renderer = new THREE.WebGLRenderer({antialias: true,canvas:this});
        this.renderer.setSize(width, height);
        this.renderer.shadowMap.enabled = true;
        
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000 );

        this.camera.position.x = 0;
        this.camera.position.y = 4;
        this.camera.position.z = 4;
        this.camera.lookAt(0,0,0);

        this.controls = new OrbitControls(this.camera, this);


        const light1 = new THREE.AmbientLight("white", 1)
        this.scene.add(light1);
        const light2 = new THREE.PointLight("white", 20);
        light2.position.set(0,5,-4);
        light2.castShadow = true;
        light2.shadow.mapSize.set(640,640)
        light2.shadow.normalBias = 0.005
        light2.shadow.bias = -0.001;
        this.camera.add(light2);
        this.scene.add(this.camera);

    }

    connectedCallback()
    {
        this.renderer.setAnimationLoop(_=>this.renderer.render(this.scene, this.camera))
    }
}

customElements.define("canvas-3d",Canvas3D, {extends:"canvas"});