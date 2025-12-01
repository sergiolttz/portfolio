import ProjectCard from "./ProjectCard";

export default function Projects() {
    const devProjects = [
        {
            title: "JCleaners",
            subtitle: "Landing page para un servicio de limpieza residencial y comercial.",
            slug: "JCleaners",
            image: "src/assets/projects/jcleaners.png",
            description: "Sitio web diseñado desde cero con enfoque en claridad, confianza y conversión: secciones de servicios, beneficios, testimonios, formulario de contacto y CTA estratégicos. Incluye diseño responsive, animaciones y una arquitectura CSS escalable con SASS.",
        },
        {
            title: "TasteBook",
            subtitle: "Plataforma web para descubrir, organizar y guardar recetas.",
            slug: "TasteBook",
            image: "src/assets/projects/tastebook.png",
            description: "Aplicación web desarrollada con Django que permite a los usuarios crear su propio libro de recetas digital. Incluye búsqueda, filtros por categorías, subida y edición de recetas con imagen, calificaciones, favoritos e impresión. Cuenta con autenticación y formularios dinámicos para gestionar ingredientes y pasos de manera sencilla.",
        },
        {
            title: "Chemiconsult",
            subtitle: "Página web corporativa para una empresa de consultoría y análisis químico.",
            description: "Sitio desarrollado en WordPress para una empresa que ofrece servicios de análisis químico y asesoría técnica para sectores como petróleo, alimentos, farmacéutica y más. Incluye presentación de servicios, blog integrado, formulario de contacto y cotización, optimización SEO y una estructura pensada para comunicar credibilidad y profesionalismo.",
            slug: "Chemiconsult",
            image: "src/assets/projects/chemiconsult.png"
        },
    ];


    const designProjects = [
        {
            title: "Diseño deportivo",
            subtitle: "Gráficos para ámbitos deportivos",
            description: "Creación de piezas visuales orientadas al ámbito deportivo: matchday graphics, pósters, composiciones, montajes y retoque fotográfico. Trabajo aplicado en proyectos personales, comisiones, medios deportivos y agencias de representación de futbolistas.",
            slug: "Sport",
            image: "src/assets/projects/sport.png"
        },
        {
            title: "Movida",
            subtitle: "Diseño para redes sociales y material publicitario",
            description: "Creación de piezas visuales para una empresa de salud y bienestar, incluyendo posts educativos, carruseles, promociones de servicios y un pendón publicitario. Diseños desarrollados en Photoshop siguiendo la identidad visual existente, con foco en comunicar servicios de rehabilitación, estimulación temprana y preparación física.",
            slug: "Movida",
            image: "src/assets/projects/movida.png"
        },
        {
            title: "JGlobal Services",
            subtitle: "Identidad visual y diseño para redes sociales",
            description: "Creación de la identidad visual para JGlobal Service, empresa de transporte y logística. El trabajo incluyó diseño de logo, definición de paleta de colores y tipografías, así como piezas para Instagram (posts e historias). Todas las piezas se desarrollaron desde cero en Photoshop, logrando una presencia digital más coherente, profesional y enfocada en transmitir confianza y puntualidad.",
            slug: "JGlobal",
            image: "src/assets/projects/jglobal.png"
        },
    ];



    return (
        <section id="projects" className="section projects-section">
            <h2>Proyectos</h2>

            <h3 className="projects-category">Desarrollo Web</h3>
            <div className="projects-grid">
                {devProjects.map((p, i) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </div>

            <h3 className="projects-category">Diseño Visual</h3>
            <div className="projects-grid">
                {designProjects.map((p, i) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
}
