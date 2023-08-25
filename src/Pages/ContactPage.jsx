import ContactHero from "../components/ContactHero";
import ContactMain from "../components/ContactMain";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ContactPage() {
  return (
    <>
      <Header activeNav={3} />
      <ContactHero />
      <ContactMain />
      <Footer />
    </>
  );
}
