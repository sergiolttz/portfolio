export default function ProjectCard({ title, description }) {
    return (
        <div className="project-card card" data-rotation-factor="2">
            <div className="card-content">
                <div className="project-image-placeholder"></div>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="card-footer">
                    <button className="card-button">Ver detalles</button>
                    <div className="card-icon">→</div>
                </div>
            </div>
        </div>
    );
}
