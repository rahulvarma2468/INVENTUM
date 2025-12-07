import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import PropTypes from 'prop-types';
import './Lightbox.css';

function Lightbox({ image, onClose }) {
    if (!image) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="lightbox"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="lightbox-content"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                >
                    <button className="lightbox-close" onClick={onClose} aria-label="Close">
                        <HiX />
                    </button>
                    <img src={image.src} alt={image.alt || "Lightbox view"} />
                    {image.desc && <p className="lightbox-description">{image.desc}</p>}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

Lightbox.propTypes = {
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
        desc: PropTypes.string
    }),
    onClose: PropTypes.func.isRequired
};

export default Lightbox;
