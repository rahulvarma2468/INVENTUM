import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './EventCard.css';

function EventCard({ title, date, img, onClick }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <motion.div
      className="event-card glass-card"
      variants={cardVariants}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="card-image-wrapper">
        <img src={img} alt={title} className="card-image" loading="lazy" />
        <div className="card-overlay">
          <span className="click-indicator">CLICK FOR DETAILS</span>
        </div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {/* Date is kept as minimal info, can be removed if user wants STRICTLY only name/poster */}
        {/* <span className="card-date">{date}</span> */}
      </div>
    </motion.div>
  );
}

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default EventCard;
