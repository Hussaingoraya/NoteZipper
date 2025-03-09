import React from "react";
import MainScreen from "../MainScreen";
import { Accordion, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Notes from "../Data/Notes";
import "./MyNotes.css";
import { useAccordionButton } from "react-bootstrap";

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
  return (
    <>
      <MainScreen title="Welcome back Hussain">
        <Link to={"createnote"}>
          <Button size="lg" className="note-btn">
            Create a Note
          </Button>
        </Link>
        {Notes.map((note) => (
          <Accordion>
            <Card style={{ marginTop: 20 }} key={note.id}>
              <CustomToggle eventKey="0">
                <Card.Header className="card-header">
                  {note.title}
                  <div>
                    <Link className="edit">
                      <Button variant="success">Edit</Button>
                    </Link>
                    <Link>
                      <Button variant="danger">Delete</Button>
                    </Link>
                  </div>
                </Card.Header>
              </CustomToggle>

              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Badge className="badges" bg="success">
                    Category - {note.category}
                  </Badge>
                  <blockquote className="blockquote mb-0">
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
