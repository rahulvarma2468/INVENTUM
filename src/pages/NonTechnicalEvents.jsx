import Navbar from '../components/Navbar';
import EventCard from '../components/EventCard';
import '../styles/tech.css';

function NonTechnicalEvents() {
  const nonTechnicalEvents = [
    { 
      id: 1, 
      title: 'MR & MS INVENTUM', 
      date: 'January 8-9, 2026', 
      img: 'mr-ms-inventum.jpg', 
      desc: 'A talent-based personality contest to identify the most confident, creative, and charismatic students of the fest. Evaluates participants through Introduction Round, Talent Round, Situation/Pressure Round, and Q&A Round. Judges assess confidence and presentation, communication skills, creativity and talent, and problem-solving ability. Tests leadership qualities and on-spot thinking in this high-energy flagship event. Two winners crowned with prestigious titles of Mr. Inventum and Ms. Inventum.',
      coordinators: [
        { name: 'Arjun Mehta', phone: '+91 98765 43222' },
        { name: 'Kavya Reddy', phone: '+91 98765 43223' }
      ]
    },
    { 
      id: 2, 
      title: 'WORD TABOO', 
      date: 'January 8-9, 2026', 
      img: 'word-taboo.jpg', 
      desc: 'A fun vocabulary-based game where participants make teammates guess words without using restricted "taboo" words. Tests communication skills, quick thinking, and creativity while boosting teamwork under time pressure. Teams of 2 compete with one explaining and one guessing against the clock. Judged on number of correct guesses, rule adherence, and time efficiency. Improves verbal thinking in a fast-paced, energetic atmosphere. Winning team determined by maximum correct answers within time limit.',
      coordinators: [
        { name: 'Rohit Malhotra', phone: '+91 98765 43224' },
        { name: 'Anjali Singh', phone: '+91 98765 43225' }
      ]
    },
    { 
      id: 3, 
      title: 'HALF-ART', 
      date: 'January 8-9, 2026', 
      img: 'half-art.jpg', 
      desc: 'A creativity challenge where participants receive half of a drawing and complete the remaining portion in their own artistic style. Tests imagination, creativity, and drawing skills while observing attention to detail and symmetry. Participants complete the missing half within given time without digital tools (unless specified). Judged on creativity and originality, completeness, neatness and technique, and original interpretation. Top artworks shortlisted based on ability to seamlessly blend their style with the given half.',
      coordinators: [
        { name: 'Neha Joshi', phone: '+91 98765 43226' },
        { name: 'Akash Pandey', phone: '+91 98765 43227' }
      ]
    },
    { 
      id: 4, 
      title: 'AD-MAD SHOW', 
      date: 'January 8-9, 2026', 
      img: 'admad.jpg', 
      desc: 'A creative advertisement competition where teams create and perform funny, dramatic, or persuasive ads for given products/topics. Encourages creativity and marketing thinking while improving acting, scriptwriting, and presentation skills. Teams of 3–5 assigned product/topic on the spot with limited preparation time before performance. Judged on creativity and originality, humor and entertainment value, clarity of concept, and team coordination. Engages students in collaborative creative expression with best advertisement declared winner.',
      coordinators: [
        { name: 'Manish Kumar', phone: '+91 98765 43228' },
        { name: 'Riya Kapoor', phone: '+91 98765 43229' }
      ]
    }
  ];

  return (
    <div className="tech-page">
      <Navbar showBack={true} />
      
      <div className="page-header">
        <h1 className="page-title">Non-Technical Events</h1>
        <p className="page-description">Celebrate creativity, talent, and entertainment</p>
      </div>

      <div className="events-grid">
        {nonTechnicalEvents.map((event, index) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            img={event.img}
            desc={event.desc}
            coordinators={event.coordinators}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
}

export default NonTechnicalEvents;
