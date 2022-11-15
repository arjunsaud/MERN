import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form,Button, Container } from "react-bootstrap";

const UserRegistrationForm = () => {
  return (
    <>
    <Container className="d-flex justify-content-center">
      <Form className="col-md-4 mx-auto">
      <h2 className="mb-4s">User Registration Form</h2>
      <Form.Group>
        <Form.Label className="mt-2">FullName</Form.Label>
        <Form.Control type="text" placeholder="Enter Full Name" required />
      </Form.Group>

      <Form.Group >
        <Form.Label className="mt-2">Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group >
        <Form.Label className="mt-2">Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" required />
      </Form.Group>

      <Form.Group >
        <Form.Label className="mt-2">Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group >
        <Form.Label className="mt-2">DOB</Form.Label>
        <Form.Control type="date" label="Male" />
      </Form.Group>

      <Form.Group >
        <Form.Label className="mt-2">Gender</Form.Label>
        <Form.Check className="mx-4" name="gender" id="male" type="radio" inline label="Male" />
        <Form.Check type="radio" name="gender" id="female" inline label="Female" />
        <Form.Check type="radio" inline name="gender" id="others" label="Others" />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label className="mt-2">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>

      <Button type="submit">
        Register
      </Button> &nbsp;
      <Button type="reset">
        Reset
      </Button>
    </Form>
      </Container>
    </>
  );
};

export default UserRegistrationForm;
