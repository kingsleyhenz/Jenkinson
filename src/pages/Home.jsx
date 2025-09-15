import React from 'react';
import { Carousel } from 'react-bootstrap';
import seaLocation from '../assets/visti.jpg';
import exhibit1 from '../assets/sea-creature.jpg';
import exhibit2 from '../assets/hero-sea.jpg';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section position-relative overflow-hidden">
        <div className="hero-overlay position-absolute w-100 h-100" style={{
          background: 'linear-gradient(135deg, rgba(0,123,191,0.9) 0%, rgba(0,181,204,0.8) 100%)',
          zIndex: 1
        }}></div>
        <div className="hero-content position-relative text-white text-center py-5" style={{ zIndex: 2, minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="container">
            <h1 className="display-2 fw-bold mb-4 animate__animated animate__fadeInUp">
              Discover the Wonders of the Ocean
            </h1>
            <p className="lead fs-4 mb-5 animate__animated animate__fadeInUp animate__delay-1s">
            Immerse yourself in the magnificent world beneath the waves, where vibrant marine life and hidden wonders await discovery.
            </p>
            <div className="animate__animated animate__fadeInUp animate__delay-2s">
              <button className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="welcome-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="welcome-content pe-lg-5">
                <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3">
                  Marine Conservation
                </span>
                <h2 className="display-5 fw-bold text-dark mb-4">
                  Welcome to <span className="text-primary">Jenkinson Sea Life</span>
                </h2>
                <p className="lead text-muted mb-4">
                  Nestled on the boardwalk in Point Pleasant Beach, Singapore, Jenkinson Sea Life is a premier destination dedicated to educating the public on marine life and conservation.
                </p>
                <p className="text-muted mb-4">
                  Our exhibits showcase a diverse array of sea creatures, from vibrant tropical fish to majestic marine mammals, all in environments that mimic their natural habitats.
                </p>
                <div className="d-flex align-items-center">
                  <div className="stats-item me-5">
                    <h3 className="fw-bold text-primary mb-1">500+</h3>
                    <small className="text-muted">Species</small>
                  </div>
                  <div className="stats-item me-5">
                    <h3 className="fw-bold text-primary mb-1">15</h3>
                    <small className="text-muted">Exhibits</small>
                  </div>
                  <div className="stats-item">
                    <h3 className="fw-bold text-primary mb-1">25+</h3>
                    <small className="text-muted">Years</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="welcome-image position-relative">
                <img src={seaLocation} alt="Marine Life" className="img-fluid rounded-4 shadow-lg" />
                <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4" style={{
                  background: 'linear-gradient(45deg, rgba(0,123,191,0.1) 0%, rgba(0,181,204,0.1) 100%)'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section py-5" style={{ background: 'linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3">
              Our Highlights
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">Experience Marine Life Like Never Before</h2>
            <p className="lead text-muted">Discover interactive exhibits, educational programs, and unforgettable encounters</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="highlight-card h-100 bg-white rounded-4 shadow-sm overflow-hidden position-relative">
                <div className="card-image position-relative">
                  <img src={exhibit1} alt="Interactive Exhibits" className="w-100" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="card-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0 transition-opacity">
                    <button className="btn btn-light rounded-circle p-3">
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                      <i className="fas fa-hand-paper text-primary"></i>
                    </div>
                    <h5 className="fw-bold mb-0">Interactive Exhibits</h5>
                  </div>
                  <p className="text-muted mb-3">Explore touch pools and feeding sessions where you can get up close with starfish, rays, and more marine creatures.</p>
                  <a href="#" className="text-primary text-decoration-none fw-semibold">
                    Learn More <i className="fas fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="highlight-card h-100 bg-white rounded-4 shadow-sm overflow-hidden position-relative">
                <div className="card-image position-relative">
                  <img src={exhibit2} alt="Educational Programs" className="w-100" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="card-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0 transition-opacity">
                    <button className="btn btn-light rounded-circle p-3">
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-wrapper bg-success bg-opacity-10 rounded-circle p-2 me-3">
                      <i className="fas fa-graduation-cap text-success"></i>
                    </div>
                    <h5 className="fw-bold mb-0">Educational Programs</h5>
                  </div>
                  <p className="text-muted mb-3">Join our comprehensive workshops and expert talks on marine biology and conservation efforts.</p>
                  <a href="#" className="text-primary text-decoration-none fw-semibold">
                    Learn More <i className="fas fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="highlight-card h-100 bg-white rounded-4 shadow-sm overflow-hidden position-relative">
                <div className="card-image position-relative">
                  <img src={seaLocation} alt="Visit Us" className="w-100" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="card-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0 transition-opacity">
                    <button className="btn btn-light rounded-circle p-3">
                      <i className="fas fa-map-marker-alt"></i>
                    </button>
                  </div>
                </div>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-wrapper bg-warning bg-opacity-10 rounded-circle p-2 me-3">
                      <i className="fas fa-map-marker-alt text-warning"></i>
                    </div>
                    <h5 className="fw-bold mb-0">Visit Us Today</h5>
                  </div>
                  <p className="text-muted mb-3">Open daily from 9 AM to 5 PM. Located at Boardwalk, Point Pleasant Beach, Singapore.</p>
                  <a href="#" className="text-primary text-decoration-none fw-semibold">
                    Get Directions <i className="fas fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3">
              Latest News
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">Stay Updated with Our Latest</h2>
            <p className="lead text-muted">Discover new exhibits, conservation efforts, and upcoming events</p>
          </div>
          
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <Carousel className="news-carousel rounded-4 overflow-hidden shadow-lg" indicators={true} controls={true}>
                <Carousel.Item>
                  <div className="carousel-image-wrapper position-relative">
                    <img className="d-block w-100" src={exhibit1} alt="New Exhibit Opening" style={{ height: '400px', objectFit: 'cover' }} />
                    <div className="carousel-overlay position-absolute w-100 h-100 top-0 start-0" style={{
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)'
                    }}></div>
                  </div>
                  <Carousel.Caption className="text-start p-4">
                    <div className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3">New Exhibit</div>
                    <h3 className="fw-bold mb-3">Coral Reef Paradise Opens</h3>
                    <p className="fs-5 mb-3">Discover our stunning new coral reef display featuring rare species from the Indo-Pacific region.</p>
                    <button className="btn btn-light btn-lg px-4 py-2 rounded-pill">
                      Read More
                    </button>
                  </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                  <div className="carousel-image-wrapper position-relative">
                    <img className="d-block w-100" src={exhibit2} alt="Conservation Program" style={{ height: '400px', objectFit: 'cover' }} />
                    <div className="carousel-overlay position-absolute w-100 h-100 top-0 start-0" style={{
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)'
                    }}></div>
                  </div>
                  <Carousel.Caption className="text-start p-4">
                    <div className="badge bg-success text-white px-3 py-2 rounded-pill mb-3">Conservation</div>
                    <h3 className="fw-bold mb-3">Sea Turtle Rescue Program</h3>
                    <p className="fs-5 mb-3">Learn about our ongoing efforts to protect and rehabilitate endangered sea turtles.</p>
                    <button className="btn btn-light btn-lg px-4 py-2 rounded-pill">
                      Read More
                    </button>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-8 mx-auto">
              <div className="news-footer bg-light rounded-4 p-5 text-center">
                <h4 className="fw-bold mb-3">Stay Connected</h4>
                <p className="text-muted mb-4">
                  Stay tuned for more updates on our conservation projects and upcoming events. We are committed to fostering a deeper understanding of marine ecosystems and encouraging sustainable practices.
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <button className="btn btn-primary px-4 py-2 rounded-pill">
                    <i className="fas fa-envelope me-2"></i>
                    Newsletter
                  </button>
                  <button className="btn btn-outline-primary px-4 py-2 rounded-pill">
                    <i className="fab fa-instagram me-2"></i>
                    Follow Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;