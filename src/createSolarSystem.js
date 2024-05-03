//TODO: find better way to load Textures for planets

import * as THREE from 'three';
import celestialBodiesProperties from '../static/celestialBodiesProperties.json';

export function createSolarSystem() {
    let solarSystem = [];
    // Iterate through the keys of the objectProperties
    for (const key in celestialBodiesProperties) {
        let object = createObject(celestialBodiesProperties[key], key);
        solarSystem.push(object);
    }
    return solarSystem;
}

function createObject(objectProperties, objectName) {
    let textureLoader = new THREE.TextureLoader(); // Create a texture loader
    // Create geometry
    let geometry = new THREE.SphereGeometry(objectProperties.radius, objectProperties.width, objectProperties.height);
    // Load the texture using the provided texture path
    // texturePath is a localhost url that points to the texture image file which is a very poor way of doing it
    //TODO: Fix the texturePath to be more dynamic
    let material = new THREE.MeshBasicMaterial({ map: textureLoader.load(objectProperties.texturePath)});
    // Create the object
    let object = new THREE.Mesh(geometry, material);
    object.position.set(objectProperties.x, objectProperties.y, objectProperties.z);
    // add name as string
    object.name = objectName;
    return object;
}
