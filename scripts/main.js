const images = [
    {
        webp: 'images/fondo1.webp',
        png: 'images/fondo1.png',
        jpg: 'images/fondo1.jpg'
    },
    {
        webp: 'images/fondo2.webp',
        png: 'images/fondo2.png',
        jpg: 'images/fondo2.jpg'
    }
];

let currentIndex = 0;

function supportsWebP() {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}

function changeBackground() {
    const background = images[currentIndex];
    let backgroundUrl;
    
    if (supportsWebP()) {
        backgroundUrl = background.webp;
    } else if (window.matchMedia('(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)').matches) {
        backgroundUrl = background.png;
    } else {
        backgroundUrl = background.jpg;
    }

    document.body.style.backgroundImage = `url(${backgroundUrl})`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 5000); // Cambia cada 5 segundos
changeBackground(); // Cambia al cargar la página
