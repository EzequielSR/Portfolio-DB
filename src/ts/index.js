var menuToggle = document.getElementById('menu-toggle');
var linksNavegacao = document.getElementById('links-navegacao');
if (menuToggle && linksNavegacao) {
    menuToggle.addEventListener('click', function () {
        linksNavegacao.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}
