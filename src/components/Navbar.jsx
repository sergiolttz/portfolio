import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import Card from "./Card";
import logo from "../assets/images/logo_white.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="header">
            <Card
                className={`navbar-container ${menuOpen ? "hide-navbar" : ""}`}
                rotation={2}
            >
                <div className="navbar-content">

                    <div className="logo">
                        <a href="/" onClick={closeMenu}>
                            <img src={logo} alt="logo" />
                        </a>
                    </div>

                    <nav className="navbar nav-desktop">
                        <a href="/#about" className="nav-link">Sobre mí</a>
                        <a href="/#projects" className="nav-link">Proyectos</a>
                        <a href="/#contact" className="nav-link">Contacto</a>
                    </nav>

                    <div className="lang-desktop">
                        <LanguageToggle variant="desktop" />
                    </div>

                    <div
                        className={`hamburger ${menuOpen ? "is-active" : ""}`}
                        aria-label="Abrir menú"
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
                    <a href="/" onClick={closeMenu}>
                        <img src={logo} alt="logo" />
                    </a>
                </div>

                <div className="close-menu" aria-label="Cerrar menú" onClick={closeMenu}>
                    &times;
                </div>

                <ul className="nav-menu">
                    <li><a href="/#about" onClick={closeMenu}>Sobre mí</a></li>
                    <li><a href="/#projects" onClick={closeMenu}>Proyectos</a></li>
                    <li><a href="/#contact" onClick={closeMenu}>Contacto</a></li>
                </ul>

                <div className="mobile-lang-footer">
                    <LanguageToggle variant="mobile" onChange={closeMenu} />
                </div>
            </nav>
        </header>
    );
}
