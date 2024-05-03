import anchorProperties from '../static/orbitalAnchorsProperties.json'
import * as THREE from 'three';

const sharedPropertiesName = "sharedProperties"
const sharedProperties = anchorProperties[sharedPropertiesName]
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