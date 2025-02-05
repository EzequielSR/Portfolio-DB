import "../css/styles.css";
import "../css/mediaQuery.css";
import {useEffect, useState} from "react";

const ProjetosCard: React.FC = () => {
    const [isTelaGrande, setTelaGrande] = useState(window.innerWidth > 1024);

    useEffect(() => {
        const handleResize = () => {
            setTelaGrande(window.innerWidth > 1024);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);
    const projetos = [
        {
            nome: "Sauce_Demo-DB",
            tecnologias: "Cypress, JS, HTML",
            descricao: "O Sauce_Demo-DB é um projeto de automação de testes utilizando Cypress. O objetivo é testar funcionalidades como login, listagem de produtos, carrinho de compras e checkout, garantindo eficiência e qualidade.",
            imgSrc: "/assets/Sauce-Demo.png",
            links: {
                github: "https://github.com/EzequielSR/Sauce_Demo-DB"
            }
        },
        {
            nome: "Desafio API DB",
            tecnologias: "JAVA, RestAssured, Maven, JUnity",
            descricao: "É um desafio com automação de testes para API Rest. O desafio valida o comportamento da API, aplicando Clean Code, Design Patterns, Orientação a Objetos e Arquitetura de Automação.",
            imgSrc: "/assets/ViaCep.png",
            links: {
                github: "https://github.com/EzequielSR/Desafio_API_DB"
            }
        },
        {
            nome: "EclipsaGarage",
            tecnologias: "HTML, CSS",
            descricao: "O EclipsaGarage é um portal de serviços automotivos simples, onde a paixão pelos carros encontra a facilidade de navegação, destacando os serviços e informações de contato para uma experiência intuitiva.",
            imgSrc: "/assets/EclipsaGarage.png",
            links: {
                site: "https://eclipsa-garage.vercel.app/",
                github: "https://github.com/EzequielSR/EclipsaGarage"
            }
        },
        {
            nome: "BoraJogar",
            tecnologias: "HTML, CSS, JS, Bootstrap",
            descricao: "BoraJogar é uma landing page criada para promover uma plataforma moderna de jogos online no navegador, inspirada no estilo clássico dos jogos Friv, mas com o design e funcionalidades mais próximas da experiência do Steam.",
            imgSrc: "/assets/BoraJogar.png",
            links: {
                site: "https://bora-jogar.vercel.app/",
                github: "https://github.com/EzequielSR/BoraJogar"
            }
        },
        {
            nome: "O Desafio Simon",
            tecnologias: "HTML, CSS, JQuery",
            descricao: "O Desafio Simon é uma versão web inspirada no clássico jogo eletrônico Simon Game, que desafia a memória dos jogadores por meio de sequências de luzes e sons. O objetivo do jogo é reproduzir corretamente as sequências que vão ficando progressivamente mais longas e complexas.",
            imgSrc: "/assets/ODesafioSimon.png",
            links: {
                site: "https://o-desafio-simon.vercel.app/",
                github: "https://github.com/EzequielSR/O_Desafio_Simon"
            }
        },
        {
            nome: "Produto API - Testes de Integração",
            tecnologias: "JAVA, SpringBoot, JUnit, MockMvc",
            descricao: "Produto API - Testes de Integração é uma aplicação que valida os endpoints de uma API de gerenciamento de produtos, utilizando Spring Boot, JUnit 5 e MockMvc para garantir o funcionamento correto das funcionalidades, como criação e listagem de produtos, através de testes automatizados.",
            imgSrc: "/assets/Produto-API.png",
            links: {
                github: "https://github.com/EzequielSR/Produto-API_Testes_Integracao"
            }
        },
        {
            nome: "IP Address Tracker",
            tecnologias: "React, JavaScript, Node.js, Express, LeafletJS, Axios",
            descricao: "IP Address Tracker é uma aplicação web que permite a pesquisa e visualização de informações de IP e domínios, mostrando dados como localização, fuso horário e ISP, além de exibir as coordenadas em um mapa interativo. Utiliza React no frontend, Node.js e Express no backend, com integração à API IPify.",
            imgSrc: "/assets/ip-address-tracker.png",
            links: {
                site: "https://ip-address-tracker-master-virid-nine.vercel.app/",
                github: "https://github.com/EzequielSR/ip-address-tracker-master"
            }
        }
    ];

    return (
        <main>
            <section>
                <div className="head-card">
                    <h2>Meus</h2>
                    <h1>Projetos</h1>
                </div>
                <div className="card-container">
                    {projetos.map((projeto, index) => (
                        <div className="card" key={index}>
                            <img src={projeto.imgSrc} alt={`Descrição da imagem ${projeto.nome}`} />
                            <div className="card-about">
                                <h2>{projeto.nome}</h2>
                                <span>{projeto.tecnologias}</span>
                                <p title={isTelaGrande ? projeto.descricao : undefined}>
                                    {projeto.descricao}
                                </p>
                                <div className="buttons">
                                    {projeto.links.site && (
                                        <button>
                                            <a href={projeto.links.site} target="_blank" rel="noopener noreferrer">Acessar</a>
                                        </button>
                                    )}
                                    {projeto.links.github && (
                                        <button>
                                            <a href={projeto.links.github} target="_blank" rel="noopener noreferrer">Github</a>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default ProjetosCard;