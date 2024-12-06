// Referências aos elementos do DOM
var menuToggle = document.getElementById('menu-toggle');
var linksNavegacao = document.getElementById('links-navegacao');
// Verifica se os elementos existem antes de aplicar a lógica
if (menuToggle && linksNavegacao) {
    menuToggle.addEventListener('click', function () {
        // Alterna a classe 'active' para exibir ou ocultar os links
        linksNavegacao.classList.toggle('active');
        // Alterna a classe 'active' para animar o ícone do hambúrguer
        menuToggle.classList.toggle('active');
    });
}
