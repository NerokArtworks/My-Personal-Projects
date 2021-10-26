//Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer( {alpha: true, antialias: true} );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Camera | OrbitControls
const controls = new THREE.OrbitControls( camera, renderer.domElement );
camera.position.set( 0, 6, 12);

/*Scene*/
const sceneWidth = 20;

//Street
const streetGeo = new THREE.PlaneGeometry( 20, 8 );
const streetMat = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } );
const street = new THREE.Mesh( streetGeo, streetMat );
street.rotation.x = Math.PI * -0.5;
scene.add ( street );

//Sidewalk
for (let x = -sceneWidth / 2; x < sceneWidth / 2; x+= 1) {
    const geo = new THREE.BoxGeometry(  0.95, 0.1, 0.95 );
    const mat = new THREE.MeshBasicMaterial( { color: 0x828282 } );
    const sidewalk = new THREE.Mesh ( geo, mat );
    sidewalk.position.set( x + 0.5, 0.06, -2.4 );
    scene.add( sidewalk );

    const sidewalk2 = new THREE.Mesh ( geo, mat );
    sidewalk2.position.set( x + 0.5, 0.06, -3.5 );
    scene.add( sidewalk2 );
}

for (let x = -sceneWidth / 2; x < sceneWidth / 2; x+= 1) {
    const geo = new THREE.BoxGeometry(  0.95, 0.1, 0.95 );
    const mat = new THREE.MeshBasicMaterial( { color: 0x828282 } );
    const sidewalk = new THREE.Mesh ( geo, mat );
    sidewalk.position.set( x + 0.5, 0.06, 2.4 );
    scene.add( sidewalk );

    const sidewalk2 = new THREE.Mesh ( geo, mat );
    sidewalk2.position.set( x + 0.5, 0.06, 3.5 );
    scene.add( sidewalk2 );
}

//Buildings
for (let x = -sceneWidth / 2; x < sceneWidth / 2; x += 4) {
    const w = 3.5;
    const h = random( 4, 8 );
    const geo = new THREE.BoxGeometry( w, h, 5 );
    const mat = new THREE.MeshBasicMaterial( { color: 0xE8D37C } );
    const building = new THREE.Mesh( geo, mat );
    building.position.set( x + w / 2, h / 2, -6.5 );
    scene.add( building );
}

//Trees
const numTrees = random( 4, 8 );
for (let i = 0; i < numTrees; i++) {
    const tree = new THREE.Group();
    const h = random( 2, 4 );
    const geo = new THREE.CylinderGeometry( 0.125, 0.25, h, 5 );
    const mat = new THREE.MeshBasicMaterial( { color: 0xA19281 } );
    const trunk = new THREE.Mesh( geo, mat);
    tree.add ( trunk );

    const numLeaves = random( 10, 20 );
    for (let j = 0; j < numLeaves; j++) {
        const leafGeo = new THREE.IcosahedronGeometry( random( 1, 1 ) );
        const leafMat = new THREE.MeshBasicMaterial( { color: 0x8AE8A7 } );
        const leaf = new THREE.Mesh( leafGeo, leafMat );
        let x = random( -0.5, 0.5);
        let y = h / 2 + random( -0.5, 0.25 );
        let z = random( -0.5, 0.5);
        leaf.position.set( x, y, z );
        leaf.rotation.x = random( 0, Math.PI * 0.5);
        leaf.rotation.y = random( 0, Math.PI * 0.5);
        tree.add( leaf );
    }

    let x = random( -sceneWidth / 2, sceneWidth / 2);
    let z = random( -2, -3 );
    tree.position.set( x , h / 2 + 0.05, z );
    scene.add( tree );
}

for (let i = 0; i < numTrees; i++) {
    const tree = new THREE.Group();
    const h = random( 2, 4 );
    const geo = new THREE.CylinderGeometry( 0.125, 0.25, h, 5 );
    const mat = new THREE.MeshBasicMaterial( { color: 0xA19281 } );
    const trunk = new THREE.Mesh( geo, mat);
    tree.add ( trunk );

    const numLeaves = random( 10, 20 );
    for (let j = 0; j < numLeaves; j++) {
        const leafGeo = new THREE.IcosahedronGeometry( random( 1, 1 ) );
        const leafMat = new THREE.MeshBasicMaterial( { color: 0x8AE8A7 } );
        const leaf = new THREE.Mesh( leafGeo, leafMat );
        let x = random( -0.5, 0.5);
        let y = h / 2 + random( -0.5, 0.25 );
        let z = random( -0.5, 0.5);
        leaf.position.set( x, y, z );
        leaf.rotation.x = random( 0, Math.PI * 0.5);
        leaf.rotation.y = random( 0, Math.PI * 0.5);
        tree.add( leaf );
    }

    let x = random( -sceneWidth / 2, sceneWidth / 2);
    let z = random( 2, 3 );
    tree.position.set( x , h / 2 + 0.05, z );
    scene.add( tree );
}

//Random range function
function random( min, max ) {
    return Math.random() * ( max - min ) + min;
}

//Animation
function animate () {
    controls.update();
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();