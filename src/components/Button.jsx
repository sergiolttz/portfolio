import { useRef } from "react";

export default function Button({
    children,
    type = "button",
    className = "",
    ...props
}) {
    const btnRef = useRef(null);

    const createRipple = (e) => {
        const button = btnRef.current;
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 2;

        const ripple = document.createElement("span");
        ripple.className = "ripple";

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 500);
    };

    return (
        <button
            ref={btnRef}
            type={type}
            className={`btn-primary ${className}`}
            onClick={createRipple}
            {...props}
        >
            {children}
        </button>
    );
}