import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

function Navigate() {
  return (
    <Navbar 
      fixed="top"
      expand="lg" 
      className="bg-white bg-opacity-75 backdrop-blur border rounded-pill mt-3 mx-auto shadow-sm px-3"
      style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        maxWidth: '1100px',
        width: '90%', // Mobile screens par overlap na ho isliye responsive width
        zIndex: 1000
      }}
    >
      <Container fluid className="px-2">
        {/* Modern Brand Logo */}
        <Navbar.Brand href="/home" className="fw-bold fs-4 tracking-tight text-dark d-flex align-items-center">
          <img
            alt="Logo"
            src="/Images/logo.png" 
            width="50" 
            height="40" 
            className="d-inline-block align-top me-2"
          />
          avisa<span className="text-primary">.</span>interiors✨
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-2 my-2 my-lg-0">
            <Nav.Link href="/home" className="text-dark fw-medium px-3 rounded-pill hover-pill">Home</Nav.Link>
            <Nav.Link href="#projects" className="text-dark fw-medium px-3 rounded-pill hover-pill">Projects</Nav.Link>
            <Nav.Link href="#reviews" className="text-dark fw-medium px-3 rounded-pill hover-pill">Reviews</Nav.Link>
            
            {/* Gen-Z Vibrant CTA Button */}
            <Button 
              href='/contact'
              variant="dark" 
              className="rounded-pill px-4 py-2 ms-lg-2 fw-semibold border-0 shadow-sm"
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
  );
}

export default Navigate;