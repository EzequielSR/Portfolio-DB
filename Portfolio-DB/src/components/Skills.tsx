import "../css/styles.css";
import "../css/mediaQuery.css"

const Skills: React.FC = () => {
    return (
        <div className="skills">
            <h2>Habilidades</h2>
            <div className="backEnd-skills">
                <h3>Back end</h3>
                <div className="backEnd-container">
                    <div className="ul-skills-backend">
                        <ul>
                            <li><span>JAVA</span></li>
                            <li>SQL</li>
                            <li>SPRING BOOT</li>
                            <li>POSTGRESQL</li>
                        </ul>
                    </div>
                    <div className="imgs-skills">
                        <ul>
                            <li><img src="/status/Frame%205.png" alt="Imagem status"/></li>
                            <li><img src="../../public/status/Frame%204.png" alt="Imagem status"/></li>
                            <li><img src="../../public/status/Frame%207.png" alt="Imagem status"/></li>
                            <li><img src="../../public/status/Frame%205.png" alt="Imagem status"/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="frontEnd-skills">
                <h3>Front end</h3>
                <div className="frontEnd-container">
                    <div className="ul-skills-frontend">
                        <ul>
                            <li><span>HTML</span></li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>JQUERY</li>
                            <li>REACT</li>
                            <li>NODE</li>
                        </ul>
                    </div>
                    <div className="imgs-skills">
                        <ul>
                            <li><img src="../../public/status/Frame%203.png" alt="Imagem status"/></li>
                            <li><img src="../../public/status/Frame%203.png" alt="Imagem status"/></li>
                            <li><img src="../../public/status/Frame%204.png" alt="Imagem status"/></li>
                            <li><img src="../../public/status/Frame%204.png" alt="Imagem status"/></li>
                            <li><img src="../../public/status/Frame%205.png" alt="Imagem status"/></li>
                            <li><img src="../../public/status/Frame%204.png" alt="Imagem status"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;