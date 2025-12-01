import Card from "./Card";

export default function ProjectPageCard({ title, text, image }) {
    return (
        <Card className="projectpage-card" rotation={2}>
            <div className="projectpage-card-content">
                <h3 className="projectpage-card-title">{title}</h3>
                <p className="projectpage-card-text">{text}</p>

                {image && (
                    <div className="projectpage-card-image">
                        <img src={image} alt={title} />
                    </div>
                )}
            </div>
        </Card>
    );
}
