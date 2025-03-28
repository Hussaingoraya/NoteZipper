import React from "react";
import MainScreen from "../MainScreen";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title : "",
      category:"",
      description:"",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/api/usernotes/postNotes",
          values
        );
        console.log("Notes Response", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <MainScreen title="Create a Note">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formtitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              placeholder="Enter title here"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formcategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              placeholder="Enter category here"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formdescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description here"
              as="textarea"
              rows={3}
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save Note
          </Button>
        </Form>
      </MainScreen>
    </>
  );
};

export default CreateNote;
