export default function Navbar() {
    return (
        <header className="header">
            <div className="navbar-container card">
                <div className="card-content navbar-content">
                    <div className="logo">
                        <a href="#"><img src="/assets/images/logo_white.png" alt="logo" /></a>
                    </div>
                    <nav className="navbar nav-desktop">
                        <a href="#about" className="nav-link">Sobre mí</a>
                        <a href="#projects" className="nav-link">Proyectos</a>
                        <a href="#contact" className="nav-link">Contacto</a>
                    </nav>
                    <div className="language-toggle lang-desktop">
                        <button className="lang-btn active" data-lang="es">ES</button>
                        <button className="lang-btn" data-lang="en">EN</button>
                    </div>
                    <div className="hamburger" aria-label="Abrir menú">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </div>
            <nav className="nav-menu-mobile">
                <div className="mobile-logo">
                    <a href="#"><img src="/assets/images/logo_white.png" alt="logo" /></a>
                </div>
                <div className="close-menu" aria-label="Cerrar menú">&times;</div>
                <ul className="nav-menu">
                    <li><a href="#about">Sobre mí</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
                <div className="mobile-lang-footer">
                    <div className="lang-mobile">
                        <button className="lang-btn active">ES</button>
                        <button className="lang-btn">EN</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
