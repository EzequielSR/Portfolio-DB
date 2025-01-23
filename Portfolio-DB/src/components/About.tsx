import Skills from "./Skills.tsx";
import "../css/styles.css";
import "../css/mediaQuery.css";

const About: React.FC = () => {
    return (
        <section className="container">
            <div className="about">
                <h2>Sobre mim</h2>
                <p>Sou trainee de Desenvolvimento de Software na DBServer, com 2 anos de experiência como freelancer em
                    desenvolvimento front-end. Estudo Análise e Desenvolvimento de Sistemas, sempre buscando aplicar e
                    aprimorar minhas habilidades em tecnologias como Node.js, Bootstrap e Java. Ao longo da minha
                    trajetória, desenvolvi uma forte capacidade de criar soluções inovadoras e de alta qualidade,
                    focadas na
                    experiência do usuário e na entrega eficiente em resultados. Meu objetivo é continuar evoluindo como
                    desenvolvedor, utilizando as melhores práticas e técnicas para criar sistemas escaláveis e de fácil
                    manutenção.</p>
            </div>
            <Skills/>
        </section>
    )
}

export default About;