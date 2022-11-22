import React from "react";
import { Container } from "react-bootstrap";
import Faq from "../Faq/Faq";
import Hero from "../Hero/Hero";
import background from "../../assets/img/food2.jpg";
import ContactFrom from "../ContactForm/ContactFrom";
import SlickItem from "../SlickItem/SlickItem";

const Contact = () => {
  return (
    <address>
      <Hero
        title="Contact us"
        subtitle="Get Us Touch Now"
        pageinfo="Contact Details"
        background={background}
      />

      <Container>
        <ContactFrom />
      </Container>
      <Faq image="https://www.superoffice.com/globalassets/blog/2016/10/how-to-build-faq-section.jpg" />
      <Container>
        <div className="col-lg-12">
          <SlickItem />
        </div>
      </Container>
    </address>
  );
};

export default Contact;
