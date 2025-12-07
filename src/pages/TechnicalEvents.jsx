import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import EventCard from '../components/EventCard';
import EventModal from '../components/EventModal';
import '../styles/tech.css';

function TechnicalEvents() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const technicalEvents = [
    {
      id: 1,
      title: 'VIBE CODING HACKATHON',
      date: 'January 8-9, 2026',
      img: '/images/vibe-coding.jpg',
      desc: 'A creativity-driven technical event where participants design innovative AI-based solutions.',
      coordinators: [
        { name: 'Rajesh Kumar', phone: '+91 98765 43210' },
        { name: 'Priya Sharma', phone: '+91 98765 43211' }
      ],
      registrationLink: 'https://forms.gle/YOUR_FORM_ID'
    },
    {
      id: 2,
      title: 'CAREER CRAFT BOOTCAMP',
      date: 'January 8-9, 2026',
      img: '/images/career-craft.jpg',
      desc: 'A session-based event guiding students in resume building, LinkedIn optimization, and personal branding.',
      coordinators: [
        { name: 'Rahul varma', phone: '+91 81250 13863' },
        { name: 'Sneha Patel', phone: '+91 98765 43213' }
      ],
      registrationLink: 'https://forms.gle/YOUR_FORM_ID'
    },
    {
      id: 3,
      title: 'PROMPT ENGINEERING SHOWDOWN',
      date: 'January 8-9, 2026',
      img: '/images/prompt-engineering.jpg',
      desc: 'An AI-focused competition where participants craft the best prompts to generate accurate outputs.',
      coordinators: [
        { name: 'Vikram Singh', phone: '+91 98765 43214' },
        { name: 'Divya Menon', phone: '+91 98765 43215' }
      ],
      registrationLink: 'https://forms.gle/YOUR_FORM_ID'
    },
    {
      id: 4,
      title: 'TECH SNAKE & LADDER',
      date: 'January 8-9, 2026',
      img: '/images/tech-snake-ladder.jpg',
      desc: 'A gamified technical quiz inspired by the classic Snake & Ladder board game.',
      coordinators: [
        { name: 'Karthik Rao', phone: '+91 98765 43216' },
        { name: 'Meera Nair', phone: '+91 98765 43217' }
      ],
      registrationLink: 'https://forms.gle/YOUR_FORM_ID'
    },
    {
      id: 5,
      title: 'PAPER & POSTER PRESENTATION',
      date: 'January 8-9, 2026',
      img: '/images/paper-poster.jpg',
      desc: 'A platform for students to present innovative ideas through technical papers or posters.',
      coordinators: [
        { name: 'Arun Gupta', phone: '+91 98765 43218' },
        { name: 'Lakshmi Iyer', phone: '+91 98765 43219' }
      ],
      registrationLink: 'https://forms.gle/YOUR_FORM_ID'
    },
    {
      id: 6,
      title: 'RAPID FIRE TECH BATTLE',
      date: 'January 8-9, 2026',
      img: '/images/rapid-fire.jpg',
      desc: 'A fast-paced technical quiz where participants answer as many questions as possible.',
      coordinators: [
        { name: 'Sanjay Verma', phone: '+91 98765 43220' },
        { name: 'Pooja Desai', phone: '+91 98765 43221' }
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
        <h1 className="page-title">Technical Events</h1>
        <p className="page-description">Push the boundaries of technology and innovation</p>
      </div>

      <motion.div
        className="events-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {technicalEvents.map((event) => (
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

export default TechnicalEvents;
