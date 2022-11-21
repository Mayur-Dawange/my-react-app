import React from "react";
import "./SlickList.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/Container";
// import Pagination from "react-bootstrap/Pagination";
import food1 from "../../assets/img/food1.jpg";
import food2 from "../../assets/img/food2.jpg";
import food3 from "../../assets/img/food3.jpg";

const SlickList = () => {
  const FoodItem = [
    {
      foodimg: food1,
      foodname: "Pizaa",
      fooddesc:
        "lorme ipsum You can unslick at a given breakpoint now by adding",
      foodlink: "http://www.zomato.com/pizza",
    },
    {
      foodimg: food2,
      foodname: "NonVeg",
      fooddesc:
        "lorme2 ipsum You can unslick at a given breakpoint now by adding",
      foodlink: "http://www.zomato.com/pizza",
    },
    {
      foodimg: food3,
      foodname: "Pizaa",
      fooddesc:
        "lorme3 ipsum You can unslick at a given breakpoint now by adding",
      foodlink: "http://www.zomato.com/pizza",
    },
    {
      foodimg: food1,
      foodname: "Pizaa",
      fooddesc:
        "lorme4 ipsum You can unslick at a given breakpoint now by adding",
      foodlink: "http://www.zomato.com/pizza",
    },
  ];

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
          {FoodItem.map((foodata, index) => {
            return (
              <div className="slick-height">
                <div id="card-1" className="card-flex-item">
                  <div data-reactroot="" className="card-flex-wrapper">
                    <div className="card-flex-image">
                      <img
                        src={foodata.foodimg}
                        className="w-100 food_img"
                        alt="slider1"
                      />
                    </div>
                    <div className="card-flex-content">
                      <h3>{foodata.foodname}</h3>
                      <p>{foodata.fooddesc}</p>
                      <a href={foodata.foodlink} className="btn btn-primary">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div className="slick-height">
            <div id="card-2" className="card-flex-item">
              <div data-reactroot="" className="card-flex-wrapper">
                <div className="card-flex-image">
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
          </div> */}
        </Slider>
        {/* <div>
            <Pagination>{items}</Pagination>
          </div> */}
      </Container>
    </div>
  );
};
export default SlickList;
