import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

function Index() {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const targetDate = new Date('Jan 8,2026 8:40:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const secondsLeft = (targetDate - now) / 1000;

      const days = parseInt(secondsLeft / 86400);
      const hours = parseInt((secondsLeft % 86400) / 3600);
      const minutes = parseInt((secondsLeft % 3600) / 60);
      const seconds = parseInt(secondsLeft % 60);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stranger-container">
      <div className="logo-container">
        <img 
          className="universe-logo" 
          src="/images/final logo2.png" 
          alt="Inventum logo" 
        />
      </div>

      <div className="title-wrapper">
        <span className="h12 cyberpunk-title">INVENTUM</span>
      </div>
      
      <span className="year-badge">2K26</span>
      
      <div className="countdown-wrapper">
        <h1 id="countdown" className="countdown-text">{countdown}</h1>
        <p className="countdown-label">Until the Event Begins</p>
      </div>

      <div className="event-info">
        <div className="date-badge">
          <span className="date-icon">📅</span>
          <span className="date-text">JANUARY 8 & 9, 2026</span>
        </div>
        
        <p className="venue-text">
          Anil Neerukonda Institute Of Technology and Sciences
        </p>
      </div>

      <div className="action-buttons">
        <Link className="btn-stranger btn-primary" to="/dashboard">
          <span className="btn-text">ENTER THE UPSIDE DOWN</span>
          <span className="btn-glow"></span>
        </Link>
        
        <Link className="btn-stranger btn-secondary" to="/memories">
          <span className="btn-text">VIEW MEMORIES</span>
          <span className="btn-glow"></span>
        </Link>
      </div>

      <div className="scroll-indicator">
        <span>↓</span>
      </div>
    </div>
  );
}

export default Index;
