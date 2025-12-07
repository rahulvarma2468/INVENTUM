import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/dashboard.css';

function Dashboard() {
  const cards = [
    { path: '/technical-events', image: '/images/tech_event.png', title: 'Technical Events', desc: '6 Tech Competitions' },
    { path: '/non-technical-events', image: '/images/talent_expo.png', title: 'Non-Technical Events', desc: '4 Creative Challenges' },
    { path: '/memories', image: '/images/gallery.png', title: 'Memories', desc: 'Past Event Highlights' },
    { path: '/contact', image: '/images/help.png', title: 'Contact Us', desc: 'Get In Touch' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-hero">
        <h1 className="dashboard-title">Explore INVENTUM 2K26</h1>
        <p className="dashboard-subtitle">Choose your journey through innovation and creativity</p>
      </div>

      <motion.div
        className="l-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {cards.map((card) => (
          <motion.div key={card.path} variants={cardVariants}>
            <Link to={card.path} className="dashboard-card-link">
              <div className="b-game-card">
                <div className="b-game-card__cover">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                  />
                  <div className="card-content-overlay">
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Dashboard;
