import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import LoginHero from "../components/LoginHero";

export default function LoginPage() {
  return (
    <>
      <Header activeNav={4} />
      <LoginHero />
      <LoginForm />
      <Footer />
    </>
  );
}
