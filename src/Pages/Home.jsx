import React from 'react';
import { Button, Col, Container, Row, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section 
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
          <Col xs={12} md={7} lg={7} className="pe-lg-4">
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
          <Col xs={12} md={5} lg={5}>
            <motion.div 
              className="position-relative overflow-hidden rounded-4 shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img 
                src="Images/Image1.png"
                alt="Minimalist Interior Showcase"
                className="img-fluid w-100 object-fit-cover rounded-4"
                style={{ maxHeight: '520px', minHeight: '350px' }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;