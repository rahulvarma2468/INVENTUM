import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/dashboard.css';

function Dashboard() {
  const cards = [
    { path: '/technical-events', image: '/images/tech_event.png', title: 'Technical Events', desc: '6 Tech Competitions' },
    { path: '/non-technical-events', image: '/images/talent_expo.png', title: 'Non-Technical Events', desc: '4 Creative Challenges' },
    { path: '/memories', image: '/images/gallery.png', title: 'Memories', desc: 'Past Event Highlights' },
    { path: '/contact', image: '/images/help.png', title: 'Contact Us', desc: 'Get In Touch' }
  ];

  return (
    <div className="dashboard-page">
      <Navbar />
      
      <div className="dashboard-hero">
        <h1 className="dashboard-title">Explore INVENTUM 2K26</h1>
        <p className="dashboard-subtitle">Choose your journey through innovation and creativity</p>
      </div>

      <div className="l-container">
        {cards.map((card, index) => (
          <Link 
            key={card.path} 
            to={card.path} 
            className="dashboard-card-link"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="b-game-card">
              <div 
                className="b-game-card__cover" 
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="card-content-overlay">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
