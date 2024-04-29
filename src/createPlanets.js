//TODO: find better way to load Textures for planets
//TODO: find better way to load Required planet properties
//TODO: find better way to load all planets in a loop

import * as THREE from 'three';
import sunTexture from "../static/textures/sunTexture.jpg";
import mercuryTexture from "../static/textures/mercuryTexture.webp";
import venusTexture from "../static/textures/venusTexture.jpg";
import earthTexture from "../static/textures/earthTexture.jpg";

let material;
let geometry;
const textureLoader = new THREE.TextureLoader();


export function createSun(){
    // Sun object
    const sunRadius = 1
    const sunWidth = 32
    const sunHeight = 32
    const sunX = 0
    const sunY = 0
    const sunZ = 0

    geometry = new THREE.SphereGeometry(sunRadius, sunWidth, sunHeight)
    material = new THREE.MeshBasicMaterial( {map: textureLoader.load(sunTexture)} );
    const sun = new THREE.Mesh( geometry, material );
    sun.name = "sun";
    return sun;
}

export function createMercury(){
    // Mercury object
    const mercuryRadius = 0.5
    const mercuryWidth = 32
    const mercuryHeight = 32
    const mercuryX = 4
    const mercuryY = 0
    const mercuryZ = 0
    geometry = new THREE.SphereGeometry(mercuryRadius, mercuryWidth, mercuryHeight);
    material = new THREE.MeshBasicMaterial( {map: textureLoader.load(mercuryTexture)} );
    const mercury = new THREE.Mesh( geometry, material );
    mercury.position.set(mercuryX, mercuryY, mercuryZ);
    mercury.name = "mercury";
    return mercury;
}

export function createVenus(){
    // Venus object
    const venusRadius = 0.5
    const venusWidth = 32
    const venusHeight = 32
    const venusX = 6
    const venusY = 0
    const venusZ = 0
    geometry = new THREE.SphereGeometry(venusRadius, venusWidth, venusHeight);
    material = new THREE.MeshBasicMaterial( {map: textureLoader.load(venusTexture)})
    const venus = new THREE.Mesh( geometry, material );
    venus.position.set(venusX, venusY, venusZ);
    venus.name = "venus";
    return venus;
}

export function createEarth(){
    // Earth object
    const earthRadius = 0.5
    const earthWidth = 32
    const earthHeight = 32
    const earthX = 8
    const earthY = 0
    const earthZ = 0
    geometry = new THREE.SphereGeometry(earthRadius, earthWidth, earthHeight);
    material = new THREE.MeshBasicMaterial( {map: textureLoader.load(earthTexture)});
    const earth = new THREE.Mesh( geometry, material );
    earth.position.set(earthX, earthY, earthZ);
    earth.name = "earth";
    return earth;
}

export function createMars(){
    // Mars object
    const marsRadius = 0.5
    const marsWidth = 32
    const marsHeight = 32
    const marsX = 10
    const marsY = 0
    const marsZ = 0
    geometry = new THREE.SphereGeometry(marsRadius, marsWidth, marsHeight);
    material = new THREE.MeshBasicMaterial( {color: 0xff0000});
    const mars = new THREE.Mesh( geometry, material );
    mars.position.set(marsX, marsY, marsZ);
    mars.name = "mars";
    return mars;
}

export function createJupiter(){
    // Jupiter object
    const jupiterRadius = 0.5
    const jupiterWidth = 32
    const jupiterHeight = 32
    const jupiterX = 12
    const jupiterY = 0
    const jupiterZ = 0
    geometry = new THREE.SphereGeometry(jupiterRadius, jupiterWidth, jupiterHeight);
    material = new THREE.MeshBasicMaterial( {color: 0xff0000});
    const jupiter = new THREE.Mesh( geometry, material );
    jupiter.position.set(jupiterX, jupiterY, jupiterZ);
    jupiter.name = "jupiter";
    return jupiter;
}

export function createSaturn(){
    // Saturn object
    const saturnRadius = 0.5
    const saturnWidth = 32
    const saturnHeight = 32
    const saturnX = 14
    const saturnY = 0
    const saturnZ = 0
    geometry = new THREE.SphereGeometry(saturnRadius, saturnWidth, saturnHeight);
    material = new THREE.MeshBasicMaterial( {color: 0xff0000});
    const saturn = new THREE.Mesh( geometry, material );
    saturn.position.set(saturnX, saturnY, saturnZ);
    saturn.name = "saturn";
    return saturn;
}

export function createUranus(){
    // Uranus object
    const uranusRadius = 0.5
    const uranusWidth = 32
    const uranusHeight = 32
    const uranusX = 16
    const uranusY = 0
    const uranusZ = 0
    geometry = new THREE.SphereGeometry(uranusRadius, uranusWidth, uranusHeight);
    material = new THREE.MeshBasicMaterial( {color: 0xff0000});
    const uranus = new THREE.Mesh( geometry, material );
    uranus.position.set(uranusX, uranusY, uranusZ);
    uranus.name = "uranus";
    return uranus;
}

export function createNeptune(){
    // Neptune object
    const neptuneRadius = 0.5
    const neptuneWidth = 32
    const neptuneHeight = 32
    const neptuneX = 18
    const neptuneY = 0
    const neptuneZ = 0
    geometry = new THREE.SphereGeometry(neptuneRadius, neptuneWidth, neptuneHeight);
    material = new THREE.MeshBasicMaterial( {color: 0xff0000});
    const neptune = new THREE.Mesh( geometry, material );
    neptune.position.set(neptuneX, neptuneY, neptuneZ);
    neptune.name = "neptune";
    return neptune;
}

export function createPluto(){
    // Pluto object
    const plutoRadius = 0.5
    const plutoWidth = 32
    const plutoHeight = 32
    const plutoX = 20
    const plutoY = 0
    const plutoZ = 0
    geometry = new THREE.SphereGeometry(plutoRadius, plutoWidth, plutoHeight);
    material = new THREE.MeshBasicMaterial( {color: 0xff0000});
    const pluto = new THREE.Mesh( geometry, material );
    pluto.position.set(plutoX, plutoY, plutoZ);
    pluto.name = "pluto";
    return pluto;
}
