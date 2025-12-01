import Card from "./Card";
import TechIcons from "./TechIcons";


export default function About() {
    const devTools = [
        { name: "HTML", image: "src/assets/images/html5.png" },
        { name: "CSS", image: "src/assets/images/css.png" },
        { name: "JavaScript", image: "src/assets/images/javascript.png" },
        { name: "React", image: "src/assets/images/react.png" },
        { name: "Python", image: "src/assets/images/python.png" },
        { name: "Django", image: "src/assets/images/django.png" },
        { name: "Wordpress", image: "src/assets/images/wordpress.png" }

    ];

    const designTools = [
        { name: "Photoshop", image: "src/assets/images/photoshop.png" },
        { name: "Figma", image: "src/assets/images/figma.png" }
    ];


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
                    <p className="about-text-tech">
                        <br />
                        Herramientas | Desarrollo Web:
                    </p>
                    <TechIcons items={devTools} />

                    <p className="about-text-tech">
                        <br />
                        Herramientas | Diseño:
                    </p>
                    <TechIcons items={designTools} />

                </div>
            </Card>
        </section>
    );
}
