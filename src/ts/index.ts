const menuToggle = document.getElementById('menu-toggle') as HTMLButtonElement;
const linksNavegacao = document.getElementById('links-navegacao') as HTMLElement;

if (menuToggle && linksNavegacao) {
    menuToggle.addEventListener('click', () => {
        linksNavegacao.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}
