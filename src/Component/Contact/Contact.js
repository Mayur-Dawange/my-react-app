import React from "react";
import { Container } from "react-bootstrap";
import Faq from "../Faq/Faq";
import Hero from "../Hero/Hero";
import background from "../../assets/img/food2.jpg";
import ContactFrom from "../ContactForm/ContactFrom";

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
        <div className="contact_form col-lg-10 m-auto">
          <ContactFrom />
        </div>
      </Container>
      <Faq image="https://www.superoffice.com/globalassets/blog/2016/10/how-to-build-faq-section.jpg" />
    </address>
  );
};

export default Contact;
