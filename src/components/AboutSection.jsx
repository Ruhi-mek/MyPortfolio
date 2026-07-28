import aboutImage from '../assets/aboutIMG.jpg';
import '../styles/AboutSection.css';

export default function AboutSection() {
    return(
        <div id="about" className="about">
           <img className = "about-img"  src={aboutImage} alt="About Me" />
           <div className="about-text">
                <h1>Who is Ruhama?</h1>
                <div className="divider">
                    <p>
                    I'm Ruhama Mekonen, a Software Engineering student at Addis Ababa University and an aspiring Full-Stack Developer passionate about building modern, user-centered web applications. I enjoy transforming ideas into practical solutions through clean, efficient, and maintainable code.
                    </p>

                    <p>
                        I'm currently deepening my expertise in advanced frontend development while building a solid foundation in backend technologies. I love solving problems, learning new technologies, and challenging myself through real-world projects that strengthen both my technical and creative skills.
                    </p>

                    <p>
                        Beyond academics, I actively learn through freeCodeCamp, Nexus Community, and other developer communities, where I continue to grow as both a programmer and a collaborative team member. My goal is to become a full-stack software engineer who creates scalable, impactful applications and never stops learning.
                    </p>
                </div>     
           </div>  
        </div>
    );
}