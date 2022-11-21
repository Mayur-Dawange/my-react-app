import React from "react";
import Faq from "../Faq/Faq";
import Hero from "../Hero/Hero";
import Intro from "../Intro/Intro";
import SlickList from "../SlickList/SlickList";
import background from "../../assets/img/food1.jpg";
import SlickItem from "../SlickItem/SlickItem";

const Home = () => {
  return (
    <>
      <Hero
        title="Restaurant"
        subtitle="Get The Best Food"
        pageinfo="About Us"
        background={background}
      />
      <SlickList />
      <Intro />
      <Faq image="https://cdn.searchenginejournal.com/wp-content/uploads/2022/07/faq-632c0874710c1-sej-760x400.png" />
      <SlickItem />
    </>
  );
};

export default Home;
