import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./contact.scss";

const ContactFrom = () => {
  return (
    <div className="col-lg-6 m-auto py-5 Contact-section">
      <h1 className="text-center py-2">Contact Us</h1>
      <Form className="border c_form">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicContact">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Contact Number"
            required
          />
        </Form.Group>
        {["radio"].map((radio) => (
          <div
            key={`default-${radio}`}
            className="mb-3 d-flex gap-2 radio_btns"
          >
            <Form.Check
              name="gender"
              type={radio}
              //   id={`default-${type}`}
              label={`Male`}
            />
            <Form.Check
              type={radio}
              name="gender"
              //   id={`default-${type}`}
              label={`Female`}
            />
            <Form.Check
              type={radio}
              name="gender"
              //   id={`default-${type}`}
              label={`Other`}
            />
          </div>
        ))}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactFrom;
