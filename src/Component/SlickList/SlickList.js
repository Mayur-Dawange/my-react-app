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
import pizza from "../../assets/img/pizza.jpg";

const SlickList = () => {
  const FoodItem = [
    {
      foodimg: pizza,
      foodname: "Pizaa",
      fooddesc:
        "lorme ipsum You can unslick at a given breakpoint now by adding",
      foodlink: "http://www.zomato.com/indore/pizza-time",
    },
    {
      foodimg: food2,
      foodname: "Onion Salad",
      fooddesc:
        "lorme2 ipsum You can unslick at a given breakpoint now by adding",
      foodlink: "http://www.zomato.com/indore/pizza-time",
    },
    {
      foodimg: food3,
      foodname: "Non-Veg",
      fooddesc:
        "lorme3 ipsum You can unslick at a given breakpoint now by adding",
      foodlink: "http://www.zomato.com/indore/pizza-time",
    },
    {
      foodimg: food1,
      foodname: "Grocery",
      fooddesc:
        "lorme4 ipsum You can unslick at a given breakpoint now by adding",
      foodlink: "http://www.zomato.com/indore/pizza-time",
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
              <div className="slick-height" key={index}>
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
        </Slider>
      </Container>
    </div>
  );
};
export default SlickList;
