import ProjectCard from "./ProjectCard";
import { useLanguage } from "../context/LanguageContext";
import { updateTheme } from "../utils/themeHelper"; 

const baseUrl = import.meta.env.BASE_URL;

const devProjectsData = [
    { 
        slug: "JCleaners", 
        image: `${baseUrl}projects/jcleaners.png`,
        theme: { primary: "#299aca", blob1: "#299aca", blob2: "#02285b", bg: "#010c1a" }
    },
    { 
        slug: "TasteBook", 
        image: `${baseUrl}projects/tastebook.png`,
        theme: { primary: "#c99456", blob1: "#596434", blob2: "#627522", bg: "#0c1502" }
    },
    { 
        slug: "Chemiconsult", 
        image: `${baseUrl}projects/chemiconsult.png`,
        theme: { primary: "#36b7dd", blob1: "#36b7dd", blob2: "#1393ea", bg: "#02080d" }
    },
];

const designProjectsData = [
    { 
        slug: "Sport", 
        image: `${baseUrl}projects/sport.png`,
        theme: { primary: "#e70079", blob1: "#e70079", blob2: "#e70079", bg: "#110009" }
    },
    { 
        slug: "Movida", 
        image: `${baseUrl}projects/movida.png`,
        theme: { primary: "#c3131b", blob1: "#00bbe0", blob2: "#0199cd", bg: "#000a0d" }
    },
    { 
        slug: "JGlobal", 
        image: `${baseUrl}projects/jglobal.png`,
        theme: { primary: "#2896c5", blob1: "#2896c5", blob2: "#135b79", bg: "#011826" }
    },
];

export default function Projects() {
    const { getText } = useLanguage();

    return (
        <section id="projects" className="section projects-section">
            <h2>{getText('projects_main_title')}</h2>

            <h3 className="projects-category">{getText('projects_category_dev')}</h3>
            <div className="projects-grid">
                {devProjectsData.map((p, i) => (
                    <ProjectCard 
                        key={i} 
                        {...p} 
                        delay={i * 0.1}
                        onMouseEnter={() => updateTheme(p.theme)} 
                        onMouseLeave={() => updateTheme(null)} 
                    />
                ))}
            </div>

            <h3 className="projects-category">{getText('projects_category_design')}</h3>
            <div className="projects-grid">
                {designProjectsData.map((p, i) => (
                    <ProjectCard 
                        key={i} 
                        {...p} 
                        delay={i * 0.1}
                        onMouseEnter={() => updateTheme(p.theme)} 
                        onMouseLeave={() => updateTheme(null)} 
                    />
                ))}
            </div>
        </section>
    );
}