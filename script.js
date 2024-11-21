function toggleMenu() {
    const navmenu = document.querySelector('.nav-menu');
    navLinks.classList.toggle('active');
}

 function toggleMenu() {
    document.querySelector('.nav-menu').classList.toggle('open');
}





let count = 1;

// Definindo o primeiro rádio como 'checked'
document.getElementById("radio1").checked = true;

// Função para navegação automática
setInterval(function () {
    nextImagem();
}, 2000); // A cada 2 segundos

// Função para passar para a próxima imagem
function nextImagem() {
    count++; // Aumenta o contador
    if (count > 10) { // Se for maior que 10, volta para 1
        count = 1;
    }

    // Marca o rádio correspondente
    document.getElementById("radio" + count).checked = true;
}
