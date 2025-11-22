import Card from "./Card";
import Button from "./Button";


export default function Projects() {
    const devProjects = [
        { title: "Proyecto 1", description: "Descripción Proyecto 1" },
        { title: "Proyecto 2", description: "Descripción Proyecto 2" },
        { title: "Proyecto 3", description: "Descripción Proyecto 3" },
    ];

    const designProjects = [
        { title: "Diseño 1", description: "Descripción Diseño 1" },
        { title: "Diseño 2", description: "Descripción Diseño 2" },
        { title: "Diseño 3", description: "Descripción Diseño 3" },
    ];

    const renderCardContent = ({ title, description }) => (
        <>
            <div className="project-image-placeholder"></div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="card-footer">
                <Button>Ver más</Button>
                <div className="card-icon">→</div>
            </div>
        </>
    );

    return (
        <section id="projects" className="section projects-section">
            <h2>Proyectos</h2>

            <h3 className="projects-category">Desarrollo Web</h3>
            <div className="projects-grid">
                {devProjects.map((p, i) => (
                    <Card key={i} rotation={2} className="project-card">
                        {renderCardContent(p)}
                    </Card>
                ))}
            </div>

            <h3 className="projects-category">Diseño Visual</h3>
            <div className="projects-grid">
                {designProjects.map((p, i) => (
                    <Card key={i} rotation={2} className="project-card">
                        {renderCardContent(p)}
                    </Card>
                ))}
            </div>
        </section>
    );
}
