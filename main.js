// Config Cena
const scene = new THREE.Scene();
// Config das cameras
const camera_superior = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 ); // (graus, proporção img, plano de recorte prox, plano de recorte dist)
const camera_diagonal = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
const camera_frontal = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Config Renderizador
const renderer = new THREE.WebGLRenderer();
// Tamanho da tela
renderer.setSize( window.innerWidth, window.innerHeight );
// Linkando renderizador com o html
document.body.appendChild( renderer.domElement ); // codigo javascript main


// Definição das cameras e suas posições
camera_superior.position.set(0, 25, 0); // Posiciona a câmera acima da cena
camera_superior.lookAt(new THREE.Vector3(0, 0, 0)); // Aponta a câmera para o centro da cena
camera_superior.up.set(0, 0, -1); // Define o vetor "up" da câmera para apontar para baixo
camera_superior.updateMatrixWorld();

camera_diagonal.position.set(5, 6, 10);
camera_diagonal.lookAt(scene.position);
camera_diagonal.updateMatrixWorld();

camera_frontal.position.set(0, 0, 15);
camera_frontal.lookAt(scene.position);
camera_frontal.updateMatrixWorld();

// Loop de renderização => Animar a cena
function animate() {
	requestAnimationFrame( animate );

	// Translação

	// Rotação

	renderer.render( scene, camera_atual);
}
// Chamando a func de renderizador
animate();


// Construindo Objetos / Modelos
const coordenadas = new THREE.AxesHelper(5);
scene.add(coordenadas);
// Para aplicar texturas
const textureLoader = new THREE.TextureLoader();

// Terra
const terraGeometry = new THREE.SphereGeometry(0.55, 32, 32);

const terraNormalMap = textureLoader.load('/texturas/terra/terraNormal.jpeg');
const terraBumpMap = textureLoader.load('/texturas/terra/terraBump.jpeg');

const terraMaterial = new THREE.MeshStandardMaterial({
    map: terraNormalMap,
    bumpMap: terraBumpMap,
  }
);

const terra = new THREE.Mesh(terraGeometry, terraMaterial);
terra.position.set(8,0,0);
scene.add(terra);