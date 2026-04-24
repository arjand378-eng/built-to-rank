import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HashScroll from "./components/HashScroll";
import StatsBar from "./components/StatsBar";
import Statement from "./components/Statement";
import WhyHire from "./components/WhyHire";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HashScroll />
      <main id="main-content">
        <Hero />
        <StatsBar />
        <Statement />
        <WhyHire />
        <Services />
        <HowItWorks />
        <Portfolio />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
