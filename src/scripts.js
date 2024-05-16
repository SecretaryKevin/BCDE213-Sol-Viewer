// run  parcel ./src/index.html to start the server
//TODO: give saturn its rings
import * as THREE from 'three';
import {createSolarSystem} from './createSolarSystem';
import {createOrbitalAnchors} from './createOrbitalAnchors';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
import objectPropertiesJson from '../static/celestialBodiesProperties.json';
import anchorProperties from '../static/orbitalAnchorsProperties.json';
import otherProperties from '../static/otherProperties.json';

let resetCameraButton = document.getElementById('overlayButton');


const renderer = new THREE.WebGLRenderer();
const headerHeight = document.querySelector('header').offsetHeight;

renderer.setSize(window.innerWidth, window.innerHeight - headerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(otherProperties.defaultCamera.Perspective.fov, window.innerWidth / (window.innerHeight - headerHeight), otherProperties.defaultCamera.Perspective.near, otherProperties.defaultCamera.Perspective.far)
const orbit = new OrbitControls(camera, renderer.domElement);
const axesHelper = new THREE.AxesHelper(50); //TODO: remove this line when done testing

camera.position.set(otherProperties.defaultCamera.position.x, otherProperties.defaultCamera.position.y, otherProperties.defaultCamera.position.z);
camera.lookAt(otherProperties.defaultCamera.target.x, otherProperties.defaultCamera.target.y, otherProperties.defaultCamera.target.z);
orbit.update();
scene.add(axesHelper);


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
            let ring = createOrbitRing(planet.position.distanceTo(sun.position))
            ring.rotateX(anchorProperties[anchor.name].angle)
            scene.add(ring)
        }
    }
}

orbit.addEventListener('change', function () {
    // if camera position isn't default then show reset button
    if (camera.position.x !== otherProperties.defaultCamera.position.x ||
        camera.position.y !== otherProperties.defaultCamera.position.y ||
        camera.position.z !== otherProperties.defaultCamera.position.z) {
        resetCameraButton.style.display = 'block';
    }
})


function createOrbitRing(radius) {
    const path = new THREE.Curve();
    path.getPoint = function (t) {
        const a = t * 2 * Math.PI;
        const x = radius * Math.cos(a);
        const y = radius * Math.sin(a);
        return new THREE.Vector3(x, y, 0);
    };
    const geometry = new THREE.TubeGeometry(path, 64, 0.02, 32, true);
    const material = new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.DoubleSide});
    const ring = new THREE.Mesh(geometry, material);
    ring.rotation.x = Math.PI / 2;
    return ring;
}

window.addEventListener('resize', function () {
    // Refresh the page when the window size changes
    location.reload();
});

function animate() {
    for (const object of solarSystem) {
        object.rotation.y += objectPropertiesJson[object.name].yRotation
    }
    for (const anchor of orbitalAnchors) {
        anchor.rotation.y += anchorProperties[anchor.name].orbitSpeed
    }
    renderer.render(scene, camera);
}

resetCameraButton.addEventListener('click', function () {
    camera.position.set(otherProperties.defaultCamera.position.x, otherProperties.defaultCamera.position.y, otherProperties.defaultCamera.position.z);
    camera.lookAt(otherProperties.defaultCamera.target.x, otherProperties.defaultCamera.target.y, otherProperties.defaultCamera.target.z);
    orbit.update();
    resetCameraButton.style.display = 'none';
})

renderer.setAnimationLoop(animate)