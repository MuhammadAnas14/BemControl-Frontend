import React, { useEffect, useState } from "react";
import { Container, Image, Button } from "react-bootstrap";
import "./CSS/ledControl.css";
import axios from "axios";

const Cam = () => {
  const onChangeLedOff = () => {
    setSatusButton(
      <Button value="1" className="btnn-v" onClick={onChangeLedOn}>
        On
      </Button>
    );

    let data = {
      payload:0
    }

    axios.post("http://localhost:5000/payload", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  };

  const onChangeLedOn = () => {
    setSatusButton(
      <Button value="1" className="btnn-v" onClick={onChangeLedOff}>
        OFF
      </Button>
    );

    let data = {
      payload:1
    } 

    axios.post("http://localhost:5000/payload", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  };

  const [ledStatus, setLedStatus] = useState("On");
  const [StatusButton, setSatusButton] = useState(
    <Button value="1" className="btnn-v" onClick={onChangeLedOn}>
      On
    </Button>
  );

  return (
    <Container>
      <div className="Wrapper">
        <h1 className="title" style={{ fontWeight: 800 }}>
          Press The Button to Change The Status
        </h1>
        <div className="menu">
          <h3>LED</h3>
          {StatusButton}
        </div>
      </div>
    </Container>
  );
};
export default Cam;
