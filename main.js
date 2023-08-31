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