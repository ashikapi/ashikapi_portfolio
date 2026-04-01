import { useEffect, useState } from "react";
import star from "../images/wind-rose (1).png";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <img
      src={star}
      alt="cursor"
      className="fixed w-10 h-10 pointer-events-none z-50 transition-transform ease-out"
      style={{
        // transform: `translate(${position.x}px, ${position.y}px)`
        transform: `translate(${position.x - 24}px, ${position.y - 24}px)`
      }}
    />
  );
};

export default CustomCursor;