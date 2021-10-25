//Create Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer( {alpha: true} );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Box Mesh
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( {color: 0x30D1F5} );
const box = new THREE.Mesh( geometry, material );
scene.add( box );

//Camera | OrbitControls
const controls = new THREE.OrbitControls( camera, renderer.domElement );
camera.lookAt( box.position );
camera.position.set( 0, 1, 5);

//Animation
function animate () {
    controls.update();
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();