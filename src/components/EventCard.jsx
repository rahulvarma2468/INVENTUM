import { useState } from 'react';
import './EventCard.css';

function EventCard({ title, date, img, desc, delay = 0, coordinators = [], registrationLink = '' }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleRegisterClick = (e) => {
    e.stopPropagation();
    if (registrationLink) {
      window.open(registrationLink, '_blank');
    }
  };

  return (
    <div 
      className="event-card" 
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="event-card-image">
        <img 
          src={`/images/${img}`} 
          alt={title}
          loading="lazy"
          fetchpriority="low"
          decoding="async"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23111" width="400" height="300"/%3E%3Ctext fill="%23ff0000" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24"%3EImage%3C/text%3E%3C/svg%3E';
          }}
        />
        <div className="event-card-overlay">
          <div className="event-card-badge">{date}</div>
        </div>
      </div>
      
      <div className={`event-card-content ${isExpanded ? 'expanded' : ''}`}>
        <h3 className="event-card-title">{title}</h3>
        <p className="event-card-description">{desc}</p>
        
        {isExpanded && (
          <>
            {coordinators.length > 0 && (
              <div className="event-coordinators">
                <h4 className="coordinators-title">Event Coordinators</h4>
                <div className="coordinators-list">
                  {coordinators.map((coordinator, index) => (
                    <div key={index} className="coordinator-card">
                      <div className="coordinator-name">{coordinator.name}</div>
                      <a href={`tel:${coordinator.phone}`} className="coordinator-phone">
                        📞 {coordinator.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {registrationLink && (
              <button 
                className="register-button" 
                onClick={handleRegisterClick}
              >
                <span className="register-icon">📝</span>
                <span className="register-text">Register Now</span>
              </button>
            )}
          </>
        )}
        
        <div className="event-card-footer">
          <span className="expand-hint">
            {isExpanded ? '▲ Click to collapse' : '▼ Click to see details'}
          </span>
        </div>
      </div>
      
      <div className="event-card-glow"></div>
    </div>
  );
}

export default EventCard;
