import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "./Slickitem.scss";

const SlickItem = () => {
  const testimonial = [
    {
      name: "Anna Deynah",
      role: "UX Designer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
    },
    {
      name: "Maria Kate",
      role: "UI Developer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
    },
    {
      name: "John Doe",
      role: "Content Writer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
    },
    {
      name: "Maria Kate",
      role: "UI Designer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
      description:
        "adipisicing elit Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
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
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <i fas icon="star" size="sm" />
                    </li>
                    <li>
                      <i fas icon="star" size="sm" />
                    </li>
                    <li>
                      <i fas icon="star" size="sm" />
                    </li>
                    <li>
                      <i fas icon="star" size="sm" />
                    </li>
                    <li>
                      <i far icon="star" size="sm" />
                    </li>
                  </ul>
                </div>
              );
            })}
          </Slider>

          {/* testimonial cardslider 2 */}
          {/* <div className="text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                  alt="avatar"
                  className="rounded-circle shadow-1-strong mb-4 mx-auto"
                  style={{ width: "150px" }}
                />
                <div className="d-flex justify-content-center">
                  <div lg="8">
                    <h5 className="mb-3">John Doe</h5>
                    <p>Web Developer</p>
                    <p className="text-muted">
                      <i fas icon="quote-left" className="pe-2" />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minus et deleniti nesciunt sint eligendi reprehenderit
                      reiciendis.
                    </p>
                  </div>
                </div>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li>
                    <i fas icon="star" size="sm" />
                  </li>
                  <li>
                    <i fas icon="star" size="sm" />
                  </li>
                  <li>
                    <i fas icon="star" size="sm" />
                  </li>
                  <li>
                    <i fas icon="star" size="sm" />
                  </li>
                  <li>
                    <i far icon="star" size="sm" />
                  </li>
                </ul>
              </div> */}
          {/* testimonial cardslider 3 */}
          {/* <div className="text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                  alt="avatar"
                  className="rounded-circle shadow-1-strong mb-4 mx-auto"
                  style={{ width: "150px" }}
                />
                <div className="d-flex justify-content-center">
                  <div lg="8">
                    <h5 className="mb-3">John Doe</h5>
                    <p>Web Developer</p>
                    <p className="text-muted">
                      <i fas icon="quote-left" className="pe-2" />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minus et deleniti nesciunt sint eligendi reprehenderit
                      reiciendis.
                    </p>
                  </div>
                </div>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li>
                    <i fas icon="star" size="sm" />
                  </li>
                  <li>
                    <i fas icon="star" size="sm" />
                  </li>
                  <li>
                    <i fas icon="star" size="sm" />
                  </li>
                  <li>
                    <i fas icon="star" size="sm" />
                  </li>
                  <li>
                    <i far icon="star" size="sm" />
                  </li>
                </ul>
              </div> */}
          {/* testimonial cardslider 4 */}
          {/* <div className="text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  alt="avatar"
                  className="rounded-circle shadow-1-strong mb-4 mx-auto"
                  style={{ width: "150px" }}
                />
                <div className="d-flex justify-content-center">
                  <div lg="8">
                    <h5 className="mb-3">Anna Deynah</h5>
                    <p>Web Developer</p>
                    <p className="text-muted">
                      <i fas icon="quote-left" className="pe-2" />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minus et deleniti nesciunt sint eligendi reprehenderit
                      reiciendis, quibusdam illo, beatae quia fugit consequatur
                      laudantium velit magnam error. Consectetur distinctio
                      fugit doloremque.
                    </p>
                  </div>
                </div>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li>
                    <i fas icon="star" size="sm" />
                  </li>
                  <li>
                    <i fas icon="star" size="sm" />
                  </li>
                  <li>
                    <i fas icon="star" size="sm" />
                  </li>
                  <li>
                    <i fas icon="star" size="sm" />
                  </li>
                  <li>
                    <i far icon="star" size="sm" />
                  </li>
                </ul>
              </div> */}
        </div>
      </Container>
    </div>
  );
};

export default SlickItem;
