import React from "react";
import Container from "react-bootstrap/Container";
import "./intro.scss";
const Intro = () => {
  return (
    <>
      <div className="intro">
        <Container>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-4 cardos">
                <div className="p-info">
                  <h2>Im Mark</h2>
                  <h3>Designer & </h3>
                  <h3>Developer</h3>
                </div>
              </div>
              <div className="col-lg-4 cardos">
                <div className="p-pic">
                  <img
                    width="100%"
                    src="https://media.gettyimages.com/photos/happy-redhead-female-programmer-coding-a-computer-language-on-desktop-picture-id1210773518?s=612x612"
                    alt="pic-developer"
                  />
                </div>
              </div>
              <div className="col-lg-4 cardos">
                <div className="p-success">
                  <h4>Start My Success</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Odio eius sed repellat quo, adipisci laborum consequatur ut
                    quibusdam animi fuga!
                  </p>
                  <button className="learn-more-btn">Learn More</button>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum aspernatur doloremque molestias, error accusamus
                    aperiam delectus vel nihil suscipit quae, adipisci ullam cum
                    officia assumenda quaerat, tempore alias debitis ut?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Intro;
