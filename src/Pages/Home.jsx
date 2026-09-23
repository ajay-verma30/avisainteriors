import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section className="py-5 bg-light min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="align-items-center gy-4">
          {/* Left Column: Text Animations */}
          <Col xs={12} md={6} className="pe-lg-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-uppercase tracking-wider text-muted fw-semibold mb-2 d-block small">
                Avisa Interiors
              </span>
            </motion.div>

            <motion.h1 
              className="display-4 fw-bold lh-sm text-dark mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transforming Spaces into <span className="text-primary">Beautiful</span> Living Experiences
            </motion.h1>

            <motion.p 
              className="lead text-secondary mb-4 fs-5 fw-normal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Elevating everyday environments through premium minimalist design and functional studio philosophy.
            </motion.p>
            
            <motion.div 
              className="d-flex gap-3 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button variant="dark" size="lg" className="rounded-pill px-4 py-3 fw-medium">
                Explore Projects
              </Button>
              <Button variant="outline-dark" size="lg" className="rounded-pill px-4 py-3 fw-medium">
                Book Consultation
              </Button>
            </motion.div>
          </Col>

          {/* Right Column: Image Zoom/Fade Animation */}
          <Col xs={12} md={6}>
            <motion.div 
              className="position-relative overflow-hidden rounded-4 shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img 
                src="https://static.wixstatic.com/media/99af20_1fc9ed2a5b3945f0beac10e4f5bcb0c4~mv2.jpg/v1/fill/w_830,h_1178,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PHOTO-2024-09-21-19-48-46_edited.jpg"
                alt="Minimalist Interior Showcase"
                className="img-fluid w-100 object-fit-cover"
                style={{ maxHeight: '650px' }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;