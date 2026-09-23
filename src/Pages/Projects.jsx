import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Fix: Ignore external cross-origin script errors (like Instagram embeds)
  useEffect(() => {
    const handleGlobalError = (event) => {
      if (event.message === 'Script error.' || event.filename?.includes('instagram.com')) {
        event.stopImmediatePropagation();
        return true;
      }
    };

    window.addEventListener('error', handleGlobalError);
    return () => window.removeEventListener('error', handleGlobalError);
  }, []);

  // Instagram Embed loading
  useEffect(() => {
    if (window.instgrm) {
      try {
        window.instgrm.Embeds.process();
      } catch (e) {
        // silent catch
      }
    } else {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
    }
  }, []);

  const instagramReels = [
    {
      id: 1,
      title: 'A space designed for devotion 🙏',
      embedUrl: 'https://www.instagram.com/reel/DdjaR1MNV4J/embed/'
    },
    {
      id: 2,
      title: 'Luxury Villa Master Bedroom 🛏️',
      embedUrl: 'https://www.instagram.com/reel/DdY_2xVOc94/embed/'
    },
    {
      id: 3,
      title: 'Modern Modular Kitchen Process 🍳',
      embedUrl: 'https://www.instagram.com/reel/Dc-V1CcN_2j/embed/'
    },
    {
      id: 4,
      title: 'Bespoke Lighting Design Details 💡',
      embedUrl: 'https://www.instagram.com/reel/DXedZ6puzG9/embed/'
    }
  ];

  const galleryItems = [
    { id: 1, title: 'The Ivory Residence', category: 'Living Room', image: '/Images/Image1.png', location: 'South Mumbai' },
    { id: 2, title: 'Serenity Penthouse', category: 'Bedroom', image: '/Images/Image1.png', location: 'Bandra West' },
    { id: 3, title: 'Aura Commercial Studio', category: 'Office', image: '/Images/Image1.png', location: 'BKC, Mumbai' },
    { id: 4, title: 'Verve Luxury Duplex', category: 'Luxury Villas', image: '/Images/Image1.png', location: 'Worli' },
    { id: 5, title: 'Monochrome Loft', category: 'Living Room', image: '/Images/Image1.png', location: 'Juhu' },
    { id: 6, title: 'Earthy Modern Haven', category: 'Bedroom', image: '/Images/Image1.png', location: 'Powai' }
  ];

  const categories = ['All', 'Living Room', 'Bedroom', 'Luxury Villas', 'Office'];

  const filteredGallery = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      <style>{`
        .reels-scroll-container {
          display: flex;
          gap: 1.25rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding-bottom: 1rem;
          scrollbar-width: thin;
        }

        .reel-card {
          flex: 0 0 300px;
          height: 500px;
          scroll-snap-align: start;
          border-radius: 18px;
          overflow: hidden;
          background: #f8f9fa;
          position: relative;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.08);
        }

        .gallery-card {
          border-radius: 16px;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .gallery-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
        }

        .gallery-img {
          height: 320px;
          object-fit: cover;
        }

        .filter-btn {
          border-radius: 50rem;
          padding: 0.5rem 1.25rem;
          font-weight: 500;
          font-size: 0.9rem;
          border: 1px solid rgba(0, 0, 0, 0.1);
          background: transparent;
          color: #212529;
          transition: all 0.25s ease;
        }

        .filter-btn.active, .filter-btn:hover {
          background: #000;
          color: #fff;
          border-color: #000;
        }
      `}</style>

      <div className="bg-light min-vh-100" style={{ paddingTop: '110px', paddingBottom: '60px' }}>
        <Container>
          {/* TOP SECTION: INSTAGRAM REELS SHOWCASE */}
          <section className="mb-5 pb-4 border-bottom">
            <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
              <div>
                <Badge bg="dark" className="rounded-pill px-3 py-2 fw-normal text-white mb-2">
                  📸 Social Showcase
                </Badge>
                <h2 className="fw-bold text-dark fs-3 mb-0">Behind The Scenes on Instagram</h2>
              </div>
              <Button 
                variant="outline-dark" 
                size="sm" 
                className="rounded-pill px-3"
                href="https://www.instagram.com" 
                target="_blank"
                rel="noreferrer"
              >
                Follow @avisa.interiors ➔
              </Button>
            </div>

            {/* Scrollable Reels Track */}
            <div className="reels-scroll-container">
              {instagramReels.map((reel) => (
                <div key={reel.id} className="reel-card">
                  <iframe
                    src={reel.embedUrl}
                    className="w-100 h-100 border-0"
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title={reel.title}
                  ></iframe>
                </div>
              ))}
            </div>
          </section>

          {/* BOTTOM SECTION: FILTERABLE GALLERY */}
          <section>
            <div className="text-center mb-4">
              <span className="text-primary fw-semibold text-uppercase tracking-wider small d-block mb-1">
                Portfolio
              </span>
              <h2 className="display-6 fw-bold text-dark mb-3">Featured Projects Gallery</h2>
              
              <div className="d-flex justify-content-center gap-2 flex-wrap mt-4 mb-5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <Row className="g-4">
              <AnimatePresence>
                {filteredGallery.map((item) => (
                  <Col key={item.id} xs={12} md={6} lg={4}>
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.35 }}
                      className="gallery-card h-100 d-flex flex-column"
                    >
                      <div className="position-relative overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-100 gallery-img" 
                        />
                        <Badge 
                          bg="dark" 
                          className="position-absolute top-0 end-0 m-3 rounded-pill px-3 py-2 opacity-75"
                        >
                          {item.category}
                        </Badge>
                      </div>

                      <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                        <div>
                          <small className="text-muted text-uppercase tracking-wider fw-semibold d-block mb-1">
                            📍 {item.location}
                          </small>
                          <h4 className="fw-bold fs-5 text-dark mb-2">{item.title}</h4>
                        </div>
                        <div className="pt-3 border-top mt-3 d-flex justify-content-between align-items-center">
                          <span className="text-primary fw-semibold small">View Case Study</span>
                          <span className="text-dark">➔</span>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                ))}
              </AnimatePresence>
            </Row>
          </section>
        </Container>
      </div>
    </>
  );
}

export default Projects;