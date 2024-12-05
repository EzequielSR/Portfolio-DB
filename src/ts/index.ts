// Seleciona o botão de menu e os menus
const menuHamburguer = document.getElementById("menu-hamburguer")!;
const linksNavegacao = document.getElementById("links-navegacao")!;
const redesSociais = document.getElementById("redes-sociais")!;

// Função para alternar o menu
const toggleMenu = () => {
    const isMenuOpen = linksNavegacao.classList.contains("menu-fechado");
    if (isMenuOpen) {
        linksNavegacao.classList.remove("menu-fechado");
        redesSociais.classList.remove("menu-fechado");
    } else {
        linksNavegacao.classList.add("menu-fechado");
        redesSociais.classList.add("menu-fechado");
    }
};

// Adiciona o evento de clique ao botão
menuHamburguer.addEventListener("click", toggleMenu);
