import Face from './Face';
import Canvas3D from './Canvas3D';
let canvas = new Canvas3D(800,600);

document.body.append(canvas)

let f = new Face();
let f1 = f.addFace("left");
let f2 = f.addFace("top");
let f3 = f.addFace("right");
let f4 = f.addFace("bottom");
let f5 = f2.addFace("top");
f.mesh.rotateX(Math.PI/2)
canvas.scene.add(f.mesh);
