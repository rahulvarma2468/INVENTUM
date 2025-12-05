import Navbar from '../components/Navbar';
import EventCard from '../components/EventCard';
import '../styles/tech.css';

function TechnicalEvents() {
  const technicalEvents = [
    { 
      id: 1, 
      title: 'VIBE CODING HACKATHON', 
      date: 'January 8-9, 2026', 
      img: 'vibe-coding.jpg', 
      desc: 'A creativity-driven technical event where participants design innovative AI-based solutions to real-world problems. Unlike traditional coding contests, this hackathon focuses on ideation, implementation strategy, and effective use of AI tools including code assistants, data analysis tools, and generative AI. Judged on innovativeness, clarity of solution, and presentation quality. Teams of 2–4 or individual participation allowed. The goal is building smart, scalable, and creative solutions that demonstrate smart AI use, creative thinking, and practical impact.',
      coordinators: [
        { name: 'Rajesh Kumar', phone: '+91 98765 43210' },
        { name: 'Priya Sharma', phone: '+91 98765 43211' }
      ]
    },
    { 
      id: 2, 
      title: 'CAREER CRAFT BOOTCAMP', 
      date: 'January 8-9, 2026', 
      img: 'career-craft.jpg', 
      desc: 'A session-based event guiding students in resume building, LinkedIn optimization, personal branding, and AI tools for career advancement. Equips students with industry-ready professional skills through resume audits, LinkedIn profile reviews, and hands-on AI tool training. Activities include Q&A sessions and practical tasks. Students leave with a polished resume and optimized LinkedIn presence, building confidence for placements and professional success.',
      coordinators: [
        { name: 'Rahul varma', phone: '+91 81250 13863' },
        { name: 'Sneha Patel', phone: '+91 98765 43213' }
      ]
    },
    { 
      id: 3, 
      title: 'PROMPT ENGINEERING SHOWDOWN', 
      date: 'January 8-9, 2026', 
      img: 'prompt-engineering.jpg', 
      desc: 'An AI-focused competition where participants craft the best prompts to generate accurate, creative, or complex outputs using AI tools. Tasks include image generation, code generation, and analysis. Teaches prompt engineering concepts and improves understanding of LLM behaviour. Judged on clarity and structure of prompts, accuracy of outputs, creativity, and understanding of AI constraints. Perfect for mastering the art of communicating with AI systems.',
      coordinators: [
        { name: 'Vikram Singh', phone: '+91 98765 43214' },
        { name: 'Divya Menon', phone: '+91 98765 43215' }
      ]
    },
    { 
      id: 4, 
      title: 'TECH SNAKE & LADDER', 
      date: 'January 8-9, 2026', 
      img: 'tech-snake-ladder.jpg', 
      desc: 'A gamified technical quiz inspired by the classic Snake & Ladder board game. Participants move across the board by answering technical questions on CS and AIML fundamentals. Teams roll dice after answering questions—correct answers move forward, wrong answers may cause penalties, and snakes/ladders affect progress. Makes learning fun and interactive while testing knowledge. Judged on number of correct answers, quick response time, and final board position.',
      coordinators: [
        { name: 'Karthik Rao', phone: '+91 98765 43216' },
        { name: 'Meera Nair', phone: '+91 98765 43217' }
      ]
    },
    { 
      id: 5, 
      title: 'PAPER & POSTER PRESENTATION', 
      date: 'January 8-9, 2026', 
      img: 'paper-poster.jpg', 
      desc: 'A platform for students to present innovative ideas, case studies, or research through technical papers or posters. Encourages research culture, improves presentation and documentation skills, and provides exposure to academic communication. Participants showcase their work and defend ideas through Q&A sessions. Judged on innovation and relevance, technical depth, presentation quality, and Q&A handling ability. Excellent opportunity for aspiring researchers and innovators.',
      coordinators: [
        { name: 'Arun Gupta', phone: '+91 98765 43218' },
        { name: 'Lakshmi Iyer', phone: '+91 98765 43219' }
      ]
    },
    { 
      id: 6, 
      title: 'RAPID FIRE TECH BATTLE', 
      date: 'January 8-9, 2026', 
      img: 'rapid-fire.jpg', 
      desc: 'A fast-paced technical quiz where participants answer as many questions as possible within a time limit. Tests quick recall and technical understanding while building competitive excitement. Individual or team participation through timer-based rounds covering computer science and technology topics. Judged on total correct answers, time efficiency, and tie-breaker rounds if needed. Optional negative marking adds strategy. Perfect for tech enthusiasts who thrive under pressure!',
      coordinators: [
        { name: 'Sanjay Verma', phone: '+91 98765 43220' },
        { name: 'Pooja Desai', phone: '+91 98765 43221' }
      ]
    }
  ];

  return (
    <div className="tech-page">
      <Navbar showBack={true} />
      
      <div className="page-header">
        <h1 className="page-title">Technical Events</h1>
        <p className="page-description">Push the boundaries of technology and innovation</p>
      </div>

      <div className="events-grid">
        {technicalEvents.map((event, index) => (
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

export default TechnicalEvents;
