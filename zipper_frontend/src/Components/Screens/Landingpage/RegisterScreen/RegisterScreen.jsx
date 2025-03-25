import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MainScreen from "../../../MainScreen";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

const RegisterScreen = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
        console.log("Form Data:", values);
      },
  });
  return (
    <>
      <MainScreen title="Register">
        <div className="container">
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formUserName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                placeholder="User Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
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
              SignUp
            </Button>
          </Form>
          <div style={{ fontSize: "20px" }}>
            Already have a account?{" "}
            <Link style={{ color: "blue" }} to="/login">
              Login
            </Link>{" "}
            now
          </div>
        </div>
      </MainScreen>
    </>
  );
};

export default RegisterScreen;
