import "../css/styles.css";
import "../css/mediaQuery.css";
import logoFooter from "../../public/assets/d+b%20dark%20blue%20-%20horizontal%20(1)%201.png";

const Footer = () => (
    <footer>
        <div className="footer-container">
            <img
                src={logoFooter}
                alt="Logo do rodapé"
            />
        </div>
    </footer>
)

export default Footer;