import Navbar from '../components/Navbar';
import EventCard from '../components/EventCard';
import '../styles/tech.css';

function Talent() {
  const events = [
    { id: 1, title: 'AD MAD SHOW', date: 'January 8-9, 2026', img: 'admad.jpg', desc: 'Unleash your creativity! Craft compelling advertisements that capture hearts and minds.' },
    { id: 2, title: 'TALENT SHOW', date: 'January 8-9, 2026', img: 'talent.jpg', desc: 'A stage where creativity shines and talents are celebrated. Show us what makes you unique!' },
    { id: 3, title: 'PHOTOGRAPHY CONTEST', date: 'January 8-9, 2026', img: 'photo.jpg', desc: 'Capture moments, tell stories. Photography is the art people fail to put into words.' },
    { id: 4, title: 'ART AND CRAFT', date: 'January 8-9, 2026', img: 'art.jpg', desc: 'Transform imagination into reality. Art is not what you see, but what you make others see.' },
    { id: 5, title: 'REEL MAKING', date: 'January 8-9, 2026', img: 'reel.jpg', desc: 'Create viral content! Master the art of converting moments into engaging visual stories.' }
  ];

  return (
    <div className="tech-page">
      <Navbar showBack={true} />
      
      <div className="page-header">
        <h1 className="page-title">Talent Expo</h1>
        <p className="page-description">Showcase your artistic talents and creative expressions</p>
      </div>

      <div className="events-grid">
        {events.map((event, index) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            img={event.img}
            desc={event.desc}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
}

export default Talent;
