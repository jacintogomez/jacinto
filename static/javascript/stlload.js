import * as THREE from 'three';
import {STLLoader} from './node_modules/three/examples/jsm/loaders/STLLoader.js';

const scenes=[];
const cams=[];
const rends=[];
const base='/static/stls/'
const stlfiles=[
    fix('rigalfamily'),
    fix('rigalfamily'),
    fix('rigalfamily'),
    fix('rigalfamily'),
    fix('rigalfamily'),
    fix('rigalfamily')
];

function fix(filename){return base+filename+'.stl';}

const numcontainers=stlfiles.length;

if(numcontainers!==stlfiles.length){alert('Number of containers does not match number of .stl files');}

for(let i=0;i<numcontainers;i++){
    const scene=new THREE.Scene();
    const cam=new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,1000);
    cam.position.set(0,0,100);
    cam.rotation.set(0,0,0);
    const rend=new THREE.WebGLRenderer();
    rend.domElement.style.width='100%';
    rend.domElement.style.height='100%';
    document.getElementById('mc'+(i+1)).appendChild(rend.domElement);
    scenes.push(scene);
    cams.push(cam);
    rends.push(rend);
}

const meshes=[];

for(let i=0;i<numcontainers;i++){
    const loader=new STLLoader();
    loader.load(stlfiles[i],function(geometry){
        const material=new THREE.MeshPhongMaterial({color:'lightblue'});
        const mesh=new THREE.Mesh(geometry,material);
        mesh.rotation.x=-Math.PI/2;
        mesh.position.y=-50;
        scenes[i].add(mesh);
        meshes.push(mesh);
    });
}

const lightings=[];
const dirlightings=[];

for(let i=0;i<numcontainers;i++){
    const lighting=new THREE.AmbientLight(0x404040);
    scenes[i].add(lighting);
    lightings.push(lighting);
    const dirlighting=new THREE.DirectionalLight(0xffffff);
    dirlighting.position.set(1,1,1).normalize();
    scenes[i].add(dirlighting);
    dirlightings.push(dirlightings);
}

function animate(){
    requestAnimationFrame(animate);
    meshes.forEach(mesh=>{
        mesh.rotation.z+=0.01;
    });
    rends.forEach((rend,i)=>{
        rend.render(scenes[i],cams[i]);
    });
}

animate();