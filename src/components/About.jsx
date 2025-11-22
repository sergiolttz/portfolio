import Card from "./Card";

export default function About() {
    return (
        <section id="about" className="section about-me-section">
            <h2>Sobre Mí</h2>

            <Card className="about-content" rotation={2}>
                <div className="about-text-block">
                    <p className="lorem-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <p className="lorem-text">
                        Experiencia Resumen<br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    <p className="lorem-text">
                        Tecnologías<br />
                        HTML, CSS/SASS, JavaScript, React.
                    </p>

                    <div className="tech-icons">
                        <span className="tech-tag">HTML</span>
                        <span className="tech-tag">CSS</span>
                        <span className="tech-tag">React</span>
                    </div>
                </div>

                {/* placeholder o después será una imagen */}
                <div className="about-image-placeholder"></div>
            </Card>
        </section>
    );
}
