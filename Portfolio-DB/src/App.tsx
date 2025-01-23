import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import Projetos from "./pages/Projetos.tsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/projetos" Component={Projetos} />
            </Routes>
        </Router>
    )
}

export default App;