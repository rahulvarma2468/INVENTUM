import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Landing.css';

function Index() {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const targetDate = new Date('Jan 8, 2026 08:40:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const secondsLeft = (targetDate - now) / 1000;

      if (secondsLeft < 0) {
        setCountdown("EVENT STARTED");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(secondsLeft / 86400);
      const hours = Math.floor((secondsLeft % 86400) / 3600);
      const minutes = Math.floor((secondsLeft % 3600) / 60);
      const seconds = Math.floor(secondsLeft % 60);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <motion.div
      className="landing-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="title-section" variants={itemVariants}>
        <div className="logo-wrapper">
          <img
            className="universe-logo"
            src="/images/final logo2.png"
            alt="Inventum logo"
          />
        </div>
        <div className="st-title-group">
          <div className="st-branding-bar"></div>
          <h1 className="main-title" data-text="INVENTUM">INVENTUM</h1>
          <div className="st-branding-bar"></div>
          <span className="year-badge">2K26</span>
        </div>
      </motion.div>

      <motion.div className="countdown-section" variants={itemVariants}>
        <div className="countdown-timer">{countdown}</div>
        <p className="countdown-label">Time Remaining Until Breach</p>
      </motion.div>

      <motion.div className="event-details" variants={itemVariants}>
        <div className="date-box">
          📅 JANUARY 8 & 9, 2026
        </div>
        <div className="venue-box">
          📍 Anil Neerukonda Institute Of Technology and Sciences
        </div>
      </motion.div>

      <motion.div className="cta-group" variants={itemVariants}>
        <Link to="/dashboard" className="btn-primary">
          Enter The Upside Down
        </Link>

        <a
          href="https://forms.gle/tRD3cj4Jg9Ma4F1aA"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Register Now
        </a>

        <Link to="/memories" className="btn-secondary">
          View Memories
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Index;
