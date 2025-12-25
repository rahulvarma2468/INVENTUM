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
      date: 'January 5, 2026',
      img: '/images/hak.jpeg',
      desc: 'A creativity-driven technical event where participants design innovative AI-based solutions.',
      venue: 'I-105',
      faculty: ['Mrs. Ch Sowndarya Lahari', 'Dr.V.Tejaswini', 'Mr. Varanasi Anil Kumar'],
      coordinators: [
        { name: 'SAKETH TALASU (3/4 CSM - B)', phone: '+91 8500451385' },
        { name: 'D Kiranmai Meghana (3/4 CSM - C)', phone: '+91 7382310939' },
        { name: 'Mohamed Farman Raza (3/4 CSM - B)', phone: '+91 7085931121' },
        { name: 'M.Hasini (3/4 CSM -B)', phone: '+91 6301320060' }
      ],
      registrationLink: 'https://forms.gle/CLUCwAmD67S9nQ3S7'
    },
    {
      id: 2,
      title: 'CAREER CRAFT BOOTCAMP',
      date: 'January 6, 2026',
      img: '/images/ccb.jpg',
      desc: 'A session-based event guiding students in resume building, LinkedIn optimization, and personal branding.',
      venue: 'I-105',
      faculty: ['Dr. Appala Srinuvasu Muttipati', 'Dr. G Prasanna Priya'],
      coordinators: [
        { name: 'M.Bhanu Prakash (4/4 CSM-C)', phone: '+91 7032807880' },
        { name: 'B.Pranathi Hiranmayi (3/4 CSM-D)', phone: '+91 7569388878' },
        { name: 'K.Lalitha (3/4 CSM-A)', phone: '+91 6301603328' },
        { name: 'Pekala Harsha Vardhan (3/4 CSM -A)', phone: '+91 9502374126' }
      ],
      registrationLink: 'https://forms.gle/XceLjfp8G5yd6Ank8'
    },
    {
      id: 3,
      title: 'PROMPT ENGINEERING SHOWDOWN',
      date: 'January 8, 2026',
      img: '/images/prompt.png',
      desc: 'An AI-focused competition where participants craft the best prompts to generate accurate outputs.',
      venue: 'Lab-1&2',
      prize: '1st: ₹2000, 2nd: ₹1500, 3rd: ₹1000',
      faculty: ['Mrs. J. Ananda Lavanya', 'Mrs Mummidi Krishnaveni'],
      coordinators: [
        { name: 'Kolli Yamini (4/4 CSM-C)', phone: '+91 8341641341' },
        { name: 'K.Balaji (3/4 CSM -B)', phone: '+91 8639886493' },
        { name: 'Hemanth james (3/4 CSM - C)', phone: '+91 8143550439' },
        { name: 'Vijay kumar angajala (3/4 CSM - B)', phone: '+91 9014361014' }
      ],
      registrationLink: ''
    },
    {
      id: 4,
      title: 'TECH SNAKE & LADDER',
      date: 'January 8, 2026',
      img: '/images/snake.png',
      desc: 'A gamified technical quiz inspired by the classic Snake & Ladder board game.',
      venue: 'I-104',
      prize: '1st: ₹2000, 2nd: ₹1500, 3rd: ₹1000',
      faculty: ['Mr. M Sundarababu', 'Mr. Sampathirao Yoganandh'],
      coordinators: [
        { name: 'B.Karthikeya (4/4 CSM-C)', phone: '+91 9440324671' },
        { name: 'B.Venkata Siva (4/4 CSM-C)', phone: '+91 6281033579' },
        { name: 'Patoju Yamuna (3/4 CSM - A)', phone: '+91 8977947791' },
        { name: 'Janka Parthasai (3/4 CSM - B)', phone: '+91 9381314332' }
      ],
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdOmHUIeulOGg2DbdXFbYloVA4rfTi26RLYQSZGTBifLB4hLQ/viewform?usp=header'
    },
    {
      id: 5,
      title: 'PAPER & POSTER PRESENTATION',
      date: 'Jan 3 (R1) & Jan 8 (R2), 2026',
      img: '/images/paper.jpg',
      desc: 'A platform for students to present innovative ideas through technical papers or posters.',
      venue: 'Smart Class',
      prize: '1st: ₹3500, 2nd: ₹2500',
      faculty: ['Mrs B Siva Jyothi', 'Mr. Ch.K.Rupesh kumar', 'Mrs.N.SivagangaKumari'],
      coordinators: [
        { name: 'Y.Deepak (4/4 CSM-B)', phone: '+91 9550391134' },
        { name: 'K. Lakshmi likhita (4/4 CSM-B)', phone: '+91 9963696910' },
        { name: 'Kaparapu Meghana (4/4 CSM-C)', phone: '+91 9063225329' },
        { name: 'Jeevan Adari (3/4 CSM - C)', phone: '+91 9618041354' },
        { name: 'Revadi Naga Sai Jaswanth (3/4 CSM - B)', phone: '+91 9848682442' },
        { name: 'Karthik yagati (3/4 CSM - C)', phone: '+91 7013845339' }
      ],
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSecev-QZzZf5STVCZ6e7kNlY7znS7Vopuolc_DaOuLxEDnhnw/viewform'
    },
    {
      id: 6,
      title: 'RAPID FIRE TECH BATTLE',
      date: 'Jan 6-8, 2026',
      img: '/images/rapid.png',
      desc: 'A fast-paced technical quiz where participants answer as many questions as possible.',
      venue: 'Online (R1), Lab 1&2 (R2), I-105 (R3)',
      prize: '1st: ₹2000, 2nd: ₹1500',
      faculty: ['Mr. S Ratan Kumar'],
      coordinators: [
        { name: 'M. Mohan Kowshik (4/4 CSM-B)', phone: '+91 9059961875' },
        { name: 'Porapu Pavan Sai (4/4 CSM-C)', phone: '+91 6303463213' },
        { name: 'Vamsi Puttepu (3/4 CSM - B)', phone: '+91 6301320060' },
        { name: 'A Narendra Kumar (3/4 CSM - B)', phone: '+91 9866274685' }
      ],
      registrationLink: 'https://q.me-qr.com/8Lzoyl2f'
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
