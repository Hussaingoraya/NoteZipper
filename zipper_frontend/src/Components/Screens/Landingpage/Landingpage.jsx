import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Landingpage.css";
import {Link} from 'react-router-dom'

 const Landingpage=()=> {
  return (
    <>
      <div className="main">
        <Container>
          <Row>
            <div className="intro-text">
              <div>
                <h1 className="heading-txt">Welcome to NoteZipper </h1>
                <p className="subheading">One safe place for all your notes.</p>
              </div>
            </div>

            <div className="buttoncontainer">
              <Link to = '/login'>
                <Button size="lg" className="landing-btn ">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline-primary" className="landing-btn">Signup</Button>
              </Link>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Landingpage
