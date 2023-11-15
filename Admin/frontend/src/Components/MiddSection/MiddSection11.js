import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { FaHouseDamage } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import "./MiddSection.css";

const MiddSection11 = () => {
  return (
    <div className="main-midd">
        <Container>
        <Row>
          <Col md={6}>
            <div className="col-md">
              <div className="d-flex">
                <FaHouseDamage size={24} />
                <h4 className="heading">Interior renovation</h4>
              </div>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
              <Nav.Link href="#pricing">Water borne heat</Nav.Link>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
              <Nav.Link href="#pricing">Water borne heat</Nav.Link>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
              <Nav.Link href="#pricing">Water borne heat</Nav.Link>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
              <Nav.Link href="#pricing">Water borne heat</Nav.Link>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
              <Nav.Link href="#pricing">Water borne heat</Nav.Link>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
              <Nav.Link href="#pricing">Water borne heat</Nav.Link>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
              <Nav.Link href="#pricing">Water borne heat</Nav.Link>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
            </div>
          </Col>

          <Col md={6}>
            <div className="col-md">
              <div className="d-flex">
                <MdOutlineDesignServices size={24} />
                <h4 className="heading">Build new</h4>
              </div>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
              <Nav.Link href="#pricing">Water borne heat</Nav.Link>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
              <Nav.Link href="#pricing">Water borne heat</Nav.Link>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
              <Nav.Link href="#pricing">Water borne heat</Nav.Link>
              <Nav.Link href="#pricing">Water borne heat</Nav.Link>
              <Nav.Link href="#features">Plumbing and cooling</Nav.Link>
              <Nav.Link href="#pricing">Water borne heat</Nav.Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MiddSection11;
