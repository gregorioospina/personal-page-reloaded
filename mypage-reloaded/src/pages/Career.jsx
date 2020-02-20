import React, { useState, useEffect } from "react";
import { Jumbotron, Container } from "reactstrap";
import "../css/Career.css";
import data from "../career_data.json";

const Career = () => {
  let neoPressed = () => {
    return "neo-pressed";
  };
  let pressed = () => {
    return "pressed";
  };

  let renderExperience = name => {
    let first = true;
    return data.experience.map(item => {
      return (
        <Jumbotron fluid className={neoPressed()} key={item[0].title}>
          <Container fluid>
            <h2 className={pressed()}>Fluid jumbotron</h2>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>
      );
    });
  };

  return (
    <div className="">
      <Jumbotron fluid className={neoPressed()}>
        <Container fluid>
          <h2 className={pressed()}>Fluid jumbotron</h2>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Career;
