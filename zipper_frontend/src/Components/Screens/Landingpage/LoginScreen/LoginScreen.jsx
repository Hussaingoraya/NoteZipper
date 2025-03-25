import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MainScreen from "../../../MainScreen";
import {Link} from "react-router-dom";
import axios from 'axios';

const LoginScreen = () => {

   
  return (
    <>
      <MainScreen title="Login">
        <div className="container">
          <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"  placeholder="Enter email" />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <div style={{fontSize:"20px"}}> 
        Don't have a account? <Link style={{color:"blue"}} to = "/register">Signup</Link> now
      </div>
        </div>
        
      </MainScreen>
     
    </>
  );
};

export default LoginScreen;
