import ProjectCard from "./ProjectCard";
import { useLanguage } from "../context/LanguageContext"; 


const devProjectsData = [
    { slug: "JCleaners", image: "/projects/jcleaners.png" },
    { slug: "TasteBook", image: "/projects/tastebook.png" },
    { slug: "Chemiconsult", image: "/projects/chemiconsult.png" },
];

const designProjectsData = [
    { slug: "Sport", image: "/projects/sport.png" },
    { slug: "Movida", image: "/projects/movida.png" },
    { slug: "JGlobal", image: "/projects/jglobal.png" },
];


export default function Projects() {
    const { getText } = useLanguage();

    return (
        <section id="projects" className="section projects-section">
            <h2>{getText('projects_main_title')}</h2>

            <h3 className="projects-category">{getText('projects_category_dev')}</h3>
            <div className="projects-grid">
                {devProjectsData.map((p, i) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </div>

            <h3 className="projects-category">{getText('projects_category_design')}</h3>
            <div className="projects-grid">
                {designProjectsData.map((p, i) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
}