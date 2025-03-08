import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Landingpage.css";

export default function Landingpage() {
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
              <a href="/login">
                <Button size="lg" className="landing-btn ">
                  Login
                </Button>
              </a>
              <a href="/signup">
                <Button size="lg" variant="outline-primary" className="landing-btn">Signup</Button>
              </a>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}
