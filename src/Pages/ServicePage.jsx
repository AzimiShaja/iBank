import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceHero from "../components/ServiceHero";
import ServiceMain from "../components/ServiceMain";
import { useState, useEffect } from "react";

export default function ServicePage() {
  const [contentLoaded, setContentLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 300);
  });
  return (
    <div className={`${contentLoaded ? "translate" : "not-translate"}`}>
      <Header activeNav={2} />
      <ServiceHero />
      <ServiceMain />
      <Footer />
    </div>
  );
}
