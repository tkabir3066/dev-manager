import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { FaEye, FaTrash } from "react-icons/fa";
function Contact({ contact, deleteContact }) {
  const {
    id,
    firstName,
    lastName,
    email,
    profession,
    gender,
    image,
    dateOfBirth,
    bio,
  } = contact;
  return (
    <>
      <Card className="mb-3">
        <div className="d-flex gap-4">
          <Card.Img variant="top" src={image} className="card-image" />
          <Card.Body>
            <Card.Title className="text-dark">
              {firstName} {lastName}
            </Card.Title>
            <Card.Subtitle className="text-muted">
              {" "}
              <strong>Profession:</strong> {profession}
            </Card.Subtitle>
            <Card.Text>Bio: {bio}</Card.Text>

            <ListGroup className="list-group-flush">
              <ListGroup.Item>Gender: {gender}</ListGroup.Item>
              <ListGroup.Item>Email: {email}</ListGroup.Item>
              <ListGroup.Item>Date of Birth: {dateOfBirth}</ListGroup.Item>
            </ListGroup>

            <div className="card-btn mt-3">
              <Card.Link>
                <Button variant="warning ms-3" size="md" type="view">
                  <FaEye />
                </Button>
              </Card.Link>
              <Card.Link>
                <Button
                  variant="danger ms-3"
                  size="md"
                  onClick={() => deleteContact(id)}
                >
                  <FaTrash />
                </Button>
              </Card.Link>
            </div>
          </Card.Body>
        </div>
      </Card>
    </>
  );
}

export default Contact;
