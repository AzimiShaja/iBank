import Header from "../components/Header";
import Hero from "../components/Hero";
import SBanking from "../components/SBanking";
import Security from "../components/Security";
import Feature from "../components/Feature";
import Service from "../components/Service";
import Mobile from "../components/Mobile";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
export default function IndexPage() {
  const [contentLoaded, setContentLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 300);
  });

  return (
    <div className={`${contentLoaded ? "translate" : "not-translate"}`}>
      <Header activeNav={0} />
      <Hero />
      <SBanking />
      <Feature />
      <Security />
      <Service />
      <Mobile />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
