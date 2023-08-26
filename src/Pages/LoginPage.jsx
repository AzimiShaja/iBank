import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import LoginHero from "../components/LoginHero";
import { useState, useEffect } from "react";
export default function LoginPage() {
  const [contentLoaded, setContentLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 300);
  });
  return (
    <div className={`${contentLoaded ? "translate" : "not-translate"}`}>
      <Header activeNav={4} />
      <LoginHero />
      <LoginForm />
      <Footer />
    </div>
  );
}
