import React, {useEffect, useState} from "react";
import { Container, Image, Button } from "react-bootstrap";
import "./CSS/ledControl.css";

const Cam = () => {

 

  const onChangeLedOff = () => {

    setSatusButton(<Button value="1" className="btnn-v" onClick={onChangeLedOn}>
    On
    </Button>)

    
  }

  const onChangeLedOn = () => {

    setSatusButton(<Button value="1" className="btnn-v" onClick={onChangeLedOff}>
    OFF
    </Button>)


  }


  const [ledStatus,setLedStatus] = useState("On")
  const [StatusButton,setSatusButton] = useState(<Button value="1" className="btnn-v" onClick={onChangeLedOn}>
  On
  </Button>)

  

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
