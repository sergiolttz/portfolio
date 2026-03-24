import ProjectCard from "./ProjectCard";
import { useLanguage } from "../context/LanguageContext"; 

const baseUrl = import.meta.env.BASE_URL;

const devProjectsData = [
    { slug: "JCleaners", image: `${baseUrl}projects/jcleaners.png` },
    { slug: "TasteBook", image: `${baseUrl}projects/tastebook.png` },
    { slug: "Chemiconsult", image: `${baseUrl}projects/chemiconsult.png` },
];

const designProjectsData = [
    { slug: "Sport", image: `${baseUrl}projects/sport.png` },
    { slug: "Movida", image: `${baseUrl}projects/movida.png` },
    { slug: "JGlobal", image: `${baseUrl}projects/jglobal.png` },
];

export default function Projects() {
    const { getText } = useLanguage();

    return (
        <section id="projects" className="section projects-section">
            <h2>{getText('projects_main_title')}</h2>

            <h3 className="projects-category">{getText('projects_category_dev')}</h3>
            <div className="projects-grid">
                {devProjectsData.map((p, i) => (
                    <ProjectCard key={i} {...p} delay={i * 0.1} />
                ))}
            </div>

            <h3 className="projects-category">{getText('projects_category_design')}</h3>
            <div className="projects-grid">
                {designProjectsData.map((p, i) => (
                    <ProjectCard key={i} {...p} delay={i * 0.1} />
                ))}
            </div>
        </section>
    );
}