import { motion } from 'framer-motion';
import '../styles/contact.css';

function Contact() {
  const socialLinks = [
    { icon: '📘', name: 'Facebook', url: '#', label: 'Follow us on Facebook' },
    { icon: '🐦', name: 'Twitter', url: '#', label: 'Follow us on Twitter' },
    { icon: '📸', name: 'Instagram', url: 'https://www.instagram.com/anits.aiml.official?igsh=MTQ1d2RkMWVsNWRqdg==', label: '@inventum_2k26' },
    { icon: '🌐', name: 'Website', url: 'https://www.anits.org/department/cse-ai-ml', label: 'Visit ANITS' }
  ];

  const hodInfo = {
    name: 'Prof.K.Selvani Deepthi',
    role: 'HOD',
    img: '/images/team/hod.jpg'
  };

  const facultyConvenors = [
    { name: 'Dr.Karun kumar', role: 'Faculty Convenor', img: '/images/team/karun.jpg' },
    { name: 'Mrs.K Suryakala eswari', role: 'Faculty Convenor', img: '/images/team/suryakala.jpg' }
  ];

  const facultyCoConvenors = [
    { name: 'Mrs.K.Sruthi', role: 'Faculty Co-Convenor', img: '/images/team/sruthi.jpg' },
    { name: 'P.Harin', role: 'Faculty Co-Convenor', img: '/images/team/harin.jpg' }
  ];

  /* 
     NOTE: To add photos, place images in public/images/team/ 
     named as 'rahul.jpg', 'manoj.jpg', etc.
  */
  const studentConvenors = [
    {
      name: 'Rahul varma Mudunuru',
      phone: '8125013863',
      role: 'Fest Convenor',
      img: '/images/team/rahul.jpg'
    },
    {
      name: 'K Sri Manoj Kumar',
      phone: '9398072182',
      role: 'Convenor',
      img: '/images/team/manoj.jpg'
    },
    {
      name: 'R.V.Deekshitha',
      phone: '',
      role: 'Convenor',
      img: '/images/team/deekshitha.jpg'
    },
    {
      name: 'B.Pranathi Hiranmayi',
      phone: '',
      role: 'Co-Convenor',
      img: '/images/team/pranathi.jpg'
    },
    {
      name: 'B.Sai Subramanyam',
      phone: '9030191192',
      role: 'Co-Convenor',
      img: '/images/team/sai.jpg'
    }
  ];

  const mainStudentConvenor = studentConvenors[0];
  const otherStudentConvenors = studentConvenors.slice(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex'; // Show fallback icon
  };

  const renderCard = (person, isMain = false) => (
    <div className={`info-card ${isMain ? 'main-convenor-card' : ''}`}>
      <div className={`image-container ${isMain ? 'main-image-container' : ''}`}>
        <img
          src={person.img}
          alt={person.name}
          className="contact-photo"
          onError={handleImageError}
        />
        <div className="info-icon fallback-icon">👤</div>
      </div>
      <div className={isMain ? 'main-convenor-details' : ''}>
        <h3>{person.name}</h3>
        <p className="info-role">{person.role}</p>
        {person.phone && (
          <a href={`tel:${person.phone}`} className="info-phone">
            📞 {person.phone}
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1 className="page-title">The Team</h1>
        <p className="page-description">Meet the minds behind INVENTUM 2K26</p>
      </div>

      <div className="contact-container">
        <div className="contact-content">
          <motion.div
            className="contact-info-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            {/* HOD Section */}
            <motion.div className="team-section" variants={itemVariants}>
              <h2 className="section-title">Head of Department</h2>
              <div className="info-grid single-card-grid">
                {renderCard(hodInfo)}
              </div>
            </motion.div>

            {/* Faculty Convenors */}
            <motion.div className="team-section" variants={itemVariants}>
              <h2 className="section-title">Faculty Convenors</h2>
              <div className="info-grid other-convenors-grid">
                {facultyConvenors.map((faculty, idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    {renderCard(faculty)}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Faculty Co-Convenors */}
            <motion.div className="team-section" variants={itemVariants}>
              <h2 className="section-title">Faculty Co-Convenors</h2>
              <div className="info-grid other-convenors-grid">
                {facultyCoConvenors.map((faculty, idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    {renderCard(faculty)}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Student Convenors */}
            <motion.div className="team-section" variants={itemVariants}>
              <h2 className="section-title">Student Convenors</h2>

              {/* Main Student Convenor */}
              <motion.div className="main-convenor-wrapper" variants={itemVariants}>
                {renderCard(mainStudentConvenor, true)}
              </motion.div>

              {/* Other Student Convenors */}
              <div className="info-grid other-convenors-grid">
                {otherStudentConvenors.map((student, idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    {renderCard(student)}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="contact-footer" variants={itemVariants}>
              <div className="email-section">
                <div className="email-card">
                  <div className="email-icon">📧</div>
                  <div className="email-content">
                    <h3>Email Us</h3>
                    <a href="mailto:inventum@anits.edu.in">inventum@anits.edu.in</a>
                  </div>
                </div>
              </div>

              <div className="social-section">
                <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Connect With Us</h3>
                <div className="social-links">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                    >
                      <span className="social-icon">{social.icon}</span>
                      <span className="social-name">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="map-section"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="section-title">Find Us</h2>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.2215656810276!2d83.42328881450933!3d17.92181689188923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39581b73ffffff%3A0xd04b9046faa4565f!2sANITS!5e0!3m2!1sen!2sin!4v1674847560792!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="ANITS Location"
              ></iframe>
            </div>
            <p className="location-text">
              📍 Anil Neerukonda Institute Of Technology and Sciences, Visakhapatnam
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
