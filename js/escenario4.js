const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load(
    'img/sasuke-uchiha-naruto-artwork-manga-anime-4k-background-11623840134bzwmdraijw.jpeg',function(texture){
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

const geometry = new THREE.SphereGeometry( 1, 32, 16 );
const TextureLoader = new THREE.TextureLoader
const matcap = TextureLoader.load('img/img-texture/view-of-white-crumpled-paper.jpg')
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;

const sphere = new THREE.Mesh( geometry, material );
const edges = new THREE.EdgesGeometry( geometry )
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x00000}))
scene.add( sphere );

camera.position.z = 5;


//animaciòn

function animate() {
	requestAnimationFrame( animate );
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    sphere.rotation.z += 0,01;
	renderer.render( scene, camera );
}
animate();