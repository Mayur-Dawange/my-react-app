import React from "react";
import Faq from "../Faq/Faq";
import Hero from "../Hero/Hero";
import Intro from "../Intro/Intro";
import SlickList from "../SlickList/SlickList";
import background from "../../assets/img/food3.jpg";
import faqimg from "../../assets/img/faq2.jpg";

const About = () => {
  return (
    <div>
      <Hero
        title="About Us"
        subtitle="Get Know More About Us"
        pageinfo="About Us"
        background={background}
      />

      <SlickList />
      <Intro />
      <Faq image={faqimg} />
    </div>
  );
};

export default About;
