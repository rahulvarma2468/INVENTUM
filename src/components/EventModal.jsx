import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiZoomIn } from 'react-icons/hi';
import PropTypes from 'prop-types';
import Lightbox from './Lightbox';
import './EventModal.css';

function EventModal({ event, onClose }) {
    const [showLightbox, setShowLightbox] = useState(false);

    if (!event) return null;

    return (
        <>
            <motion.div
                className="event-modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="event-modal-content glass-card"
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <button className="modal-close-btn" onClick={onClose}>
                        <HiX />
                    </button>

                    <div
                        className="modal-image-wrapper"
                        onClick={() => setShowLightbox(true)}
                        title="Click to view full size"
                    >
                        <img src={event.img} alt={event.title} className="modal-image" />
                        <div className="modal-overlay"></div>
                        <div className="modal-zoom-indicator">
                            <HiZoomIn />
                        </div>
                        <div className="modal-header">
                            <h2 className="modal-title">{event.title}</h2>
                            <span className="modal-date">{event.date}</span>
                        </div>
                    </div>

                    <div className="modal-body">
                        <p className="modal-description">{event.desc}</p>

                        <div className="event-details-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                            {event.venue && (
                                <div className="detail-item">
                                    <h4 style={{ color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>Venue</h4>
                                    <p style={{ color: 'var(--text-primary)' }}>{event.venue}</p>
                                </div>
                            )}
                            {event.prize && (
                                <div className="detail-item">
                                    <h4 style={{ color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>Cash Prize</h4>
                                    <p style={{ color: 'var(--text-primary)' }}>{event.prize}</p>
                                </div>
                            )}
                            {event.fee && (
                                <div className="detail-item">
                                    <h4 style={{ color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>Reg. Fee</h4>
                                    <p style={{ color: 'var(--text-primary)' }}>{event.fee}</p>
                                </div>
                            )}
                        </div>

                        <div className="modal-info">
                            <div className="coordinators-section">
                                {event.faculty && event.faculty.length > 0 && (
                                    <div className="faculty-section" style={{ marginBottom: '1.5rem' }}>
                                        <h3>Faculty Coordinators</h3>
                                        <div className="coord-grid">
                                            {event.faculty.map((fac, index) => (
                                                <div key={index} className="coord-item">
                                                    <span className="coord-name">{fac}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <h3>Student Coordinators</h3>
                                <div className="coord-grid">
                                    {event.coordinators.map((coord, index) => (
                                        <div key={index} className="coord-item">
                                            <span className="coord-name">{coord.name}</span>
                                            <a href={`tel:${coord.phone}`} className="coord-phone">{coord.phone}</a>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <a
                                href={event.registrationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-register-btn"
                            >
                                Register Now
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {showLightbox && (
                    <Lightbox
                        image={{ src: event.img, alt: event.title }}
                        onClose={() => setShowLightbox(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

EventModal.propTypes = {
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        coordinators: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                phone: PropTypes.string.isRequired
            })
        ).isRequired,
        registrationLink: PropTypes.string.isRequired
    }),
    onClose: PropTypes.func.isRequired
};

export default EventModal;
