import React, { useEffect, useState } from 'react';
import animalsData from '../data/animals.json';

function Animals() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (animalsData && animalsData.categories) {
      // Add missing properties to categories from JSON
      const enrichedCategories = animalsData.categories.map((category, index) => ({
        ...category,
        icon: getCategoryIcon(category.name),
        color: getCategoryColor(index),
        description: getCategoryDescription(category.name),
        // Species data is now complete in JSON, no need to enrich
        species: category.species.map(species => ({
          ...species,
          // Use fallback values only if not provided in JSON
          habitat: species.habitat || getDefaultHabitat(category.name),
          diet: species.diet || getDefaultDiet(species.name),
          status: species.status || 'Stable'
        }))
      }));
      setCategories(enrichedCategories);
    }
    setLoading(false);
  }, []);

  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      'Fish': 'fas fa-fish',
      'Mammals': 'fas fa-water',
      'Sharks': 'fas fa-tooth',
      'Jellyfish': 'fas fa-circle',
      'Rays': 'fas fa-fish',
      'Reptiles': 'fas fa-dragon',
      'Invertebrates': 'fas fa-bug'
    };
    return iconMap[categoryName] || 'fas fa-fish';
  };

  const getCategoryColor = (index) => {
    const colors = ['primary', 'danger', 'info', 'success', 'warning', 'secondary', 'dark'];
    return colors[index % colors.length];
  };

  const getCategoryDescription = (categoryName) => {
    const descriptions = {
      'Fish': 'Diverse aquatic vertebrates with gills and fins, showcasing incredible variety in our ocean exhibits',
      'Mammals': 'Intelligent and social ocean dwellers that breathe air and nurse their young',
      'Sharks': 'Apex predators and ancient ocean survivors, essential for marine ecosystem balance',
      'Jellyfish': 'Ancient and mesmerizing creatures of the deep, drifting gracefully through our waters',
      'Rays': 'Graceful bottom-dwellers with flattened bodies, perfectly adapted for life on the ocean floor',
      'Reptiles': 'Cold-blooded marine reptiles that have adapted to life in saltwater environments',
      'Invertebrates': 'Animals without backbones, representing the most diverse group in our marine collection'
    };
    return descriptions[categoryName] || 'Fascinating marine creatures';
  };

  const getDefaultHabitat = (categoryName) => {
    const habitats = {
      'Fish': 'Coral reefs and open waters',
      'Mammals': 'Coastal and open waters',
      'Sharks': 'Various ocean depths',
      'Jellyfish': 'Open ocean waters',
      'Rays': 'Sandy ocean floors',
      'Reptiles': 'Warm coastal waters',
      'Invertebrates': 'Various marine environments'
    };
    return habitats[categoryName] || 'Marine environment';
  };

  const getDefaultDiet = (speciesName) => {
    return 'Various marine organisms';
  };

  const conservationPrograms = [
    {
      title: "Shark Conservation Initiative",
      description: "Protecting shark populations through research and education programs",
      icon: "fas fa-shield-alt",
      color: "danger",
      impact: "500+ sharks protected"
    },
    {
      title: "Coral Reef Restoration",
      description: "Active restoration of damaged coral reefs through innovative techniques",
      icon: "fas fa-seedling",
      color: "success",
      impact: "2,000 sq ft restored"
    },
    {
      title: "Sea Turtle Rescue",
      description: "Rehabilitation and release program for injured sea turtles",
      icon: "fas fa-heart",
      color: "warning",
      impact: "150+ turtles saved"
    },
    {
      title: "Plastic-Free Oceans",
      description: "Community education and cleanup initiatives to reduce ocean plastic",
      icon: "fas fa-recycle",
      color: "info",
      impact: "10,000 lbs removed"
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      'Stable': { class: 'bg-success', text: 'Stable Population' },
      'Vulnerable': { class: 'bg-warning', text: 'Vulnerable' },
      'Endangered': { class: 'bg-danger', text: 'Endangered' },
      'Critical': { class: 'bg-danger', text: 'Critically Endangered' }
    };
    return statusConfig[status] || { class: 'bg-secondary', text: status };
  };
  const getSpeciesImage = (species) => {
    const imageName = species.image;
    console.log('Loading image:', imageName);
    return `${imageName}`;
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

  if (!categories.length) {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '60vh' }}>
        <h3 className="text-muted mb-3">No animal data available</h3>
        <p className="text-muted">Please check your animals.json file</p>
      </div>
    );
  }

  return (
    <div className="animals-page">
      {/* Hero Section */}
      <section className="animals-hero position-relative overflow-hidden">
        <div className="hero-background position-absolute w-100 h-100" style={{
          backgroundImage: "linear-gradient(135deg, rgba(0,123,191,0.85) 0%, rgba(0,181,204,0.8) 100%), url('../assets/hero-sea.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}></div>
        <div className="hero-content position-relative text-white text-center py-5 d-flex align-items-center" style={{ zIndex: 2, minHeight: '60vh' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <span className="badge bg-light text-primary px-4 py-2 rounded-pill mb-4 fs-6">
                  Marine Biodiversity
                </span>
                <h1 className="display-3 fw-bold mb-4">Our Marine Life Collection</h1>
                <p className="lead fs-4 mb-5">
                  Discover our spectacular marine species from around the world's oceans
                </p>
                <div className="hero-stats d-flex justify-content-center gap-5 flex-wrap">
                  <div className="stat-item">
                    <h3 className="fw-bold mb-1">{categories.reduce((total, cat) => total + cat.species.length, 0)}+</h3>
                    <small>Species</small>
                  </div>
                  <div className="stat-item">
                    <h3 className="fw-bold mb-1">{categories.length}</h3>
                    <small>Categories</small>
                  </div>
                  <div className="stat-item">
                    <h3 className="fw-bold mb-1">4</h3>
                    <small>Ocean Zones</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="introduction-content pe-lg-5">
                <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3">
                  Our Mission
                </span>
                <h2 className="display-5 fw-bold text-dark mb-4">
                  Protecting Ocean <span className="text-primary">Biodiversity</span>
                </h2>
                <p className="lead text-muted mb-4">
                  At Jenkinson Sea Life, we house diverse marine species in carefully designed habitats that replicate their natural environments. Each exhibit tells a story of adaptation, survival, and the delicate balance of marine ecosystems.
                </p>
                <p className="text-muted mb-4">
                  Our categorization helps visitors navigate the incredible diversity of ocean life, from tiny invertebrates that form the base of the food chain to magnificent apex predators that maintain ecosystem balance.
                </p>
                
                <div className="introduction-features row g-4">
                  <div className="col-6">
                    <div className="feature-item d-flex align-items-center">
                      <div className="feature-icon bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                        <i className="fas fa-microscope text-primary"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Research Programs</h6>
                        <small className="text-muted">Active conservation research</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="feature-item d-flex align-items-center">
                      <div className="feature-icon bg-success bg-opacity-10 rounded-circle p-2 me-3">
                        <i className="fas fa-graduation-cap text-success"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Education Focus</h6>
                        <small className="text-muted">Learning through interaction</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="introduction-visual bg-light rounded-4 p-4">
                <div className="ecosystem-diagram text-center">
                  <h5 className="fw-bold text-dark mb-4">Ocean Ecosystem Zones</h5>
                  <div className="zones-stack">
                    <div className="zone-item bg-primary bg-opacity-10 rounded-3 p-3 mb-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <i className="fas fa-sun text-warning me-2"></i>
                          <span className="fw-semibold">Sunlight Zone</span>
                        </div>
                        <small className="text-muted">0-200m</small>
                      </div>
                    </div>
                    <div className="zone-item bg-info bg-opacity-10 rounded-3 p-3 mb-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <i className="fas fa-moon text-info me-2"></i>
                          <span className="fw-semibold">Twilight Zone</span>
                        </div>
                        <small className="text-muted">200-1000m</small>
                      </div>
                    </div>
                    <div className="zone-item bg-dark bg-opacity-10 rounded-3 p-3 mb-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <i className="fas fa-eye-slash text-dark me-2"></i>
                          <span className="fw-semibold">Midnight Zone</span>
                        </div>
                        <small className="text-muted">1000m+</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Species Categories Section */}
      <section className="species-section py-5" style={{ background: 'linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3">
              Species Collection
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">Explore Our Marine Life</h2>
            <p className="lead text-muted">
              Journey through different marine habitats and meet the incredible creatures that call our oceans home
            </p>
          </div>

          {/* Category Navigation */}
          <div className="category-nav d-flex justify-content-center mb-5 flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`btn rounded-pill px-4 py-3 d-flex align-items-center ${
                  activeCategory === index 
                    ? `btn-${category.color}` 
                    : `btn-outline-${category.color}`
                }`}
                onClick={() => setActiveCategory(index)}
              >
                <i className={`${category.icon} me-2`}></i>
                {category.name}
                <span className="badge bg-white text-dark ms-2">
                  {category.species.length}
                </span>
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          {categories.length > 0 && (
            <div className="active-category">
              <div className="category-header bg-white rounded-4 shadow-sm p-5 mb-4">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <div className="d-flex align-items-center mb-3">
                      <div className={`bg-${categories[activeCategory].color} bg-opacity-10 rounded-circle p-3 me-4`}>
                        <i className={`${categories[activeCategory].icon} text-${categories[activeCategory].color} fs-3`}></i>
                      </div>
                      <div>
                        <h3 className="fw-bold text-dark mb-2">{categories[activeCategory].name}</h3>
                        <span className={`badge bg-${categories[activeCategory].color} text-white px-3 py-2 rounded-pill`}>
                          {categories[activeCategory].species.length} Species
                        </span>
                      </div>
                    </div>
                    <p className="text-muted mb-0">{categories[activeCategory].description}</p>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <button className="btn btn-outline-primary rounded-pill px-4 py-2">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      Visit Exhibit
                    </button>
                  </div>
                </div>
              </div>

              {/* Species Grid */}
              <div className="species-grid row g-4">
                {categories[activeCategory].species.map((species, index) => (
                  <div key={index} className="col-lg-4 col-md-6">
                    <div className="species-card bg-white rounded-4 shadow-sm overflow-hidden h-100 position-relative">
                      <div className="species-image position-relative">
                        <img 
                          src={getSpeciesImage(species)}
                          alt={species.name}
                          className="w-100"
                          style={{ height: '250px', objectFit: 'cover', marginBottom: '10px' }}
                        />
                        <div className="species-badge position-absolute top-3 end-3 ">
                          <span className={`badge ${getStatusBadge(species.status).class} text-white px-3 py-2 rounded-pill`}>
                            {getStatusBadge(species.status).text}
                          </span>
                        </div>
                      </div>
                      
                      <div className="species-content" style={{ marginTop: '30px', paddingLeft: '5px' }}>
                        <h5 className="fw-bold text-dark mb-3">{species.name}</h5>
                        <p className="text-muted mb-4" style={{ minHeight: '60px' }}>{species.info}</p>
                        
                        <div className="species-details">
                          <div className="detail-item d-flex align-items-start mb-2">
                            <i className="fas fa-home text-primary me-2 mt-1"></i>
                            <small className="text-muted"><strong>Habitat:</strong> {species.habitat}</small>
                          </div>
                          <div className="detail-item d-flex align-items-start mb-2">
                            <i className="fas fa-utensils text-success me-2 mt-1"></i>
                            <small className="text-muted"><strong>Diet:</strong> {species.diet}</small>
                          </div>
                        </div>
                        
                        <button 
                          className="btn btn-outline-primary rounded-pill px-4 py-2 w-100 mt-3"
                          onClick={() => setSelectedAnimal(species)}
                        >
                          <i className="fas fa-info-circle me-2"></i>
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Conservation Section */}
      <section className="conservation-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-success text-white px-3 py-2 rounded-pill mb-3">
              Conservation Impact
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">Our Conservation Efforts</h2>
            <p className="lead text-muted mb-5">
              We partner with global organizations to protect endangered species and preserve marine ecosystems for future generations
            </p>
          </div>

          <div className="conservation-programs row g-4 mb-5">
            {conservationPrograms.map((program, index) => (
              <div key={index} className="col-lg-6">
                <div className="conservation-card bg-white rounded-4 shadow-sm p-4 h-100">
                  <div className="d-flex align-items-start">
                    <div className={`bg-${program.color} bg-opacity-10 rounded-circle p-3 me-4 flex-shrink-0`}>
                      <i className={`${program.icon} text-${program.color} fs-4`}></i>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-bold text-dark mb-3">{program.title}</h5>
                      <p className="text-muted mb-3">{program.description}</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <span className={`badge bg-${program.color} bg-opacity-10 text-${program.color} px-3 py-2 rounded-pill`}>
                          <i className="fas fa-chart-line me-1"></i>
                          {program.impact}
                        </span>
                        <button className={`btn btn-outline-${program.color} btn-sm rounded-pill px-3`}>
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Get Involved CTA */}
          <div className="get-involved bg-primary text-white rounded-4 p-5">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h3 className="fw-bold mb-3">Join Our Conservation Mission</h3>
                <p className="mb-lg-0">
                  Learn how you can help protect marine life through our adoption programs, volunteer opportunities, and educational initiatives. Every action counts in preserving our oceans.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <div className="d-flex flex-column gap-3">
                  <button className="btn btn-light btn-lg px-4 py-3 rounded-pill">
                    <i className="fas fa-heart me-2"></i>Adopt an Animal
                  </button>
                  <button className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill">
                    <i className="fas fa-hands-helping me-2"></i>Volunteer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animal Details Modal */}
      {selectedAnimal && (
        <div 
          className="modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-4"
          style={{ 
            backgroundColor: 'rgba(0,0,0,0.8)', 
            zIndex: 9999 
          }}
          onClick={() => setSelectedAnimal(null)}
        >
          <div 
            className="modal-content bg-white rounded-4 p-5 position-relative" 
            style={{ maxWidth: '600px', maxHeight: '80vh', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="btn-close position-absolute top-0 end-0 m-3"
              onClick={() => setSelectedAnimal(null)}
            ></button>
            
            <div className="text-center mb-4">
              <img 
                src={getSpeciesImage(selectedAnimal)}
                alt={selectedAnimal.name}
                className="img-fluid rounded-3 mb-3"
                style={{ maxHeight: '200px', objectFit: 'cover', width: '100%' }}
              />
              <h3 className="fw-bold text-dark mb-2">{selectedAnimal.name}</h3>
              <span className={`badge ${getStatusBadge(selectedAnimal.status).class} text-white px-3 py-2 rounded-pill`}>
                {getStatusBadge(selectedAnimal.status).text}
              </span>
            </div>
            
            <div className="animal-details">
              <p className="lead text-muted mb-4">{selectedAnimal.info}</p>
              
              <div className="row g-3">
                <div className="col-12">
                  <div className="detail-card bg-light rounded-3 p-3">
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-home text-primary me-2"></i>
                      <h6 className="fw-bold mb-0">Natural Habitat</h6>
                    </div>
                    <p className="text-muted mb-0">{selectedAnimal.habitat}</p>
                  </div>
                </div>
                <div className="col-12">
                  <div className="detail-card bg-light rounded-3 p-3">
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-utensils text-success me-2"></i>
                      <h6 className="fw-bold mb-0">Diet</h6>
                    </div>
                    <p className="text-muted mb-0">{selectedAnimal.diet}</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-4">
                <button className="btn btn-primary rounded-pill px-4 py-2 me-3">
                  <i className="fas fa-heart me-2"></i>Adopt This Animal
                </button>
                <button className="btn btn-outline-primary rounded-pill px-4 py-2">
                  <i className="fas fa-share me-2"></i>Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Animals;