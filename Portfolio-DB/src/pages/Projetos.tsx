import {Header} from "../components/Header.tsx";
import Footer from "../components/Footer";
import ProjetosCard from "../components/ProjetosCard";

const Projetos: React.FC = () => {
    return (
        <>
            <Header />
            <ProjetosCard/>
            <Footer />
        </>
    )
}

export default Projetos;