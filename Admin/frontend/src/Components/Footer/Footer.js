import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { FaHouseDamage } from 'react-icons/fa'
import { MdOutlineDesignServices } from 'react-icons/md'
import './Footer.css'

const Footer = () => {
  return (
    <div className="main">
      <Container>
        <Row className='footerRow'>
          <Col md={3}>
            <div className="col-md">
              <div className="d-flex">
                <FaHouseDamage size={24} />
                <h4 className="heading">House and garden</h4>
              </div>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
              <Nav.Link href="#pricing">Water borne heat</Nav.Link>
            </div>
          </Col>

          <Col md={3}>
            <div className="col-md">
              <div className="d-flex">
                <MdOutlineDesignServices size={24} />
                <h4 className="heading">Services</h4>
              </div>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
              <Nav.Link href="#pricing">Water borne heat</Nav.Link>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
              <Nav.Link href="#pricing">Water borne heat</Nav.Link>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
            </div>
          </Col>
          <Col md={3}>
            <div className="col-md">
              <div className="d-flex">
                <MdOutlineDesignServices size={24} />
                <h4 className="heading">Services</h4>
              </div>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
              <Nav.Link href="#pricing">Water borne heat</Nav.Link>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
              <Nav.Link href="#pricing">Water borne heat</Nav.Link>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
            </div>
          </Col>
          <Col md={3}>
            <div className="col-md">
              <div className="d-flex">
                <MdOutlineDesignServices size={24} />
                <h4 className="heading">Services</h4>
              </div>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
              <Nav.Link href="#pricing">Water borne heat</Nav.Link>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
              <Nav.Link href="#pricing">Water borne heat</Nav.Link>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer