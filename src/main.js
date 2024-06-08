// Run 'parcel index.html' to start the server
// TODO: give Saturn its rings
// TODO: restructure file to have functions for creation and removal of objects

import * as THREE from 'three';
import { createOrbitalAnchors, createOrbitRing, createSolarSystem } from './createObjects';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import objectPropertiesJson from '../static/Properties/celestialBodiesProperties.json';
import anchorProperties from '../static/Properties/orbitalAnchorsProperties.json';
import otherProperties from '../static/Properties/otherProperties.json';
import background from '../static/background.jpg';

const headerHeight = document.querySelector('header').offsetHeight;
const renderer = initRenderer();
const resetCameraButton = document.getElementById('resetButton');
const camera = initCamera();

mainScene();

// Initialize renderer
function initRenderer() {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight - headerHeight);
    document.body.appendChild(renderer.domElement);
    return renderer;
}

// Initialize camera
function initCamera() {
    const camera = new THREE.PerspectiveCamera(
        otherProperties.defaultCamera.Perspective.fov,
        window.innerWidth / (window.innerHeight - headerHeight),
        otherProperties.defaultCamera.Perspective.near,
        otherProperties.defaultCamera.Perspective.far
    );
    camera.position.set(
        otherProperties.defaultCamera.position.x,
        otherProperties.defaultCamera.position.y,
        otherProperties.defaultCamera.position.z
    );
    camera.lookAt(
        otherProperties.defaultCamera.target.x,
        otherProperties.defaultCamera.target.y,
        otherProperties.defaultCamera.target.z
    );
    return camera;
}

// Initialize scene
function initScene() {
    const scene = new THREE.Scene();
    const loader = new THREE.TextureLoader();
    scene.background = loader.load(background);
    return scene;
}

// Add solar system to scene
function addSolarSystemToScene(scene, solarSystem, orbitalAnchors) {
    const sun = solarSystem[otherProperties.solIndex];
    scene.add(sun);
    for (const anchor of orbitalAnchors) {
        scene.add(anchor);
        for (const planet of solarSystem.slice(otherProperties.solIndex)) {
            const planetName = planet.name.toLowerCase();
            if (anchor.name.includes(planetName)) {
                anchor.add(planet);
                const ring = createOrbitRing(planet.position.distanceTo(sun.position));
                ring.rotateX(anchorProperties[anchor.name].angle);
                scene.add(ring);
            }
        }
    }
}

// Animate the scene
function animate(renderer, scene, camera, solarSystem, orbitalAnchors) {
    solarSystem.forEach(object => {
        object.rotation.y += objectPropertiesJson[object.name].yRotation;
    });
    orbitalAnchors.forEach(anchor => {
        anchor.rotation.y += anchorProperties[anchor.name].orbitSpeed;
    });
    renderer.render(scene, camera);
    requestAnimationFrame(() => animate(renderer, scene, camera, solarSystem, orbitalAnchors));
}

// Main scene
function mainScene() {
    const scene = initScene();
    const orbit = new OrbitControls(camera, renderer.domElement);
    const solarSystem = createSolarSystem();
    const orbitalAnchors = createOrbitalAnchors();

    addSolarSystemToScene(scene, solarSystem, orbitalAnchors);

    resetCameraButton.addEventListener('click', resetCameraPosition);
    orbit.addEventListener('change', handleOrbitChange);
    window.addEventListener('resize', handleWindowResize);

    animate(renderer, scene, camera, solarSystem, orbitalAnchors);

    document.querySelectorAll('.planet-button').forEach(button => {
        button.addEventListener('click', () => {
            const planet = solarSystem.find(p => p.name.toLowerCase() === button.id.toLowerCase());
            orbit.enabled = false;
            orbit.removeEventListener('change', handleOrbitChange);
            planetInfoScene(scene, solarSystem, orbitalAnchors, planet);
        });
    });
}

// Planet information scene
function planetInfoScene(scene, solarSystem, orbitalAnchors, planet) {
    resetCameraPosition();
    scene.clear();
    planet.position.set(16, 9.5, 14);
    planet.geometry.dispose();
    planet.geometry = new THREE.SphereGeometry(1, 32, 32);
    scene.add(planet);
    let infoDiv = document.getElementById('planet-info');
    if (!infoDiv) {
        infoDiv = document.createElement('div');
        infoDiv.id = 'planet-info';
    }
    infoDiv.innerHTML = `
        <h2>${planet.name.charAt(0).toUpperCase() + planet.name.slice(1)}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius est odio, sed pharetra ex ornare a. Sed erat leo, rutrum sed lacus non, vulputate placerat nunc. Integer luctus leo ut nibh tristique, in scelerisque tellus tincidunt. Cras justo orci, egestas ut sem sit amet, elementum laoreet velit. Nam venenatis quis neque eu molestie. Vestibulum nec neque lobortis, sagittis nunc id, molestie diam. Nulla tempus eleifend nunc, eu iaculis turpis vulputate eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent luctus condimentum vestibulum. Pellentesque in rutrum urna. In sollicitudin, urna id euismod placerat, tellus est fermentum eros, vel cursus enim ante id quam. Aenean interdum, ex rutrum lobortis imperdiet, lacus risus luctus augue, in tincidunt tortor lacus eu sapien. Pellentesque gravida nisl id ante porta, eget efficitur lorem placerat. Fusce placerat vitae magna nec lobortis. Suspendisse vehicula sem mattis mauris congue, ac ultrices lacus consequat.</p>
        <button id="back-button">Back to Solar System</button>
    `;
    infoDiv.style.display = 'block';
    document.body.appendChild(infoDiv);
    document.getElementById('back-button').addEventListener('click', () => {
        document.body.removeChild(infoDiv);
        mainScene();
    });
}

// Update camera position
function resetCameraPosition() {
    console.log('resetting camera');
    camera.position.set(
        otherProperties.defaultCamera.position.x,
        otherProperties.defaultCamera.position.y,
        otherProperties.defaultCamera.position.z
    );
    camera.lookAt(
        otherProperties.defaultCamera.target.x,
        otherProperties.defaultCamera.target.y,
        otherProperties.defaultCamera.target.z
    );
    resetCameraButton.style.display = 'none';
}

// Handle orbit change
function handleOrbitChange() {
    const { x, y, z } = otherProperties.defaultCamera.position;
    console.log(camera.position);
    const isDefaultPosition = camera.position.x === x && camera.position.y === y && camera.position.z === z;
    resetCameraButton.style.display = isDefaultPosition ? 'none' : 'block';
}

// Handle window resize
function handleWindowResize() {
    location.reload();
}

// Music player controls
document.getElementById('play-music-button').addEventListener('click', function () {
    this.style.display = 'none';
    const musicPlayer = document.getElementById('music-player');
    musicPlayer.volume = 0.5;
    musicPlayer.style.display = 'block';
    document.getElementById('volume-control').style.display = 'block';
    musicPlayer.play();
    musicPlayer.loop = true;
});

document.getElementById('volume-control').addEventListener('input', function () {
    document.getElementById('music-player').volume = this.value;
});
