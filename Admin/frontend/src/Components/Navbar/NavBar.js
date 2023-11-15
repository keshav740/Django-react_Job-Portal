// Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light  " variant="light">
      <Container>
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#features">Sign In</Nav.Link>
          <Nav.Link href="#pricing">Post a Job</Nav.Link>
          {/* Add more Nav.Link components for additional menu items */}
        </Nav>
        <Nav>
          <Nav.Link href="#login">Register your company</Nav.Link>
          {/* Add more Nav.Link components for additional menu items */}
        </Nav>
      </Navbar.Collapse>    
      </Container>
    </Navbar>
  );
}

export default NavBar;
