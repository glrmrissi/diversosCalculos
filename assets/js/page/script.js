// Lista de imagens para alternar
const images = [
    'assets/imgs/images.png', // Imagem para posição de rolagem 0 a 800
    'assets/imgs/bead.png', // Imagem para posição de rolagem 801 a 1600
    'assets/imgs/image3.jpg', // Imagem para posição de rolagem 1601 a 2400
    'assets/imgs/image4.jpg', // Imagem para posição de rolagem 2401 a 3200
    'assets/imgs/image5.jpg'  // Imagem para posição de rolagem 3201 e acima
];

// Função para atualizar a imagem com base na rolagem \(￣︶￣*\))
function updateImageOnScroll() {
    const scrollPosition = window.scrollY;  // Posição de rolagem vertical
    let index = Math.floor(scrollPosition / 800);  // Calcula o índice da imagem com base na rolagem
    
    // Garante que o índice esteja dentro dos limites do array
    if (index >= images.length) {
        index = images.length - 1;
    }
    
    // Atualiza a imagem
    const imgElement = document.getElementById('pokemonsImg');
    imgElement.src = images[index];
}

// Adiciona um ouvinte de evento para rolagem
window.addEventListener('scroll', updateImageOnScroll);

// Atualiza a imagem na primeira carga
updateImageOnScroll();