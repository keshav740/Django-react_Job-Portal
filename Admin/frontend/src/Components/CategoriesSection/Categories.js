import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="main-container">
      <Container>
        <Row>
          <div className="CateContainer">
            <h1 className="heading">All categories</h1>
            <Col>
              <div className="text">
                <p>
                  Below you will find an overview of everything Mittanbud can
                  help you with. On these links you will find more information
                  about the various services.
                </p>
              </div>
            </Col>
          </div>
          <div className="intext">
            <p>Can't find what you're looking for?</p>
          </div>
          <div className="form">
          <Form inline>
              <FormControl
                type="text"
                placeholder="What do you need help with?"
                className="mr-sm-2"
                style={{ border: 'none', boxShadow: 'none' }}
              />
              
            </Form>
          </div>
          {/* <IoArrowForwardCircleSharp /> */}
        </Row>
      </Container>
    </div>
  );
};

export default Categories;
