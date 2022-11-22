import React from "react";

import Hero from "../Hero/Hero";
import Intro from "../Intro/Intro";
import SlickList from "../SlickList/SlickList";
import background from "../../assets/img/food2.jpg";
import Servicecard from "../Servicecards/Servicecard";
import { Container } from "react-bootstrap";
import servicecardimg from "../../assets/img/project-3.jpg";
import servicecardimg2 from "../../assets/img/project-4.jpg";
import servicecardimg3 from "../../assets/img/project-5.jpg";

const Service = () => {
  return (
    <div>
      <Hero
        title="Services"
        subtitle="Best Food Services"
        pageinfo="Our Services"
        background={background}
        link="http://www.zomato.com"
      />
      <section className="project-case-area py-5">
        <Container>
          <div className="row justify-content-center py-5">
            <Servicecard
              cardtitle="Events IT Solutions"
              cardsubtitle="Important Of IT Services In Business"
              cardsrtdesc="Avoids pleasure itself, because it is pleasure, but because
                    those who do not know how"
              cardimg={servicecardimg}
            />

            <Servicecard
              cardimg={servicecardimg2}
              cardtitle="Cyber Security"
              cardsubtitle="Important Of IT Services In Business"
              cardsrtdesc="Avoids pleasure itself, because it is pleasure, but because those who do not know how"
            />
            <Servicecard
              cardimg={servicecardimg3}
              cardtitle="Product Design"
              cardsubtitle="Important Of IT Services In Business"
              cardsrtdesc="Avoids pleasure itself, because it is pleasure, but because those who do not know how"
            />
          </div>
        </Container>
      </section>
      <Intro />
      <SlickList />
    </div>
  );
};

export default Service;
