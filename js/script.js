document.addEventListener("DOMContentLoaded", function() {
    const openingVideo = document.getElementById("openingVideo");
    const skipButton = document.getElementById("skipButton");
    const mainContent = document.getElementById("mainContent");
    const openingContainer = document.querySelector(".video-opening-container");

    // Função para mostrar o conteúdo principal e ocultar o vídeo de abertura
    function showMainContent() {
        openingContainer.style.display = "none";
        mainContent.style.display = "block";
    }

    // Quando o vídeo termina, mostra o conteúdo principal
    openingVideo.addEventListener("ended", function() {
        showMainContent();
    });

    // Quando o botão "Pular" é clicado, também exibe o conteúdo principal
    skipButton.addEventListener("click", function() {
        openingVideo.pause();
        showMainContent();
    });
});


// Função para adicionar um efeito de rolagem suave para seções clicadas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Função para adicionar animação no botão de WhatsApp ao passar o mouse
const whatsappBtn = document.querySelector('.whatsapp-btn');
whatsappBtn.addEventListener('mouseover', function () {
    this.style.transform = 'scale(1.1)';
    this.style.transition = 'transform 0.3s ease';
});

whatsappBtn.addEventListener('mouseout', function () {
    this.style.transform = 'scale(1)';
});

// Função para animar a opacidade e a exibição das seções à medida que o usuário rola a página
const sections = document.querySelectorAll('.about, .classes');

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        const sectionPosition = section.offsetTop + section.offsetHeight / 3;
        if (scrollPosition > sectionPosition) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
            section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        }
    });
});

// Inicialmente, deixa as seções escondidas para a animação de entrada
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
});
