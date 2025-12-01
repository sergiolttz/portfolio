export default function TechIcons({ items = [] }) {
    return (
        <div className="tech-icons">
            {items.map((tech, index) => (
                <div
                    key={index}
                    className="tech-box"
                >
                    <img
                        src={tech.image}
                        alt={tech.name}
                        className="tech-icon"
                    />
                </div>
            ))}
        </div>
    );
}
