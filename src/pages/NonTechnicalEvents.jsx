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
      title: 'MR & MS INVENTUM',
      date: 'January 8-9, 2026',
      img: '/images/mr-ms-inventum.jpg',
      desc: 'A talent-based personality contest to identify the most confident and creative students.',
      coordinators: [
        { name: 'Arjun Mehta', phone: '+91 98765 43222' },
        { name: 'Kavya Reddy', phone: '+91 98765 43223' }
      ],
      registrationLink: 'https://forms.gle/YOUR_FORM_ID'
    },
    {
      id: 2,
      title: 'WORD TABOO',
      date: 'January 8-9, 2026',
      img: '/images/word-taboo.jpg',
      desc: 'A fun vocabulary-based game where participants make teammates guess words without using restricted terms.',
      coordinators: [
        { name: 'Rohit Malhotra', phone: '+91 98765 43224' },
        { name: 'Anjali Singh', phone: '+91 98765 43225' }
      ],
      registrationLink: 'https://forms.gle/YOUR_FORM_ID'
    },
    {
      id: 3,
      title: 'HALF-ART',
      date: 'January 8-9, 2026',
      img: '/images/half-art.jpg',
      desc: 'A creativity challenge where participants receive half of a drawing and complete it.',
      coordinators: [
        { name: 'Neha Joshi', phone: '+91 98765 43226' },
        { name: 'Akash Pandey', phone: '+91 98765 43227' }
      ],
      registrationLink: 'https://forms.gle/YOUR_FORM_ID'
    },
    {
      id: 4,
      title: 'AD-MAD SHOW',
      date: 'January 8-9, 2026',
      img: '/images/admad.jpg',
      desc: 'A creative advertisement competition where teams create and perform ads.',
      coordinators: [
        { name: 'Manish Kumar', phone: '+91 98765 43228' },
        { name: 'Riya Kapoor', phone: '+91 98765 43229' }
      ],
      registrationLink: 'https://forms.gle/YOUR_FORM_ID'
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
