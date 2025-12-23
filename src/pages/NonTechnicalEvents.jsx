import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import EventCard from '../components/EventCard';
import EventModal from '../components/EventModal';
import '../styles/tech.css';

function NonTechnicalEvents() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const nonTechnicalEvents = [
    {
      id: 1,
      title: 'Mr. & Ms. INVENTUM',
      date: 'January 8-9, 2026',
      img: '/images/mr-ms-inventum.jpg',
      desc: 'A talent-based personality contest to identify the most confident and creative students.',
      coordinators: [
        { name: 'Porapu Sai Manaswi (4/4 CSM-C)', phone: '+91 7396464847' },
        { name: 'S.Sai Surya Pranav (4/4 CSM - A)', phone: '+91 9182922215' },
        { name: 'K. Joshi (3/4 CSM - C)', phone: '+91 9640679445' },
        { name: 'Kella Swarnalatha (3/4 CSM - C)', phone: '+91 9063938286' }
      ],
      registrationLink: 'https://forms.gle/bDQsbdNRFYa79Zth9'
    },
    {
      id: 2,
      title: 'WORD TABOO',
      date: 'January 8-9, 2026',
      img: '/images/word-taboo.jpg',
      desc: 'A fun vocabulary-based game where participants make teammates guess words without using restricted terms.',
      coordinators: [
        { name: 'SriSanjana Kinjarapu (4/4 CSM-C)', phone: '+91 8885019450' },
        { name: 'Md Karishma (4/4 CSM - A)', phone: '+91 9346895722' },
        { name: 'M.Dimbu Siva Ram (3/4 CSM -B)', phone: '+91 8978644781' },
        { name: 'B.Harsha vardhan (3/4 CSM - B)', phone: '+91 8886937479' }
      ],
      registrationLink: 'https://forms.gle/5hA5H74pkAHkQHbL9'
    },
    {
      id: 3,
      title: 'HALF – ART',
      date: 'January 8-9, 2026',
      img: '/images/half-art.jpg',
      desc: 'A creativity challenge where participants receive half of a drawing and complete it.',
      coordinators: [
        { name: 'L. Yaswanth Sai (4/4 CSM - B)', phone: '+91 9392988049' },
        { name: 'R. Kavya Sri (4/4 CSM-B)', phone: '+91 7013238510' },
        { name: 'Dekkapati Manisha (3/4 CSM - A)', phone: '+91 9666633055' },
        { name: 'Janka Parthasai (3/4 CSM - B)', phone: '+91 9381314332' }
      ],
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSePS1slin-8vHOgcH_GajTk_0qYO3Q1R9J9lDZ7kA0xr5nCqQ/viewform?usp=sharing&ouid=100110760254831601712'
    },
    {
      id: 4,
      title: 'AD MAD SHOW',
      date: 'January 8-9, 2026',
      img: '/images/admad.jpg',
      desc: 'A creative advertisement competition where teams create and perform ads.',
      coordinators: [
        { name: 'U.Sri Mugdha (4/4 CSM-C)', phone: '+91 8639244240' },
        { name: 'Ch. Sabareesh (4/4 CSM - B)', phone: '+91 6300001531' },
        { name: 'P Lashya (3/4 CSM - C)', phone: '+91 7569782842' },
        { name: 'B.Devisriprasad (3/4 CSM - B)', phone: '+91 7569063321' }
      ],
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc-gUUQ2glRWvgFR0Rd1BxAAKTqCEP5-ZAQB_37OmkQ7Q-HIQ/viewform?usp=publish-editor'
    }
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

  return (
    <div className="tech-page">
      <div className="page-header">
        <h1 className="page-title">Non-Technical Events</h1>
        <p className="page-description">Celebrate creativity, talent, and entertainment</p>
      </div>

      <motion.div
        className="events-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {nonTechnicalEvents.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            img={event.img}
            onClick={() => setSelectedEvent(event)}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default NonTechnicalEvents;
