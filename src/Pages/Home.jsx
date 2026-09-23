import React from 'react';
import { Button, Col, Container, Row, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Home() {
  const services = [
    {
      id: '01',
      title: 'Residential Design',
      category: 'Living & Comfort',
      description: 'Bespoke living rooms, modern kitchens, and serene bedroom interiors tailored to your personal aesthetic and lifestyle.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    {
      id: '02',
      title: 'Commercial Spaces',
      category: 'Corporate & Retail',
      description: 'Inspiring corporate offices, boutique retail outlets, and hospitality spaces designed to boost brand presence and productivity.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
    {
      id: '03',
      title: '3D Architectural Planning',
      category: 'Visualization & Layouts',
      description: 'Photorealistic 3D renders, spatial layouts, and detailed material selection before any physical work begins.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    }
  ];

  return (
    <>
    <section 
    id='landing-section'
      className="bg-light min-vh-100 d-flex flex-column justify-content-center overflow-hidden" 
      style={{ 
        marginTop: '-100px',
        paddingTop: '6rem',
        paddingBottom: '40px' 
      }}
    >
      <Container>
        <Row className="align-items-center gy-4">
          {/* Left Column: Text Animations & Badges */}
          <Col xs={12} md={8} lg={8} className="pe-lg-4">
            {/* Top Eyebrow Badge & Sub-label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="d-flex align-items-center gap-2 mb-3 flex-wrap"
            >
              <Badge 
                bg="dark" 
                className="rounded-pill px-3 py-2 fw-normal text-white border shadow-sm"
                style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}
              >
                ✨ Crafting Luxury & Minimalist Spaces
              </Badge>
              <span className="text-uppercase tracking-wider text-muted fw-semibold small">
                | Avisa Interiors
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="display-5 fw-bold lh-sm text-dark mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Transforming Spaces into <span className="text-primary">Beautiful</span> Living Experiences
            </motion.h1>

            {/* Description Subtext */}
            <motion.p 
              className="lead text-secondary mb-4 fs-5 fw-normal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Elevating everyday environments through premium minimalist design, bespoke architecture, and functional studio philosophy tailored for modern lifestyles.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="d-flex gap-3 flex-wrap mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <Button variant="dark" size="lg" className="rounded-pill px-4 py-3 fw-medium shadow-sm">
                Explore Projects ➔
              </Button>
              <Button variant="outline-dark" size="lg" className="rounded-pill px-4 py-3 fw-medium">
                Book Consultation
              </Button>
            </motion.div>

            {/* Highlighted Trust Indicators / Quick Stats */}
            <motion.div 
              className="pt-3 border-top d-flex gap-4 gap-md-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div>
                <h4 className="fw-bold mb-0 text-dark">150+</h4>
                <small className="text-muted">Projects Completed</small>
              </div>
              <div>
                <h4 className="fw-bold mb-0 text-dark">98%</h4>
                <small className="text-muted">Client Satisfaction</small>
              </div>
              <div>
                <h4 className="fw-bold mb-0 text-dark">10+ Yrs</h4>
                <small className="text-muted">Design Expertise</small>
              </div>
            </motion.div>
          </Col>

          {/* Right Column: Image Showcase */}
          <Col xs={12} md={4} lg={4}>
            <motion.div 
              className="position-relative overflow-hidden rounded-4 shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img 
                src="Images/Image1.png"
                alt="Minimalist Interior Showcase"
                className="img-fluid w-100 object-fit-stretch rounded-4"
                style={{ maxHeight: '520px', minHeight: '350px' }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>



<section className="py-5 bg-white border-top">
        <Container className="py-4">
          {/* Section Header */}
          <Row className="mb-5 text-center justify-content-center">
            <Col lg={7} md={9}>
              <Badge 
                bg="light" 
                text="primary" 
                className="rounded-pill px-3 py-2 fw-semibold text-uppercase tracking-wider border mb-3"
                style={{ fontSize: '0.75rem', letterSpacing: '1px' }}
              >
                What We Do
              </Badge>
              <h2 className="display-6 fw-bold text-dark tracking-tight mb-3">
                Tailored Design Solutions for Every Space
              </h2>
              <p className="text-secondary fs-6 lh-relaxed mb-0">
                From concept to execution, we blend aesthetic elegance with functional living to build inspirational environments.
              </p>
            </Col>
          </Row>

          {/* Feature Cards Grid */}
          <Row className="g-4">
            {services.map((service, index) => (
              <Col key={service.id} xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="p-4 p-xl-5 rounded-4 h-100 service-card d-flex flex-column justify-content-between"
                >
                  <div>
                    {/* Top Row: Icon Badge & Subtle Step Number */}
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="icon-box">
                        {service.icon}
                      </div>
                      <span className="step-number">{service.id}</span>
                    </div>

                    {/* Category Label */}
                    <span className="text-uppercase tracking-wider fw-semibold text-muted d-block mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.8px' }}>
                      {service.category}
                    </span>

                    {/* Service Title */}
                    <h3 className="fw-bold fs-4 text-dark mb-3">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-secondary fs-6 lh-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;