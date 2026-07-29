import '../styles/ContactSection.css';

import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import instagram from '../assets/instagram.svg';
import telegram from '../assets/telegram.svg';

export default function ContactSection() {
    return (
        <div id='contact' className='contact'>
            <h1>Get In Touch</h1>
            <p>Have a project in mind or looking for a developer? Feel free to reach out. I'm always happy to connect, collaborate, and learn from new opportunities.</p>

            <div className='social-icons'>
                <a href="https://www.linkedin.com/in/ruhama-mekonen-79655a389" target='_blank' rel='noopener noreferrer'>
                    <img src={linkedin} alt="LinkedIn" />
                </a>
                <a href="https://github.com/Ruhi-mek" target='_blank' rel='noopener noreferrer'>
                    <img src={github} alt="GitHub" />
                </a>
                <a href="https://www.instagram.com/ruhi.wawa?igsh=MWJwZDU1N213ZXR1bQ==" target='_blank' rel='noopener noreferrer'>
                    <img src={instagram} alt="Instagram" />
                </a>
                <a href="https://t.me/ruu_hi" target='_blank' rel='noopener noreferrer'>
                    <img src={telegram} alt="Telegram" />
                </a>
            </div>
        </div>
    );
}
