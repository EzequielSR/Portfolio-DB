import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import Projetos from "./pages/Projetos.tsx";
import {Header} from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
    return (
        <Router>
                <Header />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/projetos" Component={Projetos} />
            </Routes>
                <Footer />
        </Router>
    )
}

export default App;