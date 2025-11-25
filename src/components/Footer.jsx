export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <a href="#">
                    <img src="src/assets/images/logo_white.png" alt="Logo" />
                </a>
            </div>

            <div className="social-links">
                <a href="https://www.linkedin.com/in/sergiolttz/" className="social-box" aria-label="LinkedIn">
                    <img src="src/assets/images/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://github.com/sergiolttz/" className="social-box" aria-label="GitHub">
                    <img src="src/assets/images/github.png" alt="GitHub"/>
                </a>
            </div>
        </footer>
    );
}
