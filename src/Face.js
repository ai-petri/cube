import * as THREE from 'three';

export default class Face
{

    material = new THREE.MeshStandardMaterial({color:"white", roughness:0.5, metalness:0.8, side: THREE.DoubleSide});
    geometry = new THREE.PlaneGeometry(1,1);
    mesh = new THREE.Mesh(this.geometry,this.material);
    setRotation = _=>_;
    getRotation = _=>0;
    rotate = _=>_;
    
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

        return newFace;
    }
}