import { motion } from 'framer-motion';
import '../styles/contact.css';

function Contact() {
  const socialLinks = [
    { icon: '📘', name: 'Facebook', url: '#', label: 'Follow us on Facebook' },
    { icon: '🐦', name: 'Twitter', url: '#', label: 'Follow us on Twitter' },
    { icon: '📸', name: 'Instagram', url: 'https://www.instagram.com/anits.aiml.official?igsh=MTQ1d2RkMWVsNWRqdg==', label: '@inventum_2k26' },
    { icon: '🌐', name: 'Website', url: 'https://www.anits.org/department/cse-ai-ml', label: 'Visit ANITS' }
  ];

  const contactInfo = [
    { name: 'Rahul varma Mudunuru', phone: '8125013863', role: 'Fest Convenor' },
    { name: 'K Sri Manoj Kumar', phone: '9398072182', role: 'Convenor' },
    { name: 'R.V.Deekshitha', phone: '', role: 'Convenor' },
    { name: 'B.Pranathi Hiranmayi', phone: '', role: 'Co-Convenor' },
    { name: 'B.Sai Subramanyam', phone: '9030191192', role: 'Co-Convenor' }
  ];

  const mainConvenor = contactInfo[0];
  const otherConvenors = contactInfo.slice(1);

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

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-description">Have questions? We're here to help!</p>
      </div>

      <div className="contact-container">
        <div className="contact-content">
          <motion.div
            className="contact-info-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="section-title">Contact Information</h2>

            {/* Main Convenor Card */}
            <motion.div className="main-convenor-wrapper" variants={itemVariants}>
              <div className="info-card main-convenor-card">
                <div className="info-icon">👤</div>
                <div className="main-convenor-details">
                  <h3>{mainConvenor.name}</h3>
                  <p className="info-role">{mainConvenor.role}</p>
                  {mainConvenor.phone && (
                    <a href={`tel:${mainConvenor.phone}`} className="info-phone">
                      📞 {mainConvenor.phone}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Other Convenors Grid (2x2) */}
            <div className="info-grid other-convenors-grid">
              {otherConvenors.map((contact, idx) => (
                <motion.div key={idx} className="info-card" variants={itemVariants}>
                  <div className="info-icon">👤</div>
                  <h3>{contact.name}</h3>
                  <p className="info-role">{contact.role}</p>
                  {contact.phone && (
                    <a href={`tel:${contact.phone}`} className="info-phone">
                      📞 {contact.phone}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div className="email-section" variants={itemVariants}>
              <div className="email-card">
                <div className="email-icon">📧</div>
                <div className="email-content">
                  <h3>Email Us</h3>
                  <a href="mailto:inventum@anits.edu.in">inventum@anits.edu.in</a>
                </div>
              </div>
            </motion.div>

            <motion.div className="social-section" variants={itemVariants}>
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
