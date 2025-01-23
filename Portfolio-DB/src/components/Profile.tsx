const Profile: React.FC = () => {
    return (
            <section className="profile">
                <div className="profile-container">
                    <h1>
                        Olá, meu nome é <br/>
                        <span>Ezequiel</span>
                    </h1>
                    <p style={{ fontFamily: "'TT-Supermolot-Neue-Trial', sans-serif", fontSize: '36px' }}>
                        Sou trainee de desenvolvimento <br/>
                        de software na DBServer.
                    </p>
                </div>
                <img src="../../public/assets/profile-pic (4).png" alt="Foto do Ezequiel"/>
            </section>
    )
}

export default Profile;