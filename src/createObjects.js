//TODO: find better way to load Textures for planets

import * as THREE from 'three';
import celestialBodiesProperties from '../static/Properties/celestialBodiesProperties.json';
import anchorProperties from "../static/Properties/orbitalAnchorsProperties.json";


//TODO: Workout better solution
import sunTexture from '../static/textures/sunTexture.jpg';
import mercuryTexture from '../static/textures/mercuryTexture.jpg';
import venusTexture from '../static/textures/venusTexture.jpg';
import earthTexture from '../static/textures/earthTexture.jpg';
import marsTexture from '../static/textures/marsTexture.jpg';
import jupiterTexture from '../static/textures/jupiterTexture.jpg';
import saturnTexture from '../static/textures/saturnTexture.jpg';
import uranusTexture from '../static/textures/uranusTexture.jpg';
import neptuneTexture from '../static/textures/neptuneTexture.jpg';

let textures= [sunTexture, mercuryTexture, venusTexture, earthTexture, marsTexture, jupiterTexture, saturnTexture, uranusTexture, neptuneTexture];

const sharedPropertiesName = "sharedProperties"
const sharedProperties = anchorProperties[sharedPropertiesName]

export function createSolarSystem() {
    let solarSystem = [];
    // Iterate through the keys of the objectProperties
    for (const key in celestialBodiesProperties) {
        let object = createObject(celestialBodiesProperties[key], key);
        // if planet has ring texture, create ring
        if (celestialBodiesProperties[key].hasOwnProperty("ringTexturePath")) {
            let ringTextureLoader = new THREE.TextureLoader();
            let ringGeometry = new THREE.RingGeometry(celestialBodiesProperties[key].ringInnerRadius, celestialBodiesProperties[key].ringOuterRadius, 64);
            let ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide, transparent: true });
            /*let ringMaterial = new THREE.MeshBasicMaterial({ map: ringTextureLoader.load(celestialBodiesProperties[key].ringTexturePath), side: THREE.DoubleSide, transparent: true }); */
            let ring = new THREE.Mesh(ringGeometry, ringMaterial);
            ring.rotation.x = Math.PI / 2;
            object.add(ring);
        }
        solarSystem.push(object);
    }
    return solarSystem;
}

function createObject(objectProperties, objectName) {
    let textureLoader = new THREE.TextureLoader(); // Create a texture loader
    let geometry = new THREE.SphereGeometry(objectProperties.radius, objectProperties.width, objectProperties.height);
    //TODO: Fix the texturePath to be more dynamic
    //get planet index from celestialBodiesProperties
    let planetIndex = Object.keys(celestialBodiesProperties).indexOf(objectName);
    let material = new THREE.MeshBasicMaterial({ map: textureLoader.load(textures[planetIndex]), side: THREE.DoubleSide });
    let object = new THREE.Mesh(geometry, material);
    object.position.set(objectProperties.x, objectProperties.y, objectProperties.z);
    object.name = objectName;
    return object;
}


export function createOrbitalAnchors() {
    let orbitalAnchors = [];
    for (let key in anchorProperties){
        if (key !== sharedPropertiesName) {
            let object = createAnchor(anchorProperties[key], key);
            orbitalAnchors.push(object);
        }
    }
    return orbitalAnchors;
}


function createAnchor(anchor, anchorName){
    let geometry = new THREE.SphereGeometry(sharedProperties.radius, sharedProperties.widthSegments, sharedProperties.heightSegments);
    let material = new THREE.MeshBasicMaterial({color: sharedProperties.color});
    let object = new THREE.Mesh(geometry, material);
    object.position.set(sharedProperties.x, sharedProperties.y, sharedProperties.z);
    object.name = anchorName;
    object.rotateX(anchor.angle);
    object.material.transparent = sharedProperties.isTransparent;
    return object;
}

export function createOrbitRing(radius) {
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