import React, {useEffect, useState} from "react";
import { Container, Image, Button } from "react-bootstrap";
import "./CSS/ledControl.css";

const Cam = () => {

  

  return (
    <Container>
      <div className="Wrapper">
        <h1 className="title" style={{ fontWeight: 800 }}>
          Press The Button to Change The Status
        </h1>
        <div className="menu">
          <Button value="1" className="btnn-v">
            ON
          </Button>
          <Button value="2" className="btnn-v">
            OFF
          </Button>
        </div>
      </div>
    </Container>
  );
};
export default Cam;
