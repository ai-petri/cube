import Face from './Face';
import Canvas3D from './Canvas3D';

let div = document.createElement("div");
div.style.display = "flex";

let canvas = new Canvas3D(innerWidth/2, innerHeight/2);
let f = new Face();
let f1 = f.addFace("left");
let f2 = f.addFace("top");
let f3 = f.addFace("right");
let f4 = f.addFace("bottom");
let f5 = f2.addFace("top");
f.mesh.rotateX(Math.PI/2);
canvas.scene.add(f.mesh);

let controls = document.createElement("div");
controls.className = "controls";
for(let face of [f1,f2,f3,f4,f5])
{
    let input = document.createElement("input");
    input.type = "range";
    input.min = 0;
    input.max = Math.PI/2;
    input.value = 0;
    input.step = 0.001;
    input.oninput = e => face.setRotation(e.target.value);
    controls.append(input);
}

div.append(canvas, controls);
document.body.append(div);