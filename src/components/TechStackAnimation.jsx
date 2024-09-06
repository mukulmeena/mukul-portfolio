import React, { useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

const TechStackAnimation = ({ logos }) => {
  const canvasRef = useRef(null);

  const particles = useMemo(
    () =>
      logos.map(() => ({
        x: Math.random(),
        y: Math.random(),
        size: 30 + Math.random() * 50,
        speedX: (Math.random() - 0.5) * 0.0015,
        speedY: (Math.random() - 0.5) * 0.0015,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      })),
    [logos]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let images = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const loadImages = () => {
      return Promise.all(
        logos.map((logo) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = logo;
          });
        })
      );
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    loadImages().then((loadedImages) => {
      images = loadedImages;
      drawParticles();
    });

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        ctx.save();
        ctx.translate(
          particle.x * canvas.width + particle.size / 2,
          particle.y * canvas.height + particle.size / 2
        );
        ctx.rotate(particle.rotation);
        ctx.drawImage(
          images[index],
          -particle.size / 2,
          -particle.size / 2,
          particle.size,
          particle.size
        );
        ctx.restore();

        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;

        if (particle.x < 0 || particle.x > 1) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > 1) particle.speedY *= -1;
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [logos, particles]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 z-[-1]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1 }}
    />
  );
};

export default TechStackAnimation;
