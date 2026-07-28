import "../styles/HeroSection.css"
import heroIMG from "../assets/heroIMG.svg"

export default function HeroSection() {
  return (
    <div ID="home" className="hero">
      <img className="heroImg" src={heroIMG} alt="my profile" />
      
      <div className="hero-text">
        <h3>Hello, I'm Ruhama</h3>
        <h1>Full-Stack Developer | Software Engineer</h1>
        <p>
          I transform ideas into fast, reliable, and user-friendly web applications. From frontend interfaces to backend systems, I enjoy building complete solutions that make an impact.
        </p>
      </div>

    </div> 
  );
} 