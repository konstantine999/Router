import React from "react";
import Input from "../input/Input";
import "./contact.css";
import Button from "../button/Button";

function Contact() {
  return (
    <>
      <div className="contact-wrapper">
        <h1>Contact</h1>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Message" />
        <div className="send-button-wrapper">
          <Button text="Send" margin="43px" />
        </div>
      </div>
    </>
  );
}

export default Contact;
