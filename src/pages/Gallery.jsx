import { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: 'image3.jpg', desc: 'The event is initiated with a prayer song.' },
    { src: 'image4.jpg', desc: 'Our beloved HOD addressing the students about the event.' },
    { src: 'image5.jpg', desc: 'Student showing their respects and attention to the event.' },
    { src: 'image6.jpg', desc: 'Our respected principal delivered his speech regarding INVENTUM 2K26.' },
    { src: 'image1.jpg', desc: 'Our principal and HODs inaugurated our fest INVENTUM 2K26 poster.' },
    { src: 'image2.jpg', desc: 'HOD and all faculty members launched the fest poster.' },
    { src: 'image8.jpg', desc: 'All the students attended the event enthusiastically.' },
    { src: 'image7.jpg', desc: 'All the respected HODs and officers graced the event.' }
  ];

  return (
    <div className="gallery-page">
      <Navbar showBack={true} />
      
      <div className="page-header">
        <h1 className="page-title">Memories</h1>
        <p className="page-description">Relive the magic of INVENTUM 2K26</p>
      </div>

      <div className="gallery-grid">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="gallery-card"
            style={{ animationDelay: `${idx * 50}ms` }}
            onClick={() => setSelectedImage(img)}
          >
            <div className="gallery-image-wrapper">
              <img 
                src={`/images/${img.src}`} 
                alt={`Event ${idx + 1}`}
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23111" width="400" height="300"/%3E%3Ctext fill="%23ff0000" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="20"%3EImage Not Found%3C/text%3E%3C/svg%3E';
                }}
              />
              <div className="gallery-overlay">
                <span className="view-icon">🔍</span>
              </div>
            </div>
            <p className="gallery-description">{img.desc}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={`/images/${selectedImage.src}`} alt="Enlarged view" />
            <p className="lightbox-description">{selectedImage.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
