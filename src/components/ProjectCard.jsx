import { Link } from "react-router-dom";
import Card from "./Card";
import Button from "./Button";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectCard({ slug, image, delay }) {
    const { getText } = useLanguage();

    const title = getText(`${slug}_title`);
    const subtitle = getText(`${slug}_subtitle`);
    const description = getText(`${slug}_description`);
    const buttonText = getText('project_card_button');

    return (
        <Card rotation={2} className="project-card" delay={delay}>

            <div className="project-image">
                <img src={image} alt={title} />
            </div>

            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{description}</p>

            <div className="card-footer">
                <Link to={`/project/${slug}`} className="card-button">
                    <Button>{buttonText}</Button>
                </Link>
                <div className="card-icon">→</div>
            </div>
        </Card>
    );
}