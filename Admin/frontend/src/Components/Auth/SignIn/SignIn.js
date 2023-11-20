import React from "react";
import NavBar from "../../Navbar/NavBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import './Signin.css'
import { Nav } from "react-bootstrap";

const SignIn = () => {
  return (
    <>
      <NavBar />

      <div className="form">
      <Card style={{ width: "32rem" }} className="forminner">
        <div className="inner">
            Sign In
        </div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control required className="inputs" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control required className="inputs" type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="dark" type="submit" className="button">
        Submit
      </Button>
      <hr></hr>
    </Form>
    <div>
    <Nav.Link href="#features">Forgot Email</Nav.Link>
    <Nav.Link href="#features">Register A New Business</Nav.Link>
    <Nav.Link href="#features">Post A Job</Nav.Link>
    </div>
      </Card> 
      </div>
    </>
  );
};

export default SignIn;
