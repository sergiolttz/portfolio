import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import TechIcons from "../components/TechIcons";
import ProjectPageCard from "../components/ProjectPageCard";
import Button from "../components/Button";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectPage() {
    const { getText } = useLanguage();
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);
    const translatedTitle = getText(`${slug}_title`);
    const translatedDescription = getText(`${slug}_description`);


    if (!project) {
        return (
            <section className="projectpage section">
                <h2>{getText('project_not_found')}</h2>
            </section>
        );
    }

    return (
        <section className="projectpage section">
            <h1 className="projectpage-title">{translatedTitle}</h1>
            <p className="projectpage-description">{translatedDescription}</p>
            <h3 className="projectpage-tools-title">{getText('tools_title')}</h3>
            <TechIcons items={project.tools} className="projectpage-tools" />
            <div className="projectpage-cards">
                {project.cards?.map((card, i) => (
                    <ProjectPageCard
                        key={i}
                        titleKey={card.title}
                        textKey={card.text}
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
                            {getText('button_view_project')}
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
                            {getText('button_view_repo')}
                        </Button>
                    </a>
                )}
            </div>
        </section>
    );
}