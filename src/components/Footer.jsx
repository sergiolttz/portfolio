const baseUrl = import.meta.env.BASE_URL;
import { HashLink } from 'react-router-hash-link'; 


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <HashLink smooth to="/#top">
                    <img src={`${baseUrl}images/logo_white.png`} alt="logo" />
                </HashLink>
            </div>

            <div className="social-links">
                <a href="https://www.linkedin.com/in/sergiolttz/" className="social-box" aria-label="LinkedIn">
                    <img src={`${baseUrl}/images/linkedin.png`} alt="LinkedIn" />
                </a>
                <a href="https://github.com/sergiolttz/" className="social-box" aria-label="GitHub">
                    <img src={`${baseUrl}/images/github.png`} alt="GitHub" />
                </a>
            </div>
        </footer>
    );
}