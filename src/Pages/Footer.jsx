import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer-link {
          color: #e2e8f0;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.25s ease;
        }

        .footer-link:hover {
          color: #ffffff;
          padding-left: 4px;
        }

        .footer-brand {
          font-size: 1.35rem;
          font-weight: 700;
          letter-spacing: -0.5px;
          color: #ffffff;
        }

        .footer-cta-card {
          background: linear-gradient(135deg, #1e2530 0%, #0f141c 100%);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .text-footer-sub {
          color: #cbd5e1 !important;
        }

        .text-footer-muted {
          color: #94a3b8 !important;
        }
      `}</style>

      <footer className="bg-dark text-white pt-5 pb-4 overflow-hidden position-relative">
        <Container>

          {/* MAIN FOOTER CONTENT */}
          <Row className="gy-4 mb-5">
            {/* Brand Intro Column */}
            <Col xs={12} lg={5} className="pe-lg-5">
              <div className="footer-brand mb-3">
                ✨ Avisa Interiors
              </div>
              <p className="text-footer-sub fs-6 lh-relaxed mb-4" style={{ maxWidth: '380px' }}>
                Elevating modern living through luxury, minimalism, and functional architectural interior solutions.
              </p>
            </Col>

            {/* Quick Links Column */}
            <Col xs={6} sm={4} lg={3}>
              <h6 className="text-uppercase fw-bold text-white mb-3 tracking-wider small">
                Navigation
              </h6>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                <li>
                  <a href="#about" className="footer-link">About Us</a>
                </li>
                <li>
                  <a href="#projects" className="footer-link">Projects</a>
                </li>
                <li>
                  <a href="#services" className="footer-link">Services</a>
                </li>
              </ul>
            </Col>

            {/* Contact Info Column */}
            <Col xs={6} sm={4} lg={4}>
              <h6 className="text-uppercase fw-bold text-white mb-3 tracking-wider small">
                Get In Touch
              </h6>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-footer-sub small">
                <li>
                  <Button variant="primary" size="xs" className="rounded-pill px-4 py-3 fw-medium shadow-sm">
                    Contact
                    </Button>
                </li>
                <li>
                  <strong className="text-white">Hours:</strong> Mon - Sat, 10:00 AM - 7:00 PM
                </li>
              </ul>
            </Col>
          </Row>

          {/* BOTTOM BAR / COPYRIGHT */}
          <div className="pt-4 border-top border-secondary border-opacity-50 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <p className="text-footer-sub small mb-0">
              © {currentYear} <strong className="text-white">Avisa Interiors</strong>. All rights reserved.
            </p>
            
            <div className="d-flex gap-4">
              <a href="#about" className="text-footer-sub small text-decoration-none hover-white">
                Privacy Policy
              </a>
              <a href="#about" className="text-footer-sub small text-decoration-none hover-white">
                Terms of Service
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;