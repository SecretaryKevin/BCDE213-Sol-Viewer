// run  parcel ./src/index.html to start the server
import * as THREE from 'three';
import {createMercury, createSun, createVenus, createEarth, createMars,
createJupiter, createSaturn, createUranus, createNeptune, createPluto} from "./createPlanets";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"


const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const orbit = new OrbitControls( camera, renderer.domElement );
const axesHelper = new THREE.AxesHelper( 5 );

camera.position.set( 0, 2, 5 );
orbit.update();
scene.add( axesHelper );


//TODO: find a way to load all planets in a loop
let sun = createSun();
let mercury = createMercury();
sun.add( mercury );
let venus = createVenus();
sun.add( venus );
let earth = createEarth();
sun.add( earth );
let mars = createMars();
sun.add( mars );
let jupiter = createJupiter();
sun.add( jupiter );
let saturn = createSaturn();
sun.add( saturn );
let uranus = createUranus();
sun.add( uranus );
let neptune = createNeptune();
sun.add( neptune );
let pluto = createPluto();
sun.add( pluto );

scene.add( sun );
window.addEventListener('click', onDocumentMouseClick, false);


function onDocumentMouseClick(event) {
    // Calculate mouse position in normalized device coordinates
    let mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Raycast from camera to mouse position
    let raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    // Check for intersections with the "sun" and "mercury" objects
    let intersects = raycaster.intersectObjects([sun, mercury]);
    if (intersects.length > 0) {
        //TODO: move to a separate function in a separate file
        alert(intersects[0].object.name + ' clicked!');
        if(intersects[0].object.name === "sun") {
            // display html content
            let planetInfo = document.getElementById('test')
            planetInfo.style.display = "block"
        }
    }
}
function animate() {
    //TODO: find a way to rotate all planets in a loop
    sun.rotateY(0.004)
    mercury.rotateY(0.01)
    venus.rotateY(0.05)
    earth.rotateY(0.01)
    renderer.render( scene, camera );
}

renderer.setAnimationLoop(animate)