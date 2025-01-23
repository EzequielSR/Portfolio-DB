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
                    {/* Adicione mais cards conforme necessário */}
                </div>
            </section>
        </main>
    )
}

export default ProjetosCard;