import React from "react";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import NavBar from "../Navbar/NavBar";
import { FaUserClock } from "react-icons/fa";
import "./PostJob.css";

const PostJob = () => {
  return (
    <>
    <NavBar />
    <div className="main-container-post-job">
      
      <div className="intext-postjob">
            <p>Select category to post your job <span>-completely free</span></p>
          </div>
          <div className="form-post">
          <Form inline>
              <FormControl
                type="text"
                placeholder="What do you need help with?"
                className="mr-sm-2 input1"
                style={{ border: 'none', boxShadow: 'none' }}
              />
              
            </Form>
          </div>
          </div>

      <div className="jobPostSection">
        <Container className="containerOfPostJob">
          <Row>
            <Col xs={12} md={3} className="col-back">
              {/* Content for the first column */}
              <div className="overlay"></div>
              <div className="icon">
              <FaUserClock size={54}/>
              </div>
              <div className="text">Text</div>
            </Col>
            <Col xs={12} md={3} className="col-back">
              {/* Content for the first column */}
              <div className="overlay"></div>
              <div className="icon">
              <FaUserClock size={54}/>
              </div>
              <div className="text">Text</div>
            </Col>
            <Col xs={12} md={3} className="col-back">
              {/* Content for the first column */}
              <div className="overlay"></div>
              <div className="icon">
              <FaUserClock size={54}/>
              </div>
              <div className="text">Text</div>
            </Col>
            <Col xs={12} md={3} className="col-back">
              {/* Content for the first column */}
              <div className="overlay"></div>
              <div className="icon">
              <FaUserClock size={54}/>
              </div>
              <div className="text">Text</div>
            </Col>
          </Row>
          <Row>
          <Col xs={12} md={3} className="col-back">
              {/* Content for the first column */}
              <div className="overlay"></div>
              <div className="icon">
              <FaUserClock size={54}/>
              </div>
              <div className="text">Text</div>
            </Col>
            <Col xs={12} md={3} className="col-back">
              {/* Content for the first column */}
              <div className="overlay"></div>
              <div className="icon">
              <FaUserClock size={54}/>
              </div>
              <div className="text">Text</div>
            </Col>
            <Col xs={12} md={3} className="col-back">
              {/* Content for the first column */}
              <div className="overlay"></div>
              <div className="icon">
              <FaUserClock size={54}/>
              </div>
              <div className="text">Text</div>
            </Col>
            <Col xs={12} md={3} className="col-back">
              {/* Content for the first column */}
              <div className="overlay"></div>
              <div className="icon">
              <FaUserClock size={54}/>
              </div>
              <div className="text">Text</div>
            </Col>
          </Row>
        </Container>
      </div>
    
    </>
  );
};

export default PostJob;
