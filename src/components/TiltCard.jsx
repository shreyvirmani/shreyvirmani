import React, { useRef, useState } from 'react';

export default function TiltCard({ children, className = '', glowColor = 'rgba(56, 189, 248, 0.15)' }) {
  const cardRef = useRef(null);
  const [rotations, setRotations] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max tilt 10 deg
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotations({ x: rotateX, y: rotateY });
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotations({ x: 0, y: 0 });
    setGlarePosition(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
      className="relative w-full transition-transform duration-200 ease-out"
    >
      <div
        style={{
          transform: isHovered
            ? `rotateX(${rotations.x}deg) rotateY(${rotations.y}deg) scale3d(1.02, 1.02, 1.02)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className={`relative overflow-hidden rounded-3xl ${className}`}
      >
        {/* Dynamic 3D Glare effect */}
        <div
          className="pointer-events-none absolute inset-0 -z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, ${glowColor} 0%, transparent 60%)`,
            opacity: glarePosition.opacity,
          }}
        />

        {/* Content container */}
        <div style={{ transform: 'translateZ(10px)' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

