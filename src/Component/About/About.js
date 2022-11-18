import React from "react";
import Faq from "../Faq/Faq";
import Hero from "../Hero/Hero";
import Intro from "../Intro/Intro";
import Slicklist from "../Slicklist/Slicklist";
import background from "../../assets/img/anh-nguyen-kcA-c3f_3FE-unsplash.jpg";

const About = () => {
  return (
    <div>
      <Hero
        title="About Us"
        subtitle="Get Know More About Us"
        pageinfo="About Us"
        background={background}
      />
      <Intro />
      <Slicklist />
      <Faq />
    </div>
  );
};

export default About;
