import Card from "./Card";
import Button from "./Button";

export default function ProjectCard({ title, description }) {
    return (
        <Card rotation={2} className="project-card">
            <div className="project-image-placeholder"></div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="card-footer">
                <Button>Ver más</Button>
                <div className="card-icon">→</div>
            </div>
        </Card>
    );
}
