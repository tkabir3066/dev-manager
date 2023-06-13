import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";

function AddContact({ addContact }) {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    bio: "",
    image: "",
    gender: "",
    dateOfBirth: "",
  });

  const { firstName, lastName, email, profession, bio, image } = contact;

  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    //preventing browser default
    e.preventDefault();

    //checking validation

    // Form submission
    addContact(contact);
  };
  return (
    <>
      <h2 className="text-center">Add Contact</h2>

      <Form onSubmit={handleSubmit}>
        {/* === firstName=== */}
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="firstName" column>
              First Name:{" "}
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="firstName"
              id="firstName"
              onChange={handleChange}
              value={firstName}
              placeholder="Enter Your First Name"
            />
          </Col>
        </Form.Group>

        {/* === lastName=== */}
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="lastName" column>
              Last Name:{" "}
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="lastName"
              id="lastName"
              onChange={handleChange}
              value={lastName}
              placeholder="Enter Your Last Name"
            />
          </Col>
        </Form.Group>

        {/* === Email === */}
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="email" column>
              Email:{" "}
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={email}
              placeholder="Enter Your email Id"
            />
          </Col>
        </Form.Group>

        {/* === Profession === */}
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="profession" column>
              Profession:{" "}
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="profession"
              id="profession"
              onChange={handleChange}
              value={profession}
              placeholder="Enter Your Profession"
            />
          </Col>
        </Form.Group>
        {/* === Image === */}
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="image" column>
              Profession:{" "}
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="image"
              id="image"
              onChange={handleChange}
              value={image}
              placeholder="Enter Your Profile picture url"
            />
          </Col>
        </Form.Group>

        {/* === Date of Birth === */}
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="dateOfBirth" column>
              Date Of Birth:{" "}
            </Form.Label>
          </Col>
          <Col sm={9}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              maxDate={new Date()}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </Col>
        </Form.Group>

        {/* === Gender === */}
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="gender" column>
              Gender:{" "}
            </Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Check
              type="radio"
              label="Male"
              name="gender"
              id="gender"
              value="male"
              defaultChecked={true}
              onChange={handleChange}
            />
          </Col>
          <Col xs="auto">
            <Form.Check
              type="radio"
              label="Female"
              name="gender"
              id="gender"
              value="female"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        {/* === Bio === */}
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="bio" column>
              Bio:{" "}
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              as="textarea"
              type="text"
              name="bio"
              id="bio"
              onChange={handleChange}
              value={bio}
              placeholder="Enter Your Bio"
            />
          </Col>
        </Form.Group>

        {/* button */}
        <Button variant="primary" size="md" type="md">
          Add Contact
        </Button>
      </Form>
    </>
  );
}

export default AddContact;
