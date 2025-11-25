import Button from "./Button";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-title-block">
                    <h1>Sergio Lattanzio</h1>
                </div>
                <div className="hero-cta-block">
                    <p>Frontend Developer enfocado en construir interfaces modernas y centradas en el usuario.</p>
                    <Button>Ver proyectos</Button>
                </div>
            </div>
        </section>
    );
}
