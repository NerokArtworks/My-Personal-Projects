import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';
import './main.js';

// Loading
const textureLoader = new THREE.TextureLoader();

const normalTexture = textureLoader.load('/textures/NormalMap.png');

// Debug
const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector( 'canvas.webgl' );

// Scene
const scene = new THREE.Scene();

// Objects
const sphereGeometry = new THREE.SphereGeometry( .5, 64, 64 );
const sphereWireframeGeometry = new THREE.SphereGeometry( 20, 32, 16 );

    // Images
const planeGeometryHachiRoku = new THREE.PlaneGeometry( 12.5, 9.5 );
const planeGeometry02 = new THREE.PlaneGeometry( 9, 5.5 );
const planeGeometry03 = new THREE.PlaneGeometry( 8, 5.5 );
const planeGeometry04 = new THREE.PlaneGeometry( 8, 5.5 );


    //Wireframed Cube
const edgeGeometry = new THREE.BoxGeometry( 4, 4, 4 );
const edges = new THREE.EdgesGeometry( edgeGeometry );
const edgeLine = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
edgeLine.position.set( 0, 0, 5 );
scene.add( edgeLine );

// Materials
const material = new THREE.MeshStandardMaterial();
material.metalness = 0.7;
material.roughness = 0.2;
material.normalMap = normalTexture;
material.color = new THREE.Color( 0x292929 );

    // Image Loads
const planeTexture =textureLoader.load( '/img/hachiroku.jpg' );
const planeTexture02 =textureLoader.load( '/img/07.jpg' );
const planeTexture03 =textureLoader.load( '/img/09.jpg' );
const planeTexture04 =textureLoader.load( '/img/04.jpg' );
const planeTexture05 =textureLoader.load( '/img/05.jpg' );

        // Immediately use the texture for material creation
const planeMaterial = new THREE.MeshBasicMaterial( { map: planeTexture } );
const planeMaterial02 = new THREE.MeshBasicMaterial( { map: planeTexture02 } );
const planeMaterial03 = new THREE.MeshBasicMaterial( { map: planeTexture03 } );
const planeMaterial04 = new THREE.MeshBasicMaterial( { map: planeTexture04 } );


// Mesh

    //Spheres
// const sphere = new THREE.Mesh( sphereGeometry, material );
// scene.add( sphere );

// const sphere2 = new THREE.Mesh( sphereGeometry, material );
// sphere2.position.set( -3, 1.2, -4 );
// scene.add( sphere2 );

// const sphere3 = new THREE.Mesh( sphereGeometry, material );
// sphere3.position.set( 2.2, 2.2, -3.5 );
// scene.add( sphere3 );

    //Sphere Wireframe
const sphereWireGeometry = new THREE.WireframeGeometry( sphereWireframeGeometry );
const sphereWireframeLine = new THREE.LineSegments( sphereWireGeometry );

sphereWireframeLine.material.depthTest = true;
sphereWireframeLine.material.opacity = .5;
sphereWireframeLine.material.transparent = true;
sphereWireframeLine.position.set( 0, 0, -10 );
scene.add( sphereWireframeLine );

    //Plane for images
const imagePlane = new THREE.Mesh( planeGeometryHachiRoku, planeMaterial );
imagePlane.position.set( 0, 0, -5 );

scene.add( imagePlane );

const imagePlane02 = new THREE.Mesh( planeGeometry02, planeMaterial02 );
imagePlane02.position.set( 0, 0, 8 );
imagePlane02.scale.set( 1,1 );

scene.add( imagePlane02 );

const imagePlane03 = new THREE.Mesh( planeGeometry03, planeMaterial03 );
imagePlane03.position.set( -9, 0, 8 );
imagePlane03.scale.set( 1,1 );
imagePlane03.rotation.set( 0, -25, 0 );

scene.add( imagePlane03 );

const imagePlane04 = new THREE.Mesh( planeGeometry04, planeMaterial04 );
imagePlane04.position.set( 9, 0, 8 );
imagePlane04.scale.set( 1,1 );
imagePlane04.rotation.set( 0, 25, 0 );

scene.add( imagePlane04 );


// Lights

    //Light 01
// const pointLight = new THREE.PointLight( 0xffffff, 0.1 );
// pointLight.position.x = 2;
// pointLight.position.y = 3;
// pointLight.position.z = 4;
// scene.add(pointLight);

    //Light 02
// const pointLight2 = new THREE.PointLight( 0xff0000, 2 );
// pointLight2.position.set( -1.86, 1, -1.65 );
// pointLight2.intensity = 10;

// scene.add(pointLight2);

// const light2 = gui.addFolder( 'Light 02' );

// light2.add( pointLight2.position, 'y' ).min( -3 ).max( 3 ).step( 0.01 );
// light2.add( pointLight2.position, 'x' ).min( -6 ).max( 6 ).step( 0.01 );
// light2.add( pointLight2.position, 'z' ).min( -3 ).max( 3 ).step( 0.01 );
// light2.add( pointLight2, 'intensity' ).min( 0 ).max( 10 ).step( 0.01 );

// const pointLightHelper = new THREE.PointLightHelper( pointLight2, .5 );
// scene.add( pointLightHelper );

    // Light 03
// const pointLight3 = new THREE.PointLight( 0xe1ff, 2 );
// pointLight3.position.set( 2.13, -3, -1.98 );
// pointLight3.intensity = 3.57;

// scene.add(pointLight3);

// const light3 = gui.addFolder( 'Light 03' );

// light3.add( pointLight3.position, 'y' ).min( -3 ).max( 3 ).step( 0.01 );
// light3.add( pointLight3.position, 'x' ).min( -6 ).max( 6 ).step( 0.01 );
// light3.add( pointLight3.position, 'z' ).min( -3 ).max( 3 ).step( 0.01 );
// light3.add( pointLight3, 'intensity' ).min( 0 ).max( 10 ).step( 0.01 );

// const light3Color = {
//     color: 0xff0000
// }

// light3.addColor( light3Color, 'color' )
//     .onChange( () => {
//         pointLight3.color.set( light3Color.color );
//     } );

// const pointLightHelper2 = new THREE.PointLightHelper( pointLight3, .5 );
// scene.add( pointLightHelper2 );

// const pointLight4 = new THREE.PointLight( 0x1C1E21, 2 );
// pointLight4.position.set( -3, 1, -2 );
// pointLight4.intensity = -50;

// scene.add(pointLight4);

const pointLight5 = new THREE.PointLight( 0xffffff, 2 );
pointLight5.position.set( -5, 2, -5 );
pointLight5.intensity = 5;

scene.add(pointLight5);


/**
 * Sizes
 */


const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

window.addEventListener( 'resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize( sizes.width, sizes.height );
    renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2 ) );
} );

/**
 * Camera
 */


// Base camera
const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 100 );
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add( camera );

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */

const renderer = new THREE.WebGLRenderer( {
    canvas: canvas, 
    antialias: true, 
    alpha : true
} );
renderer.setSize( sizes.width, sizes.height );
renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2 ) );

/**
 * Animate
 */

document.addEventListener( 'mousemove', onDocumentMouseMove );

let mouseX = 0;
let mouseY = 0;

let targetX = 0;
let targetY = 0;

const windowHalfX = sizes.width / 2;
const windowHalfY = sizes.height / 2;

function onDocumentMouseMove ( event ) {
    mouseX = ( event.clientX - windowHalfX );
    mouseY = ( event.clientY - windowHalfY );
};

const updateSphere = ( event ) => {

    //Spheres
    // sphere.position.y = window.scrollY * .003;
    // sphere2.position.y = window.scrollY * .002 + 1.2;
    // sphere3.position.y = window.scrollY * -.005 + 2.2;

    //Sphere Wireframe
    // sphereWireframeLine.position.y = window.scrollY * -.005 + .5;

    //Image Plane
    imagePlane.position.z = window.scrollY * -.01 -5.005;
    imagePlane02.position.z = window.scrollY * -.01 +5.005;
    imagePlane03.position.z = window.scrollY * -.01 +5.005;
    imagePlane04.position.z = window.scrollY * -.01 +5.005;
    
    edgeLine.position.z = window.scrollY * -.005 + 5;  
}


window.addEventListener( 'scroll', updateSphere );

const clock = new THREE.Clock();

const tick = () =>
{
    targetX = mouseX * .001;
    targetY = mouseY * .001;
    
    const elapsedTime = clock.getElapsedTime();

    // Update objects
    
        //Spheres
    // sphere.rotation.y = .5 * elapsedTime;
    // sphere2.rotation.y = .5 * elapsedTime;
    // sphere3.rotation.y = -.5 * elapsedTime;

    // sphere.rotation.y += .05 * ( targetX - sphere.rotation.y );
    // sphere.rotation.x += .05 * ( targetY - sphere.rotation.x );
    // sphere.position.z += -.05 * ( targetY - sphere.rotation.x );
    // sphere2.rotation.y += .05 * ( targetX - sphere2.rotation.y );
    // sphere2.rotation.x += .05 * ( targetY - sphere2.rotation.x );
    // sphere2.position.z += -.05 * ( targetY - sphere2.rotation.x );
    

    // sphere2.rotation.y += .05 * ( targetX - sphere2.rotation.y );
    // sphere2.rotation.x += .05 * ( targetY - sphere2.rotation.x );
    // sphere2.position.z += -.05 * ( targetY - sphere2.rotation.x );

    // sphere3.rotation.y += .05 * ( targetX - sphere3.rotation.y );
    // sphere3.rotation.x += .05 * ( targetY - sphere3.rotation.x );
    // sphere3.position.z += -.05 * ( targetY - sphere3.rotation.x );

        //Sphere Wireframe
    sphereWireframeLine.rotation.y += .05 * ( targetX - sphereWireframeLine.rotation.y );
    sphereWireframeLine.rotation.x += .05 * ( targetY - sphereWireframeLine.rotation.x );
    sphereWireframeLine.position.z += -.05 * ( targetY - sphereWireframeLine.rotation.x );

    //Image Plane
    imagePlane.rotation.x += .05 * ( targetY - imagePlane.rotation.x ); 
    imagePlane02.rotation.x += .05 * ( targetY - imagePlane02.rotation.x ); 
    imagePlane03.rotation.x += .05 * ( targetY - imagePlane03.rotation.x ); 
    imagePlane04.rotation.x += .05 * ( targetY - imagePlane04.rotation.x ); 
    
    edgeLine.rotation.x += .05 * ( targetY - edgeLine.rotation.x );
    // edgeLine.rotation.y += .05 * ( targetX - edgeLine.rotation.y );

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render( scene, camera) ;

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}

tick();