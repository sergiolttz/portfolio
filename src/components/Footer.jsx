import logo from "../assets/images/logo_white.png";
import linkedinlogo from "../assets/images/linkedin.png";
import githublogo from "../assets/images/github.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div>

            <div className="social-links">
                <a href="https://www.linkedin.com/in/sergiolttz/" className="social-box" aria-label="LinkedIn">
                    <img src={linkedinlogo} alt="LinkedIn" />
                </a>
                <a href="https://github.com/sergiolttz/" className="social-box" aria-label="GitHub">
                    <img src={githublogo} alt="GitHub" />
                </a>
            </div>
        </footer>
    );
}
