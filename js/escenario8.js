const scene = new THREE.Scene();

scene.background = new THREE.Color(0x635F5E);

//camaras

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrìas

const geometry = new THREE.ConeGeometry( 1, 5,100 );
const TextureLoader = new THREE.TextureLoader
const matcap = TextureLoader.load('img/Stylized_Stone_Floor_005_height.png  ')
const material = new THREE.MeshNormalMaterial();
material.matcap = matcap;
material.flatShading = true;


const cone = new THREE.Mesh( geometry, material );
const edges = new THREE.EdgesGeometry( geometry )
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x00000}))
scene.add( cone );

camera.position.z = 5;

//animaciòn

function animate() {
	requestAnimationFrame( animate );
    cone.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();