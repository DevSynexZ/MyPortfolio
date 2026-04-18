"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{ x: mouse.x - 12, y: mouse.y - 12 }}
      transition={{ type: "spring", damping: 20, stiffness: 200, mass: 0.5 }}
    />
  );
}