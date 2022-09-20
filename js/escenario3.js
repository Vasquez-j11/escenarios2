const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load(
    'img/retro1.jpeg',function(texture){
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

const geometry = new THREE.CylinderGeometry( 1, 1, 3, 250 );
const TextureLoader = new THREE.TextureLoader
const matcap = TextureLoader.load('img/img-texture/black-and-white-details-of-moon-texture-concept.jpg')
const material = 
    new THREE.MeshMatcapMaterial();
    
material.matcap = matcap;
material.flatShading = true;

const cylinder = new THREE.Mesh( geometry, material );

const edges = new THREE.EdgesGeometry( geometry )
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x00000}))
scene.add(cylinder)



const geometry2 = new THREE.CylinderGeometry( 1, 1, 3, 250 );
const TextureLoader2 = new THREE.TextureLoader
const matcap2 = TextureLoader.load('img/img-texture/black-and-white-details-of-moon-texture-concept.jpg')
const material2 = 
    new THREE.MeshMatcapMaterial();
material2.matcap = matcap;
material2.flatShading = true;
const cylinder2 = new THREE.Mesh( geometry, material );
scene.add(cylinder2)




//xd
const geometry3 = new THREE.CylinderGeometry( 1, 1, 3, 250 );
const TextureLoader3 = new THREE.TextureLoader
const matcap3 = TextureLoader.load('img/img-texture/black-and-white-details-of-moon-texture-concept.jpg')
const material3 = 
    new THREE.MeshMatcapMaterial();
material3.matcap = matcap;
material3.flatShading = true;
const cylinder3 = new THREE.Mesh( geometry, material );
scene.add(cylinder3)





const geometry4 = new THREE.CylinderGeometry( 1, 1, 3, 250 );
const TextureLoader4 = new THREE.TextureLoader
const matcap4 = TextureLoader.load('img/img-texture/black-and-white-details-of-moon-texture-concept.jpg')
const material4 = 
    new THREE.MeshMatcapMaterial();
material4.matcap = matcap;
material4.flatShading = true;
const cylinder4 = new THREE.Mesh( geometry, material );
scene.add(cylinder4)


let objects = [cylinder,cylinder2,cylinder3,cylinder4];
cylinder.position.x = 10;
cylinder2.position.x = -20;
cylinder3.position.x = 20;
cylinder4.position.x = -10;


camera.position.z = 20;

const controls = new THREE.DragControls( [cylinder, cylinder2, cylinder3, cylinder4], camera, renderer.domElement );

//animaciòn

function animate() {
	requestAnimationFrame( animate );

    cylinder.rotation.x += 0.02;
    cylinder.rotation.y += 0.02;
    cylinder.rotation.z += 0.01;

    cylinder2.rotation.x += 0.02;
    cylinder2.rotation.y += 0.02;
    cylinder2.rotation.z += 0.01;

    cylinder3.rotation.x += 0.02;
    cylinder3.rotation.y += 0.02;
    cylinder3.rotation.z += 0.01;

    cylinder4.rotation.x += 0.02;
    cylinder4.rotation.y += 0.02;
    cylinder4.rotation.z += 0.01;

    line.rotation.x += 0.01,8;
    line.rotation.y += 0.01,8;
    line.rotation.z += 0.03;




	renderer.render( scene, camera );
}
animate();