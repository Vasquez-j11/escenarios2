const scene = new THREE.Scene();

scene.background = new THREE.Color(0x635F5E);

//camaras

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrìas
const geometry = new THREE.TorusKnotGeometry( 7.391, 0.99, 300, 18, 12, 20);

const TextureLoader = new THREE.TextureLoader
const matcap = TextureLoader.load('img/Stylized_Stone_Floor_005_normal.jpg')
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;


const torusKnot = new THREE.Mesh( geometry, material );
const edges = new THREE.EdgesGeometry( geometry )
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x00000}))
scene.add( torusKnot );







camera.position.z = 20;

//animaciòn

function animate() {
	requestAnimationFrame( animate );
    torusKnot.rotation.y += 0.01;
    torusKnot.rotation.x += 0.01;
	renderer.render( scene, camera );
}
animate();