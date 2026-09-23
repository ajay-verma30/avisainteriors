import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

function Navigate() {
  return (
    <>
      {/* Dynamic CSS Styles */}
      <style>{`
        .custom-navbar {
          /* Mobile and Tablet Default Styles (Rectangular Top Bar) */
          width: 100% !important;
          margin-top: 0 !important;
          border-radius: 0 !important;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        /* Hover effect for links */
        .hover-pill:hover {
          background-color: rgba(0, 0, 0, 0.05);
          transition: all 0.2s ease-in-out;
        }

        /* Desktop Styles (Floating Pill Design) */
        @media (min-width: 992px) {
          .custom-navbar {
            width: 90% !important;
            max-width: 1100px !important;
            margin-top: 1rem !important;
            border-radius: 50rem !important; /* Full rounded pill */
            border: 1px solid rgba(0, 0, 0, 0.08) !important;
          }
        }
      `}</style>

      <Navbar 
        fixed="top"
        expand="lg" 
        className="bg-white bg-opacity-75 backdrop-blur mx-auto px-3 custom-navbar"
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          zIndex: 1000
        }}
      >
        <Container fluid className="px-2">
          {/* Modern Brand Logo */}
          <Navbar.Brand href="/" className="fw-bold fs-4 tracking-tight text-dark d-flex align-items-center">
            <img
              alt="Logo"
              src="/Images/logo.png" 
              width="45" 
              height="36" 
              className="d-inline-block align-top me-2 object-fit-contain"
            />
            avisa<span className="text-primary">.</span>interiors✨
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none p-1" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-lg-center gap-lg-2 my-2 my-lg-0">
              <Nav.Link href="/" className="text-dark fw-medium px-3 rounded-3 hover-pill">Home</Nav.Link>
              <Nav.Link href="/projects" className="text-dark fw-medium px-3 rounded-3 hover-pill">Projects</Nav.Link>
              <Nav.Link href="/reviews" className="text-dark fw-medium px-3 rounded-3 hover-pill">Reviews</Nav.Link>
              
              {/* Contact CTA Button */}
              <Button 
                href='/contact'
                variant="dark" 
                className="rounded-pill px-4 py-2 mt-2 mt-lg-0 ms-lg-2 fw-semibold border-0 shadow-sm w-100 w-lg-auto"
                style={{
                  background: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
                  fontSize: '0.9rem'
                }}
              >
                Contact 🚀
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigate;