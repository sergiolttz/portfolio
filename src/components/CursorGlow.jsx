import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorGlow() {
    const springConfig = { damping: 25, stiffness: 120 }; 
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 200); 
            cursorY.set(e.clientY - 200);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener("mousemove", moveCursor);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="cursor-glow"
            style={{
                translateX: cursorX,
                translateY: cursorY,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovering ? 0.35 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        />
    );
}