import "../styles/HeroSection.css"
import heroIMG from "../assets/heroIMG.jpg"

export default function HeroSection() {
  return (
    <div className="hero">
      <img className="heroImg" src={heroIMG} alt="my profile" />
      
      <div>
        <h1>Hi, I'm Ruhi</h1>
      </div>

    </div> 
  );
} 