const scene = new THREE.Scene();

scene.background = new THREE.Color(0x635F5E);

//camaras

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrìas

const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 300 );
const TextureLoader = new THREE.TextureLoader
const matcap = TextureLoader.load('img/img-texture/adobes.jpg')
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;

const capsule = new THREE.Mesh( geometry, material );

const edges = new THREE.EdgesGeometry( geometry )
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x00000}))
scene.add(capsule)


/* const material = new THREE.MeshBasicMaterial( {color: 0x3833C7, wireframe:true} );
 */



camera.position.z = 5;

//animaciòn

function animate() {
	requestAnimationFrame( animate );
    capsule.rotation.x += 0.02;
    capsule.rotation.y += 0.02;
    capsule.rotation.z += 0.01;
	renderer.render( scene, camera );
}
animate();