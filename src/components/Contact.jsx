export default function Contact() {
    return (
        <section id="contact" className="section">
            <div className="contact-section card" data-rotation-factor="2">
                <div className="card-content">
                    <div className="contact-card">
                        <h2>Contacto</h2>
                        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <form className="contact-form">
                            <div className="form-group-inline">
                                <input type="text" placeholder="Nombre" required />
                                <input type="email" placeholder="Email" required />
                            </div>
                            <textarea placeholder="Mensaje" rows="5" required></textarea>
                            <button type="submit" className="btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
