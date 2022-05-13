import './style.css'
import * as THREE from 'three'
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

// Texture loader
const loader = new THREE.TextureLoader()
const Terrainheight = loader.load('height.png')
const TerrainTexture = loader.load('/texture.png')
const TerrainAlpha = loader.load('alpha.png')

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const TerrainPlaneGeo = new THREE.PlaneBufferGeometry(4, 2, 64, 64)

// Materials
const TerrainMaterial = new THREE.MeshStandardMaterial({
    color: 'gray',
    map: TerrainTexture,
    displacementMap: Terrainheight,
    displacementScale: 1,
    alphaMap: TerrainAlpha,
    transparent: true,
    depthTest: false
})

const TerrainPlane = new THREE.Mesh(TerrainPlaneGeo, TerrainMaterial)
scene.add(TerrainPlane)
TerrainPlane.rotation.x = 220
TerrainPlane.rotation.z = 500
gui.add(TerrainPlane.rotation, 'x').min(0).max(600)

// Mesh


// Lights

const pointLight = new THREE.PointLight(0xffffff, 25)
pointLight.position.x = 12
pointLight.position.y = 9
pointLight.position.z = 3.1
scene.add(pointLight)

gui.add(pointLight.position, 'x')
gui.add(pointLight.position, 'y')
gui.add(pointLight.position, 'z')

const color = { color: '#00ff00' }
gui.addColor(color, 'color').onChange(() => {
    pointLight.color.set(color.color)
})

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth * .7,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth * .7
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 3
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

document.addEventListener('mousemove', animateTerrain)

let mouseY = 0

function animateTerrain(event) {
    mouseY = event.clientY
}

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    TerrainPlane.rotation.z = .05 
    TerrainPlane.position.z = .1 * elapsedTime
    TerrainPlane.material.displacementScale = .3 + mouseY * -0.001

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()