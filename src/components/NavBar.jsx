import '../styles/NavBar.css';

export default function NavBar() {
    return (
        <div className="navbar">

            <div className="nav-brand">
                <img className="logo" src="/Logo.svg" alt="Logo" />
                <h3>
                    RUHAMA  MEKONEN
                </h3>
            </div>

            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
}    