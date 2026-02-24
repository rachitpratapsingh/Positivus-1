import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoBar from "./components/LogoBar";
import Services from "./components/Services";
import CTABanner from "./components/CTABanner";
import CaseStudies from "./components/CaseStudies";
import WorkingProcess from "./components/WorkingProcess";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-[#191919] min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Services />
        <CTABanner />
        <CaseStudies />
        <WorkingProcess />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
