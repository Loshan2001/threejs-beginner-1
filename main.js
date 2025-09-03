import * as  THREE from "three";



// 1. Create the scene

const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');



// 2. Add camera 

//property 1 : Field of view
//property 2 : Aspect Ratio
//property 3 : Near clipping plane
//property 4 : Far clipping plane
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1,1000); 
camera.position.z = 5;



// 3. Create and add cube object

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({color : "#468585" , emissive : "#468585"});
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);




// 4. Add Lightning

// property 1 : color
// property 2 : intensity
const light = new THREE.DirectionalLight(0x9CDBA6,10);
// property 1 : x axis
// property 2 : y axis
// property 3 : z axis
light.position.set(1,1,1);
scene.add(light)




// 5. Set up Renderer

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth / window.innerHeight);
document.body.appendChild(renderer.domElement);



// 6. Animate the scene
renderer.render(scene,camera);
 
