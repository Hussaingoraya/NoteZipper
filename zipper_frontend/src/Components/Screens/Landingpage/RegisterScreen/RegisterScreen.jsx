import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MainScreen from "../../../MainScreen";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const RegisterScreen = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setError("");
      setSuccess("");
      setLoading(true);
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/api/user/register",
          values
        );
        setSuccess("Registration successful! Redirecting to login...");

        setTimeout(() => {
          setLoading(false);
          navigate("/login");
        }, 2000);
      } catch (err) {
        console.error(err.response?.data?.message || "Something went wrong");
        setError(err.response?.data?.message || "Registration failed!"); //
        setLoading(false);
      }
    },
  });
  return (
    <>
      <MainScreen title="Register">
        <div className="container">
          {loading ? <Spinner animation="border" size="sm" /> : ""}

          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
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
