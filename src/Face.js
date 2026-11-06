import * as THREE from 'three';

export default class Face
{
    geometry = new THREE.PlaneGeometry(1,1);
    setRotation = _=>_;
    getRotation = _=>0;
    rotate = _=>_;
    constructor()
    {
        let canvas = document.createElement("canvas");
        canvas.width = 100;
        canvas.height = 100;
        this.ctx = canvas.getContext("2d");
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(0,0,canvas.width,canvas.height);
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(2,2,canvas.width - 4,canvas.height - 4);
        this.ctx.fillStyle = "black";
        let texture = new THREE.CanvasTexture(canvas);
        this.material = new THREE.MeshStandardMaterial({color:"white", roughness:0.5, metalness:0.6, side: THREE.DoubleSide, map:texture});
        this.mesh = new THREE.Mesh(this.geometry,this.material);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
    }
    /**
     * @param {"left"|"top"|"right"|"bottom"} direction 
     */
    addFace(direction)
    {
        let group = new THREE.Group();
        switch(direction)
        {
            case "left": group.position.set(-0.5,0); break;
            case "top": group.position.set(0,0.5); break;
            case "right": group.position.set(0.5,0); break;
            case "bottom": group.position.set(0,-0.5); break;
        }

        this.mesh.add(group);

        let newFace = new Face();
        switch(direction)
        {
            case "left": newFace.mesh.position.set(-0.5,0); break;
            case "top": newFace.mesh.position.set(0,0.5); break;
            case "right": newFace.mesh.position.set(0.5,0); break;
            case "bottom": newFace.mesh.position.set(0,-0.5); break;
        }
        group.add(newFace.mesh);

        switch(direction)
        {
            case "left": 
            newFace.setRotation = angle => group.rotation.y = - angle;
            newFace.getRotation = _=> - group.rotation.y;
            newFace.rotate = angle => group.rotateY(-angle);
            break;

            case "top": 
            newFace.setRotation = angle => group.rotation.x = - angle;
            newFace.getRotation = _=> - group.rotation.x
            newFace.rotate = angle => group.rotateX(-angle);
            break;

            case "right": 
            newFace.setRotation = angle => group.rotation.y = angle;
            newFace.getRotation = _=> group.rotation.y;
            newFace.rotate = angle => group.rotateY(angle);
            break;

            case "bottom": 
            newFace.setRotation = angle => group.rotation.x = angle;
            newFace.getRotation = _=> group.rotation.x;
            newFace.rotate = angle => group.rotateX(angle);
            break;
        }

        let W = this.ctx.canvas.width;
        let H = this.ctx.canvas.height;
        switch(direction)
        {
            case "top":
                this.ctx.fillRect(0,0,W,2);
                newFace.ctx.fillRect(0,H-2,W,2);
                break;
            case "left":
                this.ctx.fillRect(0,0,2,H);
                newFace.ctx.fillRect(W-2,0,2,H);
                break;
            case "right":
                this.ctx.fillRect(W-2,0,2,H);
                newFace.ctx.fillRect(0,0,2,H);
                break;
            case "bottom":
                this.ctx.fillRect(0,H-2,W,2);
                newFace.ctx.fillRect(0,0,W,2);
                break;
        }
        return newFace;
    }
}