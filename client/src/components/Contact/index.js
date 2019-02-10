import React from "react";
import Nav from "../Navbar";
import style from "./index.css";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Form className={style.Form}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="Email"
                  placeholder="Email"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="Name">Name</Label>
                <Input
                  type="Name"
                  name="Name"
                  id="Name"
                  placeholder="Name"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            {" "}
            <Col md={12}>
              {" "}
              <FormGroup>
                <Label for="exampleText">Message</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
              <Button>Contact Me</Button>
            </Col>{" "}
          </Row>
        </Form>
      </div>
    );
  }
}
