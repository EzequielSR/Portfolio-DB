import {Link} from "react-router-dom";
import "../css/styles.css";
import "../css/mediaQuery.css";

const Header: React.FC = () => (
    <header>
        <nav id="navegacao">
            <a href="https://db.tec.br/" target="_blank" rel="noopener noreferrer">
                <img
                    id="logo"
                    src="../../public/assets/Logo DB dark blue 1.png"
                    alt="Logo da empresa DB"
                />
            </a>
            <button id="menu-toggle" aria-label="Abrir Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul id="links-navegacao">
                <li>
                    <Link to="/">Sobre</Link>
                </li>
                <li>
                    <a
                        href="https://drive.google.com/file/d/1Ip7OCF5d05QAan3S6SQk-pYALkzwoUNV/view"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Currículo
                    </a>
                </li>
                <li>
                    <Link to="/projects">Projetos</Link>
                </li>
            </ul>
        </nav>
        <nav id="redes">
            <ul id="redes-sociais">
                <li>
                    <a href="https://github.com/EzequielSR" target="_blank" rel="noopener noreferrer">
                        <img src="../../public/assets/Vector.png" alt="Logo do GitHub"/>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/ezequiel-de-souza-rodrigues-25b538227/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="../../public/assets/Vector (1).png" alt="Logo do Linkedin"/>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
)

export {Header};