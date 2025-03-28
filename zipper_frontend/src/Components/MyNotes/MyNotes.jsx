import React from "react";
import MainScreen from "../MainScreen";
import { Accordion, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Notes from "../Data/Notes";
import "./MyNotes.css";
import { useAccordionButton } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <button
      type="button"
      className="toggle-btn"
      style={{
        background: "none",
        border: "none",
        fontSize: "1.2rem",
        fontWeight: "bold",
        cursor: "pointer",
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default function MyNotes() {
  const [notes, setNotes] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://127.0.0.1:5000/api/usernotes/getnotes");
      setNotes(data);
      console.log("Response Data:", data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MainScreen title="Welcome back Hussain">
        <Link to={"/createnotes"}>
          <Button size="lg" className="note-btn">
            Create a Note
          </Button>
        </Link>
        {notes.map((note) => (
          <Accordion>
            <Card style={{ marginTop: 20 }} key={note.id}>
              <Card.Header className="card-header">
                <CustomToggle eventKey="0">
                  <span>{note.title}</span>{" "}
                </CustomToggle>

                <div>
                  <Link className="edit">
                    <Button variant="success">Edit</Button>
                  </Link>
                  <Link>
                    <Button variant="danger">Delete</Button>
                  </Link>
                </div>
              </Card.Header>

              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Badge className="badges" bg="success">
                    Category - {note.category}
                  </Badge>
                  <blockquote className="blockquote mb-0 mt-2">
                    <p>{note.description}</p>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
      </MainScreen>
    </>
  );
}
