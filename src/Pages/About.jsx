import AboutHero from "../components/AboutHero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SBanking from "../components/SBanking";
import Service from "../components/Service";
import Shopping from "../components/Shopping";
import { useState, useEffect } from "react";
export default function About() {
  const [contentLoaded, setContentLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 300);
  });
  return (
    <div className={`${contentLoaded ? "translate" : "not-translate"}`}>
      <Header activeNav={1} />
      <AboutHero />
      <SBanking />
      <Service />
      <Shopping />
      <Footer />
    </div>
  );
}
