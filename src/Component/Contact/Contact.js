import React from "react";
import { Container } from "react-bootstrap";
import Faq from "../Faq/Faq";
import Hero from "../Hero/Hero";
import background from "../../assets/img/food2.jpg";
import ContactFrom from "../ContactForm/ContactFrom";

const Contact = () => {
  return (
    <>
      <Hero
        title="Contact us"
        subtitle="Get Us Touch Now"
        pageinfo="Contact Details"
        background={background}
        link="http://www.zomato.com"
      />
      <Container>
        <div className="contact_form col-lg-10 m-auto">
          <ContactFrom />
        </div>
      </Container>
      <Faq image="https://www.superoffice.com/globalassets/blog/2016/10/how-to-build-faq-section.jpg" />
    </>
  );
};

export default Contact;
