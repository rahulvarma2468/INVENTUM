import Navbar from '../components/Navbar';
import '../styles/contact.css';

function Contact() {
  const socialLinks = [
    { icon: '📘', name: 'Facebook', url: '#', label: 'Follow us on Facebook' },
    { icon: '🐦', name: 'Twitter', url: '#', label: 'Follow us on Twitter' },
    { icon: '📸', name: 'Instagram', url: 'https://www.instagram.com/anits.aiml.official?igsh=MTQ1d2RkMWVsNWRqdg==', label: '@inventum_2k26' },
    { icon: '🌐', name: 'Website', url: 'http://www.anits.edu.in/', label: 'Visit ANITS' }
  ];

  const contactInfo = [
    { name: 'Rahul varma Mudunuru', phone: '8125013863', role: 'Fest Convenor' },
    // { name: 'Sathwik Bhushan', phone: '9441956866', role: 'Event Manager' }
  ];

  return (
    <div className="contact-page">
      <Navbar showBack={true} />
      
      <div className="page-header">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-description">Have questions? We're here to help!</p>
      </div>

      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info-section">
            <h2 className="section-title">Contact Information</h2>
            
            <div className="info-grid">
              {contactInfo.map((contact, idx) => (
                <div key={idx} className="info-card">
                  <div className="info-icon">👤</div>
                  <h3>{contact.name}</h3>
                  <p className="info-role">{contact.role}</p>
                  <a href={`tel:${contact.phone}`} className="info-phone">
                    📞 {contact.phone}
                  </a>
                </div>
              ))}
            </div>

            <div className="email-section">
              <div className="email-card">
                <div className="email-icon">📧</div>
                <div className="email-content">
                  <h3>Email Us</h3>
                  <a href="mailto:inventum2k26@gmail.com">inventum2k26@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h3 className="social-title">Connect With Us</h3>
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
          </div>

          <div className="map-section">
            <h2 className="section-title">Find Us</h2>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.2215656810276!2d83.42328881450933!3d17.92181689188923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39581b73ffffff%3A0xd04b9046faa4565f!2sANITS!5e0!3m2!1sen!2sin!4v1674847560792!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '15px' }}
                allowFullScreen=""
                loading="lazy"
                title="ANITS Location"
              ></iframe>
            </div>
            <p className="location-text">
              📍 Anil Neerukonda Institute Of Technology and Sciences, Visakhapatnam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
