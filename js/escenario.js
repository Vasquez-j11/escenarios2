const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load(
    'img/girl.jpeg',function(texture){
        scene.background = texture;
    }
);

//camaras

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render    

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrìas

const geometry = new THREE.BoxGeometry( 1, 1, 2 );
const TextureLoader = new THREE.TextureLoader
const matcap = TextureLoader.load('img/img-texture/beautiful-closeup-shot-of-brown-fresh-black-coffee-beans.jpg')
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const cube = new THREE.Mesh( geometry, material );
const edges = new THREE.EdgesGeometry( geometry )
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x00000}))
scene.add( cube );

camera.position.z = 5;
camera.position.x = -1;
camera.position.y =  2;

//animaciòn

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0,01;
	renderer.render( scene, camera );
}
animate();