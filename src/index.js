import Face from './Face';
import Canvas3D from './Canvas3D';


{
    //1
    let f = new Face();
    let f1 = f.addFace("left","red","green",null,"blue");
    let f2 = f.addFace("top","green",null,"red");
    let f3 = f.addFace("right",null,"red","purple","violet");
    let f4 = f.addFace("bottom","blue",null,"violet","orange");
    let f5 = f2.addFace("top","red","orange","purple");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}

{
    //2
    let f = new Face("yellow",null,"red");
    let f1 = f.addFace("bottom",null,null,null,"blue");
    let f2 = f1.addFace("left","red","yellow",null,"purple");
    let f3 = f1.addFace("right",null,"red","green","yellow");
    let f4 = f.addFace("top","red",null,"green");
    let f5 = f4.addFace("top","purple","blue","yellow");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}

{
    //3
    let f = new Face(null,null,"red");
    let f1 = f.addFace("left","yellow","green",null,"violet");
    let f2 = f.addFace("bottom","violet",null,null,"orange");
    let f3 = f2.addFace("right",null,"red","purple","blue");
    let f4 = f.addFace("top","green",null,"purple");
    let f5 = f4.addFace("top","yellow","orange","blue");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}

{
    //4
    let f = new Face(null,null,"green");
    let f1 = f.addFace("left","red","yellow",null,"blue");
    let f2 = f.addFace("top","yellow","purple","orange");
    let f3 = f.addFace("bottom","blue",null,"red");
    let f4 = f3.addFace("bottom","red",null,null,"purple");
    let f5 = f4.addFace("right",null,"red","green","orange");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}

{
    //5
    let f = new Face("purple",null,"green");
    let f1 = f.addFace("top",null,"red","blue");
    let f2 = f1.addFace("left","green","yellow",null,"purple");
    let f3 = f.addFace("bottom","green",null,"red");
    let f4 = f3.addFace("bottom","yellow",null,null,"red");
    let f5 = f4.addFace("right",null,"red","green","blue");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}

{
    //6
    let f = new Face("red");
    let f1 = f.addFace("top","green","blue","yellow");
    let f2 = f.addFace("right",null,"yellow","purple","blue");
    let f3 = f.addFace("bottom",null,null,"blue");
    let f4 = f3.addFace("left","green","red",null,"red");
    let f5 = f3.addFace("bottom","red",null,"purple","blue");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}

{
    //7
    let f = new Face(null,null,null,"blue");
    let f1 = f.addFace("top","red",null,"purple");
    let f2 = f1.addFace("top","green","purple","red");
    let f3 = f.addFace("right",null,"purple","red","yellow");
    let f4 = f.addFace("left","green","red");
    let f5 = f4.addFace("bottom","purple",null,"blue","yellow");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}

{
    //8
    let f = new Face("blue",null,null,"red");
    let f1 = f.addFace("top",null,"red","green");
    let f2 = f1.addFace("left","purple","green",null,"blue");
    let f3 = f.addFace("right",null,"green");
    let f4 = f3.addFace("bottom","red",null,"yellow","purple");
    let f5 = f3.addFace("right",null,"red","green","yellow");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}

{
    //9
    let f = new Face("red",null,null,"blue");
    let f1 = f.addFace("right",null,"green",null,"orange");
    let f2 = f1.addFace("right",null,"blue","green","purple");
    let f3 = f.addFace("top",null,"blue","green");
    let f4 = f3.addFace("left",null,"green",null,"red");
    let f5 = f4.addFace("left","orange","purple",null,"blue");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}

{
    //10
    let f = new Face(null,"red","blue");
    let f1 = f.addFace("left","green",null,null,"yellow");
    let f2 = f1.addFace("top","purple","yellow","red");
    let f3 = f.addFace("bottom","yellow",null,null,"blue");
    let f4 = f3.addFace("right",null,"blue","yellow");
    let f5 = f4.addFace("bottom","blue",null,"purple","green");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}

{
    //11
    let f = new Face(null,"red","green");
    let f1 = f.addFace("left","blue",null,null,"red");
    let f2 = f1.addFace("top","green","purple","red");
    let f3 = f.addFace("bottom","red",null,"yellow");
    let f4 = f3.addFace("bottom","blue",null,null,"green");
    let f5 = f4.addFace("right",null,"yellow","green","purple");
    f.mesh.rotateX(Math.PI/2);
    let div = createDiv(f,f1,f2,f3,f4,f5);
    document.body.append(div);
}


function createDiv(...faces)
{
    let div = document.createElement("div");
    div.className = "item";
    let width = innerWidth > innerHeight ? Math.round(0.5*innerWidth) : Math.round(0.9*innerWidth);
    let height = Math.round((9/16) * width); 
    let canvas = new Canvas3D(width,height);
    
    canvas.scene.add(faces[0].mesh);
    canvas.object = faces[0].mesh;
    
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

