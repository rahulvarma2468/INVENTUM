import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiZoomIn, HiZoomOut } from 'react-icons/hi';
import PropTypes from 'prop-types';
import './Lightbox.css';

function Lightbox({ image, onClose }) {
    const [scale, setScale] = useState(1);

    if (!image) return null;

    const handleZoomIn = (e) => {
        e.stopPropagation();
        setScale(prev => Math.min(prev + 0.5, 3));
    };

    const handleZoomOut = (e) => {
        e.stopPropagation();
        setScale(prev => Math.max(prev - 0.5, 1));
    };

    return (
        <AnimatePresence>
            <motion.div
                className="lightbox"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="lightbox-controls" onClick={(e) => e.stopPropagation()}>
                    <button className="control-btn" onClick={handleZoomOut} disabled={scale <= 1}>
                        <HiZoomOut />
                    </button>
                    <span className="zoom-level">{Math.round(scale * 100)}%</span>
                    <button className="control-btn" onClick={handleZoomIn} disabled={scale >= 3}>
                        <HiZoomIn />
                    </button>
                    <button className="control-btn close-btn" onClick={onClose}>
                        <HiX />
                    </button>
                </div>

                <motion.div
                    className="lightbox-content"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                >
                    <motion.img
                        src={image.src}
                        alt={image.alt || "Lightbox view"}
                        style={{ scale }}
                        drag={scale > 1}
                        dragConstraints={{ left: -scale * 200, right: scale * 200, top: -scale * 200, bottom: scale * 200 }}
                        className="lightbox-image"
                    />
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
