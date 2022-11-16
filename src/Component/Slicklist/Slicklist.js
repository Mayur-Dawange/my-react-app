import React, { Component } from "react";
import "./slicklist.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";

let active = 2;
let items = [Slider];
for (let number = 1; number <= 3; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

export default class Slicklist extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      autoplay: false,
      centerPadding: "60px",
      speed: 500,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    };

    return (
      <div className="slick-slide-container">
        <Container>
          <Slider {...settings} className="slick-list-card">
            <div className="slick-height">
              <div id="card-1" class="card-flex-item">
                <div data-reactroot="" class="card-flex-wrapper">
                  <div class="card-flex-image">
                    <img
                      src="https://cdn.pixabay.com/photo/2016/11/11/07/51/moon-1815984__340.jpg"
                      className="w-100"
                      alt="slider1"
                    />
                  </div>
                  <div class="card-flex-content">
                    <h3>One</h3>
                    <p>I'm a card and I'm first</p>
                    <a href="https:" className="btn btn-primary">
                      {" "}
                      Order Now{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slick-height">
              <div id="card-2" class="card-flex-item">
                <div data-reactroot="" class="card-flex-wrapper">
                  <div class="card-flex-image">
                    <img
                      src="https://cdn.pixabay.com/photo/2017/02/05/19/23/eye-2040986_960_720.jpg"
                      className="w-100"
                      alt="slider2"
                    />
                  </div>
                  <div className="card-flex-content">
                    <h3>Two</h3>
                    <p>I'm a card and I'm Second</p>
                    <a href="https:" className="btn btn-primary">
                      {" "}
                      Order Now{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slick-height">
              <div id="card-3" className="card-flex-item">
                <div data-reactroot="" className="card-flex-wrapper">
                  <div className="card-flex-image">
                    <img
                      src="https://cdn.pixabay.com/photo/2017/02/10/18/47/love-2055960__340.jpg"
                      className="w-100"
                      alt="slider3"
                    />
                  </div>
                  <div className="card-flex-content">
                    <h3>Two</h3>
                    <p>I'm a card and I'm Second</p>
                    <a href="https:" className="btn btn-primary">
                      {" "}
                      Order Now{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slick-height">
              <div id="card-4" className="card-flex-item">
                <div data-reactroot="" className="card-flex-wrapper">
                  <div className="card-flex-image">
                    <img
                      src="https://cdn.pixabay.com/photo/2016/11/11/07/51/moon-1815984__340.jpg"
                      className="w-100"
                      alt="slider1"
                    />
                  </div>
                  <div className="card-flex-content">
                    <h3>Four</h3>
                    <p>I'm a card and I'm Four</p>
                    <a href="https:" className="btn btn-primary">
                      {" "}
                      Order Now{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slick-height">
              <div id="card-5" class="card-flex-item">
                <div data-reactroot="" className="card-flex-wrapper">
                  <div className="card-flex-image">
                    <img
                      src="https://cdn.pixabay.com/photo/2017/02/10/18/47/love-2055960__340.jpg"
                      className="w-100"
                      alt="slider3"
                    />
                  </div>
                  <div className="card-flex-content">
                    <h3>Five</h3>
                    <p>I'm a card and I'm Five</p>
                    <a href="https:" className="btn btn-primary">
                      {" "}
                      Order Now{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slick-height">
              <div id="card-5" className="card-flex-item">
                <div data-reactroot="" className="card-flex-wrapper">
                  <div className="card-flex-image">
                    <img
                      src="https://cdn.pixabay.com/photo/2017/02/10/18/47/love-2055960__340.jpg"
                      className="w-100"
                      alt="slider3"
                    />
                  </div>
                  <div className="card-flex-content">
                    <h3>Five</h3>
                    <p>I'm a card and I'm Five</p>
                    <a href="https:" className="btn btn-primary">
                      {" "}
                      Order Now{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          <div>
            <Pagination>{items}</Pagination>
          </div>
        </Container>
      </div>
    );
  }
}
