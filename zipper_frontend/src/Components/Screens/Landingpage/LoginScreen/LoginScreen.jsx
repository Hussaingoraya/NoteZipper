import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MainScreen from "../../../MainScreen";
import { Link } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/api/user/login",
          values,
          
        );
        console.log("response", response.data);
        navigate("/mynotes");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <MainScreen title="Login">
        <div className="container">
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <div style={{ fontSize: "20px" }}>
            Don't have a account?{" "}
            <Link style={{ color: "blue" }} to="/register">
              Signup
            </Link>{" "}
            now
          </div>
        </div>
      </MainScreen>
    </>
  );
};

export default LoginScreen;
