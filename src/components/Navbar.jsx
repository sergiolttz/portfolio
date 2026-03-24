import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { HashLink } from 'react-router-hash-link'; 
import LanguageToggle from "./LanguageToggle";
import Card from "./Card";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
    const { getText } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const baseUrl = import.meta.env.BASE_URL;

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (menuOpen) {
                    setIsVisible(true);
                    return;
                }
                if (window.scrollY > lastScrollY && window.scrollY > 100) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };
        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY, menuOpen]);

    return (
        <header className={`header ${!isVisible ? "header--hidden" : ""}`}> 
            
            <Card
                className={`navbar-container ${menuOpen ? "hide-navbar" : ""}`}
                rotation={2}
            >
                <div className="navbar-content">

                    <div className="logo">
                        <HashLink smooth to="/#top" onClick={closeMenu}>
                            <img src={`${baseUrl}images/logo_white.png`} alt="logo" />
                        </HashLink>
                    </div>

                    <nav className="navbar nav-desktop">
                        <HashLink smooth to="/#about" className="nav-link">
                            {getText('nav_about')}
                        </HashLink>
                        <HashLink smooth to="/#projects" className="nav-link">
                            {getText('nav_projects')}
                        </HashLink>
                        <HashLink smooth to="/#contact" className="nav-link">
                            {getText('nav_contact')}
                        </HashLink>
                    </nav>

                    <div className="lang-desktop">
                        <LanguageToggle variant="desktop" />
                    </div>

                    <div
                        className={`hamburger ${menuOpen ? "is-active" : ""}`}
                        aria-label={getText('nav_open_menu_aria')}
                        onClick={toggleMenu}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>

                </div>
            </Card>

            <nav className={`nav-menu-mobile ${menuOpen ? "active" : ""}`}>
                <div className="mobile-logo">
                    <HashLink smooth to="/#top" onClick={closeMenu}>
                        <img src={`${baseUrl}images/logo_white.png`} alt="logo" />
                    </HashLink>
                </div>

                <div
                    className="close-menu"
                    aria-label={getText('nav_close_menu_aria')}
                    onClick={closeMenu}
                >
                    &times;
                </div>

                <ul className="nav-menu">
                    <li>
                        <HashLink smooth to="/#about" onClick={closeMenu}>
                            {getText('nav_about')}
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#projects" onClick={closeMenu}>
                            {getText('nav_projects')}
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#contact" onClick={closeMenu}>
                            {getText('nav_contact')}
                        </HashLink>
                    </li>
                </ul>

                <div className="mobile-lang-footer">
                    <LanguageToggle variant="mobile" onChange={closeMenu} />
                </div>
            </nav>
        </header>
    );
}