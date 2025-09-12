import { NavLink } from 'react-router-dom';
import { Navbar as BSNavbar, Nav } from 'react-bootstrap';
import { useState } from 'react';

function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: 'ℹ️' },
    { path: '/contact', label: 'Contact', icon: '📧' },
    { path: '/gallery', label: 'Gallery', icon: '🖼️' },
    { path: '/animals', label: 'Animals', icon: '🐠' },
    { path: '/events', label: 'Events', icon: '📅' },
    { path: '/reviews', label: 'Reviews', icon: '⭐' },
    { path: '/sitemap', label: 'Site Map', icon: '🗺️' },
    { path: '/queries', label: 'Queries', icon: '❓' }
  ];

  return (
    <nav 
      className="navbar navbar-expand-lg sticky-top py-0"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.95))',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(59, 130, 246, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        zIndex: 999
      }}
    >
      <div className="container-fluid px-4">
        <button 
          className="navbar-toggler border-0 shadow-none p-2"
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          style={{
            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
            borderRadius: '10px'
          }}
        >
          <span 
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'white',
              margin: '4px 0',
              borderRadius: '1px',
              transition: 'all 0.3s ease'
            }}
          />
          <span 
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'white',
              margin: '4px 0',
              borderRadius: '1px',
              transition: 'all 0.3s ease'
            }}
          />
          <span 
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'white',
              margin: '4px 0',
              borderRadius: '1px',
              transition: 'all 0.3s ease'
            }}
          />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto d-flex align-items-center">
            {navItems.map((item, index) => (
              <li key={item.path} className="nav-item mx-1">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `nav-link d-flex align-items-center justify-content-center text-decoration-none position-relative overflow-hidden ${
                      isActive ? 'text-primary fw-bold' : 'text-secondary'
                    }`
                  }
                  onMouseEnter={() => setHoveredItem(item.path)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    padding: '0px 20px',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    letterSpacing: '0.3px',
                    minHeight: '50px',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    transform: 'translateY(0) scale(1)',
                    background:'transparent',
                  }}
                >
                  {/* Animated background */}
                  <div 
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      borderRadius: '12px',
                      transform: hoveredItem === item.path ? 'scale(1)' : 'scale(0)',
                      transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      zIndex: -1
                    }}
                  />

                  {/* Icon and Text Container */}
                  <div className="d-flex align-items-center">
                    <span 
                      className="me-2 d-none d-lg-inline"
                      style={{
                        fontSize: '16px',
                        opacity: hoveredItem === item.path ? 1 : 0.8,
                        transform: hoveredItem === item.path ? 'rotate(10deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {item.icon}
                    </span>
                    
                    <span className="position-relative">
                      {item.label}
                      
                      {/* Animated underline */}
                      <span 
                        className="position-absolute bottom-0 start-0"
                        style={{
                          height: '2px',
                          background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
                          borderRadius: '1px',
                          width: hoveredItem === item.path ? '100%' : '0%',
                          transition: 'width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                          transform: 'translateY(6px)'
                        }}
                      />
                    </span>
                  </div>

                  {/* Ripple effect */}
                  <div 
                    className="position-absolute top-50 start-50 translate-middle rounded-circle"
                    style={{
                      width: hoveredItem === item.path ? '120%' : '0%',
                      height: hoveredItem === item.path ? '120%' : '0%',
                      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                      transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      pointerEvents: 'none',
                      zIndex: -2
                    }}
                  />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Enhanced bottom border */}
      <div 
        className="position-absolute bottom-0 start-0 w-100"
        style={{
          height: '3px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.4) 25%, rgba(16, 185, 129, 0.4) 75%, transparent 100%)',
          opacity: 0.6
        }}
      />

      {/* Subtle top highlight */}
      <div 
        className="position-absolute top-0 start-0 w-100"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
          opacity: 0.8
        }}
      />
    </nav>
  );
}

export default Navbar;