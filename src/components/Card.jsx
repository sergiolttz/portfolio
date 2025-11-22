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

    return (
        <div
            ref={cardRef}
            className={`card ${className}`}
        >
            <div ref={contentRef} className="card-content">
                {children}
            </div>
        </div>
    );
}