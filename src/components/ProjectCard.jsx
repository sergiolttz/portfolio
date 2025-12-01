import { Link } from "react-router-dom";
import Card from "./Card";
import Button from "./Button";

export default function ProjectCard({ title, subtitle, description, slug, image }) {
    return (
        <Card rotation={2} className="project-card">

            <div className="project-image">
                <img src={image} alt={title} />
            </div>

            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{description}</p>

            <div className="card-footer">
                <Link to={`/project/${slug}`} className="card-button">
                    <Button>Ver más</Button>
                </Link>
                <div className="card-icon">→</div>
            </div>
        </Card>
    );
}
