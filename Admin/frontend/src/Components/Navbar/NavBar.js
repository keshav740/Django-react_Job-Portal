// Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css'
import Categories from '../CategoriesSection/Categories';
import MiddSection from '../MiddSection/MiddSection';
import MiddSection11 from '../MiddSection/MiddSection11';
import MiddSection111 from '../MiddSection/MiddSection111';
import Footer from '../Footer/Footer';

const NavBar = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light  " variant="light">
      <Container>
      <Navbar.Brand href="/">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/signin">Sign In</Nav.Link>
          <Nav.Link href="/postjob">Post a Job</Nav.Link>
          {/* Add more Nav.Link components for additional menu items */}
        </Nav>
        <Nav>
          <Nav.Link href="#login">Register your company</Nav.Link>
          {/* Add more Nav.Link components for additional menu items */}
        </Nav>
      </Navbar.Collapse>    
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;
