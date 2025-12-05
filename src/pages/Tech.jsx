import Navbar from '../components/Navbar';
import EventCard from '../components/EventCard';
import '../styles/tech.css';

function Tech() {
  const events = [
    { id: 1, title: 'MACHINE LEARNING HACKATHON', date: 'January 8-9, 2026', img: 'hack.jpg', desc: 'Make machines think and perform like intelligent humans. Showcase your AI/ML skills in this intensive hackathon.' },
    { id: 2, title: 'CODING CONTEST', date: 'January 8-9, 2026', img: 'code.jpg', desc: 'This coding contest is the perfect opportunity to test your programming skills against the best.' },
    { id: 3, title: 'PROJECT EXPO', date: 'January 8-9, 2026', img: 'project.jpg', desc: 'Platform for students, entrepreneurs, and innovators to showcase groundbreaking ideas and projects.' },
    { id: 4, title: 'PAPER PRESENTATION', date: 'January 8-9, 2026', img: 'paper.jpg', desc: 'Present your research and make complex ideas simple. Share knowledge with the academic community.' },
    { id: 5, title: 'POSTER PRESENTATION', date: 'January 8-9, 2026', img: 'poster.jpg', desc: 'Visual communication at its finest. Design and present compelling research posters.' }
  ];

  return (
    <div className="tech-page">
      <Navbar showBack={true} />
      
      <div className="page-header">
        <h1 className="page-title">Tech Events</h1>
        <p className="page-description">Explore cutting-edge technology competitions and exhibitions</p>
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

export default Tech;
