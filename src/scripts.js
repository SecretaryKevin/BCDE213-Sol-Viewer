// run  parcel ./src/index.html to start the server
import * as THREE from 'three';
import {createSolarSystem} from './createSolarSystem';
import {createOrbitalAnchors} from './createOrbitalAnchors';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
import objectPropertiesJson from '../static/celestialBodiesProperties.json';
import anchorProperties from '../static/orbitalAnchorsProperties.json';
import otherProperties from '../static/otherProperties.json';


const renderer = new THREE.WebGLRenderer();
const headerHeight = document.querySelector('header').offsetHeight;

renderer.setSize( window.innerWidth, window.innerHeight - headerHeight);

document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(otherProperties.defaultCamera.Perspective.fov, window.innerWidth / (window.innerHeight - headerHeight), otherProperties.defaultCamera.Perspective.near, otherProperties.defaultCamera.Perspective.far)
const orbit = new OrbitControls( camera, renderer.domElement );
const axesHelper = new THREE.AxesHelper( 50 ); //TODO: remove this line when done testing

camera.position.set( otherProperties.defaultCamera.position.x, otherProperties.defaultCamera.position.y, otherProperties.defaultCamera.position.z);
camera.lookAt(otherProperties.defaultCamera.target.x, otherProperties.defaultCamera.target.y, otherProperties.defaultCamera.target.z);
orbit.update();
scene.add( axesHelper );


let solarSystem = createSolarSystem() // Creates the Celestial Bodies Objects
let sun = solarSystem[otherProperties.solIndex]
scene.add(sun)

let orbitalAnchors = createOrbitalAnchors() // Creates the Orbital Anchors
for (const anchor of orbitalAnchors) {
    scene.add(anchor);
    for (const planet of solarSystem.slice(otherProperties.solIndex)) {
        // if planet name in anchor name
        let planetName = planet.name.toLowerCase()
        if (anchor.name.includes(planetName)) {
            anchor.add(planet);
        }
    }
}


/*window.addEventListener('click', onDocumentMouseClick, false);


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
    */

window.addEventListener('resize', function() {
    // Refresh the page when the window size changes
    location.reload();
});

function animate() {
    //TODO: find a way to rotate all planets in a loop
    for (const object of solarSystem) {
        object.rotation.y += objectPropertiesJson[object.name].yRotation
    }
    for (const anchor of orbitalAnchors) {
        anchor.rotation.y += anchorProperties[anchor.name].orbitSpeed
    }

    renderer.render( scene, camera );
}

renderer.setAnimationLoop(animate)