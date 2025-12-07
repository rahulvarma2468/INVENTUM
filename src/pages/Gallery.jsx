import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/images/image3.jpg', desc: 'The event is initiated with a prayer song.' },
    { src: '/images/image4.jpg', desc: 'Our beloved HOD addressing the students about the event.' },
    { src: '/images/image5.jpg', desc: 'Student showing their respects and attention to the event.' },
    { src: '/images/image6.jpg', desc: 'Our respected principal delivered his speech regarding INVENTUM 2K26.' },
    { src: '/images/image1.jpg', desc: 'Our principal and HODs inaugurated our fest INVENTUM 2K26 poster.' },
    { src: '/images/image2.jpg', desc: 'HOD and all faculty members launched the fest poster.' },
    { src: '/images/image8.jpg', desc: 'All the students attended the event enthusiastically.' },
    { src: '/images/image7.jpg', desc: 'All the respected HODs and officers graced the event.' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="gallery-page">
      <div className="page-header">
        <h1 className="page-title">Memories</h1>
        <p className="page-description">Relive the magic of INVENTUM 2K26</p>
      </div>

      <motion.div
        className="gallery-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="gallery-card"
            variants={cardVariants}
            onClick={() => setSelectedImage(img)}
            layoutId={`card-${idx}`}
          >
            <div className="gallery-image-wrapper">
              <img
                src={img.src}
                alt={`Event ${idx + 1}`}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="view-icon">🔍</span>
              </div>
            </div>
            <p className="gallery-description">{img.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            onClick={() => setSelectedImage(null)}
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
              <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
              <img src={selectedImage.src} alt="Enlarged view" />
              <p className="lightbox-description">{selectedImage.desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
