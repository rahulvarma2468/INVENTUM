import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import '../styles/index.css';

const Layout = ({ children }) => {
    const canvasRef = useRef(null);
    const location = useLocation();

    // Upside Down Particles Effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.1;
                // Add color variation: Mostly ash/grey, rare red spores
                this.color = Math.random() > 0.9 ? 'rgba(255, 0, 0, 0.6)' : `rgba(180, 180, 180, ${this.opacity})`;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < 100; i++) { // Increased particle count for better atmosphere
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Determine if we should show the "Back" button on Navbar
    const showBack = location.pathname !== '/' && location.pathname !== '/dashboard';

    return (
        <div className="app-layout">
            <div className="ambient-fog"></div>
            <div className="scanlines"></div>
            <div className="vignette"></div>
            <canvas ref={canvasRef} className="particles-canvas" />

            <Navbar showBack={showBack} />

            <main className="main-content">
                {children}
            </main>
        </div>
    );
};

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired
};
