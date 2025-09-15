import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import galleryJson from '../data/gallery.json';

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [galleryData, setGalleryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load gallery data from gallery.json
    if (galleryJson && galleryJson.gallery) {
      setGalleryData(galleryJson.gallery);
      setLoading(false);
    }
  }, []);

  const filteredPhotos = galleryData && selectedCategory === 'all' 
    ? galleryData.visitorPhotos 
    : galleryData?.visitorPhotos.filter(photo => photo.category === selectedCategory) || [];

  if (loading || !galleryData) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero position-relative overflow-hidden">
        <div className="hero-background position-absolute w-100 h-100" style={{
          backgroundImage: "linear-gradient(135deg, rgba(0,123,191,0.85) 0%, rgba(0,181,204,0.8) 100%), url('../assets/gallery-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}></div>
        <div className="hero-content position-relative text-white text-center py-5 d-flex align-items-center" style={{ zIndex: 2, minHeight: '60vh' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <span className="badge bg-light text-primary px-4 py-2 rounded-pill mb-4 fs-6">
                  {galleryData.hero.subtitle}
                </span>
                <h1 className="display-3 fw-bold mb-4">{galleryData.hero.title}</h1>
                <p className="lead fs-4 mb-5">
                  {galleryData.hero.description}
                </p>
                <div className="gallery-stats d-flex justify-content-center gap-5 flex-wrap">
                  <div className="stat-item">
                    <h3 className="fw-bold mb-1">{galleryData.hero.stats.photos}</h3>
                    <small>Photos</small>
                  </div>
                  <div className="stat-item">
                    <h3 className="fw-bold mb-1">{galleryData.hero.stats.species}</h3>
                    <small>Species</small>
                  </div>
                  <div className="stat-item">
                    <h3 className="fw-bold mb-1">{galleryData.hero.stats.exhibits}</h3>
                    <small>Exhibits</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Images Carousel */}
      <section className="featured-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3">
              Featured Collection
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">Stunning Marine Photography</h2>
            <p className="lead text-muted">
              Immerse yourself in the beauty of marine life through our collection of high-quality photographs captured at our facility
            </p>
          </div>
          
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <Carousel className="featured-carousel rounded-4 overflow-hidden shadow-lg" indicators={true} controls={true} interval={5000}>
                {galleryData.featuredImages.map((image, index) => (
                  <Carousel.Item key={index}>
                    <div className="carousel-image-wrapper position-relative">
                      <img 
                        className="d-block w-100" 
                        src={image.src} 
                        alt={image.title}
                        style={{ height: '500px', objectFit: 'cover' }}
                      />
                      <div className="carousel-overlay position-absolute w-100 h-100 top-0 start-0" style={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)'
                      }}></div>
                    </div>
                    <Carousel.Caption className="text-start p-5">
                      <div className="carousel-content">
                        <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3">
                          Featured
                        </span>
                        <h3 className="fw-bold mb-3 display-6">{image.title}</h3>
                        <p className="fs-5 mb-4">{image.description}</p>
                        <button 
                          className="btn btn-light btn-lg px-4 py-2 rounded-pill"
                          onClick={() => setLightboxImage(image)}
                        >
                          <i className="fas fa-expand me-2"></i>View Full Size
                        </button>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Photos Section */}
      <section className="visitor-photos-section py-5" style={{ background: 'linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3">
              Community Gallery
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">Visitor Photos & Memories</h2>
            <p className="lead text-muted mb-4">
              Share your experiences! Here are some incredible moments captured by our guests during their visits
            </p>
          </div>

          {/* Category Filter */}
          <div className="filter-tabs d-flex justify-content-center mb-5 flex-wrap gap-2">
            {galleryData.categories.map(category => (
              <button
                key={category.id}
                className={`btn rounded-pill px-4 py-2 ${
                  selectedCategory === category.id 
                    ? 'btn-primary' 
                    : 'btn-outline-primary'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <i className={`${category.icon} me-2`}></i>
                {category.label}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="row g-4">
            {filteredPhotos.map((photo, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                <div className="photo-card position-relative overflow-hidden rounded-4 shadow-sm bg-white">
                  <div className="photo-wrapper position-relative">
                    <img 
                      src={photo.src} 
                      alt={photo.title}
                      className="w-100 photo-image"
                      style={{ height: '250px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                      onClick={() => setLightboxImage(photo)}
                    />
                    <div className="photo-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0" style={{
                      background: 'rgba(0,123,191,0.8)',
                      transition: 'opacity 0.3s ease',
                      cursor: 'pointer'
                    }}>
                      <button className="btn btn-light rounded-circle p-3">
                        <i className="fas fa-expand"></i>
                      </button>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fw-bold mb-0">{photo.title}</h6>
                      <span className={`badge rounded-pill ${
                        photo.category === 'exhibits' ? 'bg-primary' :
                        photo.category === 'family' ? 'bg-success' :
                        photo.category === 'education' ? 'bg-warning' : 'bg-info'
                      }`}>
                        {photo.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Photo Submission CTA */}
          <div className="text-center mt-5">
            <div className="bg-white rounded-4 shadow-sm p-5">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h4 className="fw-bold text-dark mb-2">Share Your Amazing Photos!</h4>
                  <p className="text-muted mb-md-0">
                    Tag us on social media or email your best shots to be featured in our community gallery
                  </p>
                </div>
                <div className="col-md-4">
                  <button className="btn btn-primary btn-lg px-4 py-3 rounded-pill w-100">
                    <i className="fas fa-camera me-2"></i>Submit Photos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section className="behind-scenes-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3">
              Exclusive Access
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">Behind the Scenes</h2>
            <p className="lead text-muted">
              Get an exclusive glimpse into the daily operations and dedicated care routines at Jenkinson Sea Life
            </p>
          </div>

          <div className="row g-4">
            {galleryData.behindScenesImages.map((image, index) => (
              <div key={index} className="col-lg-6">
                <div className="behind-scenes-card bg-white rounded-4 shadow-sm overflow-hidden h-100">
                  <div className="image-wrapper position-relative">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-100"
                      style={{ height: '300px', objectFit: 'cover' }}
                    />
                    <div className="image-badge position-absolute top-3 start-3">
                      <span className="badge bg-white text-primary px-3 py-2 rounded-pill">
                        <i className="fas fa-eye me-1"></i>Behind Scenes
                      </span>
                    </div>
                  </div>
                  <div className="card-content p-4">
                    <h5 className="fw-bold text-dark mb-3">{image.title}</h5>
                    <p className="text-muted mb-4">{image.description}</p>
                    <button 
                      className="btn btn-outline-primary rounded-pill px-4 py-2"
                      onClick={() => setLightboxImage(image)}
                    >
                      <i className="fas fa-expand me-2"></i>View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <div className="bg-light rounded-4 p-5">
              <h4 className="fw-bold text-dark mb-3">Professional Photography & Contributions</h4>
              <p className="text-muted mb-4">
                We invite photographers and marine life enthusiasts to contribute to our gallery. Whether you're a professional or an amateur, we'd love to showcase your work and share the beauty of marine conservation.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <button className="btn btn-primary rounded-pill px-4 py-2">
                  <i className="fas fa-info-circle me-2"></i>Submission Guidelines
                </button>
                <button className="btn btn-outline-primary rounded-pill px-4 py-2">
                  <i className="fas fa-envelope me-2"></i>Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="lightbox-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-4"
          style={{ 
            backgroundColor: 'rgba(0,0,0,0.9)', 
            zIndex: 9999,
            cursor: 'pointer'
          }}
          onClick={() => setLightboxImage(null)}
        >
          <div className="lightbox-content position-relative" onClick={(e) => e.stopPropagation()}>
            <button 
              className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
              style={{ zIndex: 10000 }}
              onClick={() => setLightboxImage(null)}
            ></button>
            <img 
              src={lightboxImage.src} 
              alt={lightboxImage.title}
              className="img-fluid rounded-3"
              style={{ maxHeight: '80vh', maxWidth: '90vw' }}
            />
            {lightboxImage.title && (
              <div className="lightbox-caption text-white text-center mt-3">
                <h5 className="fw-bold">{lightboxImage.title}</h5>
                {lightboxImage.description && (
                  <p className="mb-0">{lightboxImage.description}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;