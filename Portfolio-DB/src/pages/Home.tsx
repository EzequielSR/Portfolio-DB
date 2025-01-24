import About from "../components/About.tsx";
import Profile from "../components/Profile.tsx";

export const Home: React.FC = () => {
    return (
        <>
            <main id="principal">
                <Profile/>
                <About/>
            </main>
        </>
    )
}
export default Home;