import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import '../styles/Hero3D.css';

const Hero3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const numParticles = Math.floor(window.innerWidth * 0.05);
      
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          alpha: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
        ctx.fill();

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    resize();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="hero-container">
      <canvas ref={canvasRef} className="particle-canvas" />
      
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typewriter
            options={{
              strings: ['AI That Redefines Editing.', 'From Blurred to Brilliant.'],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 50,
              cursor: '|',
              wrapperClassName: 'typewriter-wrapper'
            }}
          />
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Focus on creativity. Let AI handle the rest.
        </motion.p>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            duration: 2,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <span>Discover the magic below</span>
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </div>

      <div className="demo-image">
        <div className="image-container">
          <img 
            src="/demo-blurred.jpg" 
            alt="Blurred" 
            className="blurred" 
          />
          <img 
            src="/demo-sharp.jpg" 
            alt="Sharp" 
            className="sharp" 
          />
        </div>
        <div className="hover-hint">Hover to preview</div>
      </div>
    </div>
  );
};

export default Hero3D;
