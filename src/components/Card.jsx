import { useRef, useEffect } from "react";

export default function Card({ rotation = 2, children, className = "" }) {
    const cardRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        const content = contentRef.current;

        if (!card || !content) return;

        const isTouch =
            "ontouchstart" in window || navigator.maxTouchPoints > 0;

        if (isTouch) return;

        // --- Movimiento 3D ---
        const handleMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateY = (rotation * (x - centerX)) / centerX;
            const rotateX = (-rotation * (y - centerY)) / centerY;

            content.style.transform = `
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
            `;
        };

        const handleLeave = () => {
            content.style.transform = "rotateX(0) rotateY(0)";
            content.style.transition = "transform 0.5s ease";

            setTimeout(() => {
                content.style.transition = "";
            }, 500);
        };

        card.addEventListener("mousemove", handleMove);
        card.addEventListener("mouseleave", handleLeave);

        return () => {
            card.removeEventListener("mousemove", handleMove);
            card.removeEventListener("mouseleave", handleLeave);
        };
    }, [rotation]);

    // --- Efecto Ripple (delegado al contenedor) ---
    const handleRipple = (e) => {
        const target = e.target.closest(".card-button, .btn-primary");
        if (!target) return;

        const rect = target.getBoundingClientRect();
        const ripple = document.createElement("span");
        ripple.className = "ripple";

        const size = Math.max(rect.width, rect.height) * 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

        target.appendChild(ripple);

        setTimeout(() => ripple.remove(), 500);
    };

    return (
        <div
            ref={cardRef}
            className={`card ${className}`}
            onClick={handleRipple}
        >
            <div ref={contentRef} className="card-content">
                {children}
            </div>
        </div>
    );
}