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
      <Faq image="https://www.superoffice.com/globalassets/blog/2016/10/how-to-build-faq-section.jpg" />
      <ContactFrom />
      <Container>
        You can find us here:
        <br />
        React Contact
        <br />
        5th & 6th Floor, Royal Kapsons, A- 118, <br />
        Sector- 136, Noida, Delhi (201305)
      </Container>
    </address>
  );
};

export default Contact;
