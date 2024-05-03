import anchorProperties from '../static/orbitalAnchorsProperties.json'
import * as THREE from 'three';
export function createOrbitalAnchors() {
    let orbitalAnchors = [];
    console.log(anchorProperties)
    for (let key in anchorProperties){
        let object = createAnchor(anchorProperties[key], key);
        orbitalAnchors.push(object);
    }
    return orbitalAnchors;
}

function createAnchor(anchor, anchorName){
    let geometry = new THREE.SphereGeometry(0.1, 0.1, 0.1);
    let material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    let object = new THREE.Mesh(geometry, material);
    object.position.set(0, 0, 0);
    object.name = anchorName;
    object.rotateX(anchor.angle);
    object.material.transparent = true;
    console.log(anchorName)
    return object;
}