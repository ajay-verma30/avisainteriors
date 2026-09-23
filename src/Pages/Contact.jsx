import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section className="py-5 bg-light min-vh-100 d-flex align-items-center"
    style={{ 
        marginTop: '-100px',
        paddingTop: '6rem',
        paddingBottom: '40px' 
      }}>
      <Container>
        <Row className="gy-5 align-items-center">
          
          {/* Left Column: Info & Details */}
          <Col xs={12} lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-uppercase tracking-wider text-muted fw-semibold small d-block mb-2">
                Get in Touch
              </span>
              <h2 className="display-5 fw-bold text-dark mb-4">
                Let's Build Your Dream Space <span className="text-primary">Together.</span>
              </h2>
              <p className="text-secondary fs-6 mb-5">
                Have a project in mind or want to consult about minimalist interior design? Reach out to our studio directly.
              </p>

              <div className="d-flex flex-column gap-4">
                <div>
                  <h6 className="fw-bold mb-1 text-dark">Studio Address</h6>
                  <p className="text-muted mb-0 small">Avisa Interiors Studio, Dombivli, Mumbai</p>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-dark">Email Us</h6>
                  <p className="text-muted mb-0 small">avisaa.interiors@gmail.com</p>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-dark">Call Us</h6>
                  <p className="text-muted mb-0 small">+91 93250 56702</p>
                </div>
              </div>
            </motion.div>
          </Col>

          {/* Right Column: Contact Form */}
          <Col xs={12} lg={7}>
            <motion.div
              className="bg-white p-4 p-md-5 rounded-4 shadow-sm border"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Form>
                <Row className="g-3">
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formName">
                      <Form.Label className="small fw-semibold text-secondary">Your Name</Form.Label>
                      <Form.Control type="text" placeholder="Avisa Interiors" className="py-2 rounded-3 bg-light border-0" />
                    </Form.Group>
                  </Col>

                  <Col xs={12} md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label className="small fw-semibold text-secondary">Your Email</Form.Label>
                      <Form.Control type="email" placeholder="avisa.interiors@gmail.com" className="py-2 rounded-3 bg-light border-0" />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group controlId="formSubject">
                      <Form.Label className="small fw-semibold text-secondary">Service Needed</Form.Label>
                      <Form.Select className="py-2 rounded-3 bg-light border-0 text-secondary">
                        <option>Select Option...</option>
                        <option>Full Interior Design</option>
                        <option>Space Planning</option>
                        <option>Consultation</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group controlId="formMessage">
                      <Form.Label className="small fw-semibold text-secondary">Project Details</Form.Label>
                      <Form.Control as="textarea" rows={4} placeholder="Tell us about your space..." className="p-3 rounded-3 bg-light border-0" />
                    </Form.Group>
                  </Col>

                  <Col xs={12} className="mt-4">
                    <Button variant="dark" type="submit" className="w-100 py-3 rounded-pill fw-medium border-0">
                      Send Message 🚀
                    </Button>
                  </Col>
                </Row>
              </Form>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Contact;