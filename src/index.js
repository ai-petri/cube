import Face from './Face';
import Canvas3D from './Canvas3D';


{
    //1
    let f = new Face();
    let f1 = f.addFace("left");
    let f2 = f.addFace("top");
    let f3 = f.addFace("right");
    let f4 = f.addFace("bottom");
    let f5 = f2.addFace("top");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}

{
    //2
    let f = new Face();
    let f1 = f.addFace("bottom");
    let f2 = f1.addFace("left");
    let f3 = f1.addFace("right");
    let f4 = f.addFace("top");
    let f5 = f4.addFace("top");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}

{
    //3
    let f = new Face();
    let f1 = f.addFace("left");
    let f2 = f.addFace("bottom");
    let f3 = f2.addFace("right");
    let f4 = f.addFace("top");
    let f5 = f4.addFace("top");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}

{
    //4
    let f = new Face();
    let f1 = f.addFace("left");
    let f2 = f.addFace("top");
    let f3 = f.addFace("bottom");
    let f4 = f3.addFace("bottom");
    let f5 = f4.addFace("right");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}

{
    //5
    let f = new Face();
    let f1 = f.addFace("top");
    let f2 = f1.addFace("left");
    let f3 = f.addFace("bottom");
    let f4 = f3.addFace("bottom");
    let f5 = f4.addFace("right");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}

{
    //6
    let f = new Face();
    let f1 = f.addFace("top");
    let f2 = f.addFace("right");
    let f3 = f.addFace("bottom");
    let f4 = f3.addFace("left");
    let f5 = f3.addFace("bottom");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}

{
    //7
    let f = new Face();
    let f1 = f.addFace("top");
    let f2 = f1.addFace("top");
    let f3 = f.addFace("right");
    let f4 = f.addFace("left");
    let f5 = f4.addFace("bottom");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}

{
    //8
    let f = new Face();
    let f1 = f.addFace("top");
    let f2 = f1.addFace("left");
    let f3 = f.addFace("right");
    let f4 = f3.addFace("bottom");
    let f5 = f3.addFace("right");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}

{
    //9
    let f = new Face();
    let f1 = f.addFace("right");
    let f2 = f2.addFace("right");
    let f3 = f.addFace("top");
    let f4 = f3.addFace("left");
    let f5 = f4.addFace("left");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}

{
    //10
    let f = new Face();
    let f1 = f.addFace("left");
    let f2 = f1.addFace("top");
    let f3 = f.addFace("bottom");
    let f4 = f3.addFace("right");
    let f5 = f4.addFace("bottom");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}

{
    //11
    let f = new Face();
    let f1 = f.addFace("left");
    let f2 = f1.addFace("top");
    let f3 = f.addFace("bottom");
    let f4 = f3.addFace("bottom");
    let f5 = f4.addFace("right");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}


function createDiv(...faces)
{
    let div = document.createElement("div");
    div.style.display = "flex";
    
    let canvas = new Canvas3D(innerWidth/3, innerHeight/3);
    
    canvas.scene.add(faces[0].mesh);
    
    let controls = document.createElement("div");
    controls.className = "controls";
    for(let face of faces.slice(1))
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
    return div;
}

