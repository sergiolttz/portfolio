import Card from "./Card";
import Button from "./Button";

export default function Contact() {
    return (
        <section id="contact" className="section">
            <Card className="contact-section" rotation={2}>
                <div className="contact-card">
                    <h2>Contacto</h2>
                    <p className="subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <form className="contact-form">
                        <div className="form-group-inline">
                            <input type="text" placeholder="Nombre" required />
                            <input type="email" placeholder="Email" required />
                        </div>
                        <textarea placeholder="Mensaje" rows="5" required></textarea>
                        <Button type="submit">Enviar</Button>
                    </form>
                </div>
            </Card>
        </section>
    );
}
