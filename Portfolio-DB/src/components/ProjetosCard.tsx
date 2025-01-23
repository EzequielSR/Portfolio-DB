import "../css/styles.css";
import "../css/mediaQuery.css";

const ProjetosCard: React.FC = () => {
    return (
        <main>
            <section>
                <div className="head-card">
                    <h2>Meus</h2>
                    <h1>Projetos</h1>
                </div>
                <div className="card-container">
                    {/* Exemplo de um card, você pode replicar para os outros projetos */}
                    <div className="card">
                        <img src="../../public/assets/EclipsaGarage.png" alt="Descrição da imagem"/>
                        <div className="card-about">
                            <h2>EclipsaGarage</h2>
                            <span> HTML, CSS</span>
                            <p>O EclipsaGarage é um portal de serviços automotivos simples, onde a paixão pelos carros
                                encontra
                                a facilidade de navegação, destacando os serviços e informações de contato para uma
                                experiência
                                intuitiva.</p>
                            <div className="buttons">
                                <button><a href="https://eclipsa-garage.vercel.app/" target="_blank"
                                           rel="noopener noreferrer">Acessar</a></button>
                                <button><a href="https://github.com/EzequielSR/EclipsaGarage" target="_blank"
                                           rel="noopener noreferrer">Github</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="../../public/assets/BoraJogar.png" alt="Descrição da imagem"/>
                        <div className="card-about">
                            <h2>BoraJogar</h2>
                            <span> HTML, CSS, JS, Bootstrap</span>
                            <p>BoraJogar é uma landing page criada para promover uma plataforma moderna de jogos online
                                no
                                navegador, inspirada no estilo clássico dos jogos Friv, mas com o design e
                                funcionalidades mais
                                próximas da experiência do Steam.</p>
                            <div className="buttons">
                                <button><a href="https://bora-jogar.vercel.app/" target="_blank">Acessar</a></button>
                                <button><a href="https://github.com/EzequielSR/BoraJogar" target="_blank">Github</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="../../public/assets/ODesafioSimon.png" alt="Descrição da imagem"/>
                        <div className="card-about">
                            <h2>O Desafio Simon</h2>
                            <span> HTML, CSS, JQuery</span>
                            <p>O Desafio Simon é uma versão web inspirada no clássico jogo eletrônico Simon Game, que
                                desafia a
                                memória dos jogadores por meio de sequências de luzes e sons. O objetivo do jogo é
                                reproduzir
                                corretamente as sequências que vão ficando progressivamente mais longas e complexas.</p>
                            <div className="buttons">
                                <button><a href="https://o-desafio-simon.vercel.app/" target="_blank">Acessar</a>
                                </button>
                                <button><a href="https://github.com/EzequielSR/O_Desafio_Simon"
                                           target="_blank">Github</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="../../public/assets/Produto-API.png" alt="Descrição da imagem"/>
                        <div className="card-about">
                            <h2>Produto API - Testes de Integração</h2>
                            <span>JAVA, SpringBoot, JUnity, MockMvc</span>
                            <p>Produto API - Testes de Integração é uma aplicação que valida os endpoints de uma API de
                                gerenciamento de produtos, utilizando Spring Boot, JUnit 5 e MockMvc para garantir o
                                funcionamento correto das funcionalidades, como criação e listagem de produtos, através
                                de
                                testes automatizados.</p>
                            <div className="buttons">
                                <button><a href="https://github.com/EzequielSR/Produto-API_Testes_Integracao"
                                           target="_blank">Github</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="../../public/assets/ip-address-tracker.png" alt="Descrição da imagem"/>
                        <div className="card-about">
                            <h2>IP Address Tracker</h2>
                            <span>React, JavaScript, Node.js, Express, LeafletJS, Axios</span>
                            <p>IP Address Tracker é uma aplicação web que permite a pesquisa e visualização de
                                informações de IP
                                e domínios, mostrando dados como localização, fuso horário e ISP, além de exibir as
                                coordenadas
                                em um mapa interativo. Utiliza React no frontend, Node.js e Express no backend, com
                                integração à
                                API IPify.</p>
                            <div className="buttons">
                                <button><a href="https://ip-address-tracker-master-virid-nine.vercel.app/"
                                           target="_blank">Acessar</a>
                                </button>
                                <button><a href="https://github.com/EzequielSR/ip-address-tracker-master"
                                           target="_blank">Github</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ProjetosCard;