import React, { useEffect, useState } from 'react';
import eventsData from '../data/events.json';

function Events() {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (eventsData && eventsData.events) {
      setEvents(eventsData.events);
    }
    setLoading(false);
  }, []);

  const categories = [
    { id: 'all', label: 'All Events', icon: 'fas fa-calendar', color: 'primary' },
    { id: 'educational', label: 'Educational', icon: 'fas fa-graduation-cap', color: 'success' },
    { id: 'children', label: 'Kids & Family', icon: 'fas fa-child', color: 'warning' },
    { id: 'conservation', label: 'Conservation', icon: 'fas fa-leaf', color: 'info' },
    { id: 'interactive', label: 'Interactive', icon: 'fas fa-hand-paper', color: 'danger' },
    { id: 'family', label: 'Family', icon: 'fas fa-heart', color: 'secondary' }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const featuredEvents = events.filter(event => event.featured);

  const getEventStatus = (event) => {
    const availableSpots = event.capacity - event.registered;
    if (availableSpots <= 0) return { status: 'full', class: 'bg-danger', text: 'Sold Out' };
    if (availableSpots <= 5) return { status: 'limited', class: 'bg-warning', text: 'Limited Spots' };
    return { status: 'available', class: 'bg-success', text: 'Available' };
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      weekday: date.toLocaleDateString('en-US', { weekday: 'long' })
    };
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!events.length) {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '60vh' }}>
        <h3 className="text-muted mb-3">No events available</h3>
        <p className="text-muted">Please check your events.json file</p>
      </div>
    );
  }

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero position-relative overflow-hidden">
        <div className="hero-background position-absolute w-100 h-100" style={{
          backgroundImage: "linear-gradient(135deg, rgba(0,123,191,0.85) 0%, rgba(0,181,204,0.8) 100%), url('../assets/events-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}></div>
        <div className="hero-content position-relative text-white text-center py-5 d-flex align-items-center" style={{ zIndex: 2, minHeight: '60vh' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <span className="badge bg-light text-primary px-4 py-2 rounded-pill mb-4 fs-6">
                  Exciting Experiences
                </span>
                <h1 className="display-3 fw-bold mb-4">Upcoming Events</h1>
                <p className="lead fs-4 mb-5">
                  Join us for educational adventures, family fun, and conservation activities designed to inspire ocean lovers of all ages
                </p>
                <div className="hero-actions d-flex justify-content-center gap-3 flex-wrap">
                  <button className="btn btn-light btn-lg px-5 py-3 rounded-pill">
                    <i className="fas fa-calendar-plus me-2"></i>Book Now
                  </button>
                  <button className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill">
                    <i className="fas fa-download me-2"></i>Event Calendar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="featured-events py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3">
              Don't Miss Out
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">Featured Events</h2>
            <p className="lead text-muted">
              Special experiences and limited-time events that you won't want to miss
            </p>
          </div>

          {featuredEvents.length > 0 ? (
            <div className="row g-4">
              {featuredEvents.map(event => (
                <div key={event.id} className="col-lg-6">
                  <div className="featured-event-card bg-white rounded-4 shadow-lg overflow-hidden h-100">
                    <div className="event-image position-relative">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-100"
                        style={{ height: '250px', objectFit: 'cover' }}
                      />
                      <div className="event-status position-absolute top-3 end-3" style={{ margin: '1% 4%' }}>
                        <span className={`badge ${getEventStatus(event).class} text-white px-3 py-2 rounded-pill`}>
                          {getEventStatus(event).text}
                        </span>
                      </div>
                    </div>
                    
                    <div className="event-content p-4" style={{ marginTop: '15px' }}>
                      <div className="event-date d-flex align-items-center mb-3">
                        <div className="date-box bg-primary text-white rounded-3 p-2 me-3 text-center" style={{minWidth: '60px'}}>
                          <div className="fw-bold">{formatDate(event.date).day}</div>
                          <div className="small">{formatDate(event.date).month}</div>
                        </div>
                        <div>
                          <h5 className="fw-bold text-dark mb-1">{event.title}</h5>
                          <div className="text-muted small">
                            <i className="fas fa-clock me-1"></i>{event.time}
                            <span className="mx-2">•</span>
                            <i className="fas fa-users me-1"></i>{event.audience}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted mb-4">{event.description}</p>
                      
                      <div className="event-footer d-flex align-items-center justify-content-between">
                        <div className="event-price">
                          <span className="fs-5 fw-bold text-primary">{event.price}</span>
                          <div className="small text-muted">
                            {event.capacity - event.registered} spots left
                          </div>
                        </div>
                        <button 
                          className="btn btn-primary rounded-pill px-4 py-2"
                          onClick={() => setSelectedEvent(event)}
                        >
                          <i className="fas fa-ticket-alt me-2"></i>Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5">
              <i className="fas fa-star text-muted fs-1 mb-3"></i>
              <h5 className="text-muted">No featured events available</h5>
            </div>
          )}
        </div>
      </section>

      {/* Event Calendar Section */}
      <section className="event-calendar py-5" style={{ background: 'linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3">
              Full Schedule
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">Event Calendar</h2>
            <p className="lead text-muted mb-4">
              Join us for educational and fun events tailored for families, schools, and marine enthusiasts with special focus on interactive learning experiences
            </p>
          </div>

          {/* Category Filter */}
          <div className="category-filter d-flex justify-content-center mb-5 flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                className={`btn rounded-pill px-4 py-2 ${
                  selectedCategory === category.id 
                    ? `btn-${category.color}` 
                    : `btn-outline-${category.color}`
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <i className={`${category.icon} me-2`}></i>
                {category.label}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="events-grid">
            {filteredEvents.length > 0 ? (
              <div className="row g-4">
                {filteredEvents.map(event => (
                  <div key={event.id} className="col-lg-4 col-md-6">
                    <div className="event-card bg-white rounded-4 shadow-sm h-100 overflow-hidden">
                      <div className="event-image position-relative">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-100"
                          style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <div className="event-category position-absolute top-3 start-3" style={{ margin: '2% 4%' }}>
                          <span className={`badge bg-${categories.find(cat => cat.id === event.category)?.color || 'primary'} text-white px-3 py-2 rounded-pill`}>
                            <i className={`${categories.find(cat => cat.id === event.category)?.icon || 'fas fa-calendar'} me-1`}></i>
                            {categories.find(cat => cat.id === event.category)?.label || 'Event'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="event-content p-4" style={{ marginTop: '15px' }}>
                        <div className="event-header d-flex align-items-start justify-content-between mb-3">
                          <div className="date-info">
                            <div className="text-primary fw-bold">{formatDate(event.date).weekday}</div>
                            <div className="text-muted small">{formatDate(event.date).month} {formatDate(event.date).day}</div>
                          </div>
                          <span className={`badge ${getEventStatus(event).class} text-white px-3 py-1 rounded-pill small`}>
                            {getEventStatus(event).text}
                          </span>
                        </div>
                        
                        <h5 className="fw-bold text-dark mb-2">{event.title}</h5>
                        <p className="text-muted small mb-3" style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}>
                          {event.description}
                        </p>
                        
                        <div className="event-details mb-4">
                          <div className="detail-item d-flex align-items-center mb-2">
                            <i className="fas fa-clock text-muted me-2"></i>
                            <small className="text-muted">{event.time}</small>
                          </div>
                          <div className="detail-item d-flex align-items-center mb-2">
                            <i className="fas fa-users text-muted me-2"></i>
                            <small className="text-muted">{event.audience}</small>
                          </div>
                          <div className="detail-item d-flex align-items-center">
                            <i className="fas fa-tag text-muted me-2"></i>
                            <small className="text-muted fw-bold">{event.price}</small>
                          </div>
                        </div>
                        
                        <button 
                          className="btn btn-outline-primary rounded-pill px-4 py-2 w-100"
                          onClick={() => setSelectedEvent(event)}
                          disabled={getEventStatus(event).status === 'full'}
                        >
                          {getEventStatus(event).status === 'full' ? (
                            <>
                              <i className="fas fa-times me-2"></i>Sold Out
                            </>
                          ) : (
                            <>
                              <i className="fas fa-info-circle me-2"></i>View Details
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <i className="fas fa-calendar-times text-muted fs-1 mb-3"></i>
                <h5 className="text-muted">No events found in this category</h5>
                <p className="text-muted">Try selecting a different category or check back later for new events.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Special Programs Section */}
      <section className="special-programs py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-success text-white px-3 py-2 rounded-pill mb-3">
              Special Programs
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">Children's Learning Adventures</h2>
            <p className="lead text-muted">
              Specially designed programs to spark curiosity in young minds with hands-on activities and interactive storytelling
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="program-card bg-white rounded-4 shadow-sm p-4 text-center h-100">
                <div className="program-icon bg-warning bg-opacity-10 rounded-circle p-4 mx-auto mb-4" style={{width: '80px', height: '80px'}}>
                  <i className="fas fa-book-open text-warning fs-2"></i>
                </div>
                <h5 className="fw-bold text-dark mb-3">Ocean Storytime</h5>
                <p className="text-muted mb-4">
                  Weekly sessions with marine-themed books, puppet shows, and creative crafts for our youngest ocean explorers.
                </p>
                <div className="program-schedule bg-light rounded-3 p-3 mb-4">
                  <div className="small text-muted mb-1">Every Saturday</div>
                  <div className="fw-bold text-dark">11:00 AM - 12:00 PM</div>
                  <div className="small text-muted">Ages 3-8 • Free</div>
                </div>
                <button className="btn btn-warning rounded-pill px-4 py-2">
                  <i className="fas fa-calendar-plus me-2"></i>Join Story Time
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="program-card bg-white rounded-4 shadow-sm p-4 text-center h-100">
                <div className="program-icon bg-success bg-opacity-10 rounded-circle p-4 mx-auto mb-4" style={{width: '80px', height: '80px'}}>
                  <i className="fas fa-microscope text-success fs-2"></i>
                </div>
                <h5 className="fw-bold text-dark mb-3">Junior Marine Biologist</h5>
                <p className="text-muted mb-4">
                  Hands-on science program where kids conduct experiments and learn about marine research techniques.
                </p>
                <div className="program-schedule bg-light rounded-3 p-3 mb-4">
                  <div className="small text-muted mb-1">Monthly Program</div>
                  <div className="fw-bold text-dark">2:00 PM - 4:00 PM</div>
                  <div className="small text-muted">Ages 8-14 • $15</div>
                </div>
                <button className="btn btn-success rounded-pill px-4 py-2">
                  <i className="fas fa-flask me-2"></i>Start Exploring
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="program-card bg-white rounded-4 shadow-sm p-4 text-center h-100">
                <div className="program-icon bg-info bg-opacity-10 rounded-circle p-4 mx-auto mb-4" style={{width: '80px', height: '80px'}}>
                  <i className="fas fa-birthday-cake text-info fs-2"></i>
                </div>
                <h5 className="fw-bold text-dark mb-3">Birthday Parties</h5>
                <p className="text-muted mb-4">
                  Make your child's birthday unforgettable with private tours, hands-on activities, and special animal encounters.
                </p>
                <div className="program-schedule bg-light rounded-3 p-3 mb-4">
                  <div className="small text-muted mb-1">Weekend Availability</div>
                  <div className="fw-bold text-dark">2-hour packages</div>
                  <div className="small text-muted">All Ages • $150</div>
                </div>
                <button className="btn btn-info rounded-pill px-4 py-2">
                  <i className="fas fa-gift me-2"></i>Plan Party
                </button>
              </div>
            </div>
          </div>

          <div className="registration-cta bg-light rounded-4 p-5 mt-5 text-center">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h4 className="fw-bold text-dark mb-2">Ready to Register?</h4>
                <p className="text-muted mb-md-0">
                  Register for events via email, phone, or our online contact form. Spaces are limited, so book early to secure your spot!
                </p>
              </div>
              <div className="col-md-4">
                <div className="d-flex flex-column gap-2">
                  <button className="btn btn-primary rounded-pill px-4 py-2">
                    <i className="fas fa-envelope me-2"></i>Email Registration
                  </button>
                  <button className="btn btn-outline-primary rounded-pill px-4 py-2">
                    <i className="fas fa-phone me-2"></i>Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div 
          className="modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-4"
          style={{ 
            backgroundColor: 'rgba(0,0,0,0.8)', 
            zIndex: 9999 
          }}
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="modal-content bg-white rounded-4 position-relative" 
            style={{ maxWidth: '700px', maxHeight: '90vh', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="btn-close position-absolute top-0 end-0 m-3"
              style={{ zIndex: 10 }}
              onClick={() => setSelectedEvent(null)}
            ></button>
            
            <div className="event-modal-image">
              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.title}
                className="w-100"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="position-absolute top-3 start-3">
                <span className={`badge ${getEventStatus(selectedEvent).class} text-white px-3 py-2 rounded-pill`}>
                  {getEventStatus(selectedEvent).text}
                </span>
              </div>
            </div>
            
            <div className="modal-body p-5">
              <div className="event-header mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="date-box bg-primary text-white rounded-3 p-3 me-4 text-center">
                    <div className="fw-bold fs-5">{formatDate(selectedEvent.date).day}</div>
                    <div className="small">{formatDate(selectedEvent.date).month}</div>
                  </div>
                  <div>
                    <h3 className="fw-bold text-dark mb-2">{selectedEvent.title}</h3>
                    <div className="text-muted">
                      <i className="fas fa-calendar me-2"></i>{formatDate(selectedEvent.date).weekday}
                      <span className="mx-2">•</span>
                      <i className="fas fa-clock me-2"></i>{selectedEvent.time}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="event-details mb-4">
                <p className="lead text-muted mb-4">{selectedEvent.description}</p>
                
                <div className="row g-4 mb-4">
                  <div className="col-6">
                    <div className="detail-card bg-light rounded-3 p-3">
                      <div className="d-flex align-items-center mb-2">
                        <i className="fas fa-users text-primary me-2"></i>
                        <h6 className="fw-bold mb-0">Target Audience</h6>
                      </div>
                      <p className="text-muted mb-0">{selectedEvent.audience}</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="detail-card bg-light rounded-3 p-3">
                      <div className="d-flex align-items-center mb-2">
                        <i className="fas fa-tag text-success me-2"></i>
                        <h6 className="fw-bold mb-0">Price</h6>
                      </div>
                      <p className="text-muted mb-0 fs-5 fw-bold">{selectedEvent.price}</p>
                    </div>
                  </div>
                </div>
                
                <div className="availability-info bg-light rounded-3 p-3 mb-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="fw-bold text-dark mb-1">Availability</h6>
                      <p className="text-muted mb-0">
                        {selectedEvent.capacity - selectedEvent.registered} spots remaining out of {selectedEvent.capacity}
                      </p>
                    </div>
                    <div className="progress" style={{ width: '100px', height: '8px' }}>
                      <div 
                        className="progress-bar bg-primary" 
                        style={{ width: `${(selectedEvent.registered / selectedEvent.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="modal-actions d-flex gap-3" style={{ margin: '10px' }}>
                {getEventStatus(selectedEvent).status !== 'full' ? (
                  <>
                    <button className="btn btn-primary btn-lg rounded-pill px-5 py-3 flex-grow-1">
                      <i className="fas fa-ticket-alt me-2"></i>Register Now
                    </button>
                    <button className="btn btn-outline-primary btn-lg rounded-pill px-4 py-3">
                      <i className="fas fa-share me-2"></i>Share
                    </button>
                  </>
                ) : (
                  <button className="btn btn-secondary btn-lg rounded-pill px-5 py-3 flex-grow-1" disabled>
                    <i className="fas fa-times me-2"></i>Event Full
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;