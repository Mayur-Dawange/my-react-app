import React from "react";
import "./Hero.scss";
import { Button, Card, Container } from "react-bootstrap";
import Font from "react-font";

const Hero = (props) => {
  return (
    <div className="banner-section">
      <div style={{ paddingLeft: 0 }}>
        <div
          className="text-center bg-image"
          style={{ height: 400, backgroundImage: `url(${props.background})` }}
        >
          <div className="mask h-100 overlay">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <Font family="Roboto">
                  <h1 className="mb-3">{props.title}</h1>
                </Font>
                <h4 className="mb-3">{props.subtitle}</h4>
                <a
                  className="btn btn-outline-light btn-lg"
                  href="#!"
                  role="button"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* simple About section used here */}
      <div className="about-section">
        <Container>
          <Card className="border-0 py-3">
            {/* <Card.Header>Featured</Card.Header> */}

            <Card.Body className="py-5">
              <h2>{props.pageinfo}</h2>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text className="text-cards">
                With supporting text below as a natural lead-in to additional
                content. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Error dolorum consequatur optio amet illum. Doloremque
                voluptas soluta tempore natus iure!
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
