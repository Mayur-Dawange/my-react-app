import React from "react";
import { Container } from "react-bootstrap";
import Faq from "../Faq/Faq";
import Hero from "../Hero/Hero";

const Contact = () => {
  return (
    <address>
      <Hero
        title="Contact us"
        subtitle="Get Us Touch Now"
        pageinfo="Contact Details"
      />
      <Faq image="https://www.superoffice.com/globalassets/blog/2016/10/how-to-build-faq-section.jpg" />
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
