import * as THREE from 'three';


export default class Canvas3D extends HTMLCanvasElement
{
    /**@type {THREE.Object3D} */
    object;
    constructor(width, height)
    {
        super();
        this.style.touchAction = "none";
        this.renderer = new THREE.WebGLRenderer({antialias: true,canvas:this});
        this.renderer.setSize(width, height);
        this.renderer.shadowMap.enabled = true;
        
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000 );

        this.camera.position.x = 0;
        this.camera.position.y = 4;
        this.camera.position.z = 4;
        this.camera.lookAt(0,0,0);

        this.isDown = false;
        this.addEventListener("pointerdown",e=>this.isDown = true);
        window.addEventListener("pointerup",e=>this.isDown = false);
        this.addEventListener("pointermove", e =>
        {
            if(this.isDown && this.object)
            {
                this.camera.updateMatrixWorld();
                let right = new THREE.Vector3().setFromMatrixColumn(this.camera.matrixWorld, 0).normalize();
                let up = new THREE.Vector3().setFromMatrixColumn(this.camera.matrixWorld, 1).normalize();
                this.object.rotateOnWorldAxis(up, 0.01 * e.movementX);
                this.object.rotateOnWorldAxis(right, 0.01 * e.movementY);
            }
        });

        this.addEventListener("wheel", e=>
        {
            e.preventDefault();

            let target = new THREE.Vector3(0, 0, 0);
            let distance = this.camera.position.distanceTo(target)

            if((distance>3 && e.deltaY>0)|| e.deltaY<0)
            {
                let direction = target.clone().sub(this.camera.position).normalize();
                this.camera.position.addScaledVector(direction, 0.001*e.deltaY); 
                this.camera.lookAt(target);
            }

        },{passive:false})


        const light1 = new THREE.AmbientLight("white", 1)
        this.scene.add(light1);
        const light2 = new THREE.PointLight("white", 20);
        light2.position.set(0,5);
        light2.castShadow = true;
        light2.shadow.mapSize.set(640,640)
        light2.shadow.normalBias = 0.01
        light2.shadow.bias = -0.001;
        this.scene.add(light2);

    }

    connectedCallback()
    {
        this.renderer.setAnimationLoop(_=>this.renderer.render(this.scene, this.camera))
    }
}

customElements.define("canvas-3d",Canvas3D, {extends:"canvas"});