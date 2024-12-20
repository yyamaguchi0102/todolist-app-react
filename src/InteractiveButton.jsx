import React, { useState } from 'react';

const InteractiveButton = ({ children, onClick }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
    };

    return (
        <button
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg relative overflow-hidden transition-transform duration-200"
            style={{
                transform: isHovering ? `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)` : 'translate(0, 0)',
            }}
        >
            {children}
            <span
                className={`absolute inset-0 bg-blue-600 rounded-lg transition-transform duration-300 ${
                    isHovering ? 'opacity-50' : 'opacity-0'
                }`}
                style={{
                    transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
                }}
            ></span>
        </button>
    );
};

export default InteractiveButton;