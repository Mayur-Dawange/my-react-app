import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "./Slickitem.scss";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const SlickItem = () => {
  const [value, setValue] = React.useState(2);
  const testimonial = [
    {
      name: "Anna Deynah",
      role: "UX Designer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
      rating: 3,
    },
    {
      name: "Maria Kate",
      role: "UI Developer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
      rating: 2,
    },
    {
      name: "John Doe",
      role: "Content Writer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
      rating: 4.5,
    },
    {
      name: "Maria Kate",
      role: "UI Designer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
      description:
        "adipisicing elit Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="testimonial pb-5">
      <h2 className="text-center py-5"> Testimonial</h2>
      <Container id="slick-item">
        <div className="col-lg-8 m-auto">
          {/* testimonial cardslider 1 */}
          <Slider {...settings} className="slick-item">
            {testimonial.map((data, index) => {
              return (
                <div key={index} className="text-center">
                  <img
                    src={data.image}
                    alt="avatar"
                    className="rounded-circle shadow-1-strong mb-4 mx-auto"
                    style={{ width: "150px" }}
                  />
                  <div className="d-flex justify-content-center">
                    <div lg="8">
                      <h5 className="mb-3"> {data.name} </h5>
                      <p> {data.role} </p>
                      <p className="text-muted">
                        <i fas icon="quote-left" className="pe-2" />
                        {data.description}
                      </p>
                    </div>
                  </div>
                  <Box
                    sx={{
                      "& > legend": { mt: 3 },
                    }}
                  >
                    <Typography component="legend">Review</Typography>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                    {/* <Typography component="legend">Read only</Typography> */}
                    {/* <Rating name="read-only" value={value} readOnly /> */}
                  </Box>
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default SlickItem;
