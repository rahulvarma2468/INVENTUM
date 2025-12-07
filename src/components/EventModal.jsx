import { motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import PropTypes from 'prop-types';
import './EventModal.css';

function EventModal({ event, onClose }) {
    if (!event) return null;

    return (
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

                <div className="modal-image-wrapper">
                    <img src={event.img} alt={event.title} className="modal-image" />
                    <div className="modal-overlay"></div>
                    <div className="modal-header">
                        <h2 className="modal-title">{event.title}</h2>
                        <span className="modal-date">{event.date}</span>
                    </div>
                </div>

                <div className="modal-body">
                    <p className="modal-description">{event.desc}</p>

                    <div className="modal-info">
                        <div className="coordinators-section">
                            <h3>Coordinators</h3>
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
