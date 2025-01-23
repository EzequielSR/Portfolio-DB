import {Header} from "../components/Header.tsx";
import Footer from "../components/Footer";
import About from "../components/About.tsx";
import Profile from "../components/Profile.tsx";

export const Home: React.FC = () => {
    return (
        <>
            <Header/>
            <main id="principal">
                <Profile/>
                <About/>
            </main>
            <Footer/>
        </>
    )
}
export default Home;