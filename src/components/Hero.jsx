import Button from "./Button";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-title-block">
                    <h1>Sergio Lattanzio</h1>
                </div>
                <div className="hero-cta-block">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button>Botón de Acción</Button>
                </div>
            </div>
        </section>
    );
}
