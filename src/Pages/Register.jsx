import Footer from "../components/Footer";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";
import RegisterHero from "../components/RegisterHero";
import { useState, useEffect } from "react";
export default function Register() {
  const [contentLoaded, setContentLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 300);
  });
  return (
    <div className={`${contentLoaded ? "translate" : "not-translate"}`}>
      <Header />
      <RegisterHero />
      <RegisterForm />
      <Footer />
    </div>
  );
}
