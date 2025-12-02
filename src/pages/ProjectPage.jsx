import { useParams, Link } from "react-router-dom";
import { projects } from "../data/Projects";
import TechIcons from "../components/TechIcons";
import ProjectPageCard from "../components/ProjectPageCard";
import Button from "../components/Button";

export default function ProjectPage() {
    const { slug } = useParams();

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <section className="projectpage section">
                <h2>Proyecto no encontrado</h2>
            </section>
        );
    }

    return (
        <section className="projectpage section">
            <h1 className="projectpage-title">{project.title}</h1>
            <p className="projectpage-description">{project.description}</p>
            <h3 className="projectpage-tools-title">Herramientas utilizadas</h3>
            <TechIcons items={project.tools} className="projectpage-tools" />
            <div className="projectpage-cards">
                {project.cards?.map((card, i) => (
                    <ProjectPageCard
                        key={i}
                        title={card.title}
                        text={card.text}
                        image={card.image}
                        video={card.video}
                    />
                ))}
            </div>
            <div className="projectpage-buttons">
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-wrapper"
                    >
                        <Button>
                            Ver Proyecto
                        </Button>
                    </a>
                )}
                {project.repo && (
                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-wrapper"
                    >
                        <Button>
                            Ver Repositorio
                        </Button>
                    </a>
                )}
            </div>
        </section>
    );
}
