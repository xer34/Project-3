import React from "react";
import Nav from "../Navbar";

import styled from "styled-components";
import ReactContactForm from "react-mail-form";

const Form = styled(ReactContactForm)`
  margin: auto;
  max-width: 720px;
  min-height: 100vh;
  font-size: 14px;
  text-align: center;
  input,
  textarea {
    display: block;
    margin: 12px auto;
    width: 100%;
    max-width: 480px;
    border: 1px solid #555;
    outline: 0;
    font-size: 16px;
  }
  input {
    padding: 12px 6px;
  }
  textarea {
    padding: 6px;
  }
  a {
    display: block;
    margin: auto;
    width: 120px;
    height: 3em;
    line-height: 3em;
    color: #fff;
    background-color: #3b9cff;
    font-size: 16px;
    font-weight: 900;
    text-decoration: blink;
    &:visited,
    &:hover,
    &:focus,
    &:active {
      color: #fff;
    }
    &:hover {
      opacity: 0.7;
    }
  }
`;

function Contact() {
  return (
    <div>
      <Nav />
      <Form to="experimental@gmail.com" />
    </div>
  );
}

export default Contact;
