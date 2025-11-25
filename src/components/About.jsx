import Card from "./Card";

export default function About() {
    return (
        <section id="about" className="section about-me-section">
            <h2>Sobre Mí</h2>

            <Card className="about-content" rotation={2}>
                <div className="about-text-block">
                    <p className="about-text">
                        Soy desarrollador frontend con experiencia creando interfaces y piezas visuales para proyectos web y digitales. Me gusta trabajar en la intersección del diseño y el código, construyendo experiencias claras, funcionales y visualmente consistentes. <br />
                        Me motiva transformar ideas en productos reales, cuidar los detalles y pensar en cómo las personas interactúan con cada elemento. Disfruto crear sitios web modernos, identidades visuales para proyectos y soluciones digitales que se sientan intuitivas y bien pensadas que no solo se vean bien, sino que realmente faciliten la experiencia del usuario.
                    </p>

                    <p className="about-text">
                        <br />
                        Puedo desarrollar landing pages, sitios web completos, sistemas de componentes, interfaces limpias y accesibles, pequeñas aplicaciones interactivas y soluciones visuales que complementen un proyecto digital. También puedo diseñar piezas gráficas como banners, contenido para redes, identidades visuales, prototipos  y otros elementos que conecten el aspecto visual con la experiencia del usuario.
                    </p>
                    <p className="about-text">
                        <br />
                        Herramientas | Desarrollo Web:
                    </p>
                    <div className="tech-icons">

                        <div className="tech-box">
                            <img src="src/assets/images/html5.png" alt="HTML" className="tech-icon" />
                        </div>

                        <div className="tech-box">
                            <img src="src/assets/images/css.png" alt="CSS" className="tech-icon" />
                        </div>

                        <div className="tech-box">
                            <img src="src/assets/images/javascript.png" alt="JavaScript" className="tech-icon" />
                        </div>

                        <div className="tech-box">
                            <img src="src/assets/images/react.png" alt="React" className="tech-icon" />
                        </div>

                        <div className="tech-box">
                            <img src="src/assets/images/python.png" alt="Python" className="tech-icon" />
                        </div>

                        <div className="tech-box">
                            <img src="src/assets/images/django.png" alt="Django" className="tech-icon" />
                        </div>

                    </div>

                    <p className="about-text">
                        <br />
                        Herramientas | Diseño:
                    </p>
                    <div className="tech-icons">
                        <div className="tech-box">
                            <img src="src/assets/images/photoshop.png" alt="Photoshop" className="tech-icon" />
                        </div>

                        <div className="tech-box">
                            <img src="src/assets/images/figma.png" alt="Figma" className="tech-icon" />
                        </div>
                    </div>

                </div>

                <div className="about-image-placeholder"></div>
            </Card>
        </section>
    );
}
