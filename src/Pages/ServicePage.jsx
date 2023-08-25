import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceHero from "../components/ServiceHero";
import ServiceMain from "../components/ServiceMain";

export default function ServicePage() {
  return (
    <>
      <Header activeNav={2} />
      <ServiceHero />
      <ServiceMain />
      <Footer />
    </>
  );
}
