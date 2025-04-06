import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SlidingGallery from "./components/SlidingGallery";
import SecondHero from "./components/SecondHero";
import EventHighlights from "./components/EventHighlights";
import ContactInfo from "./components/ContactInfo";
import RegisterSection from "./components/RegisterSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[90px]">
        <HeroSection />
        <SlidingGallery />
        <SecondHero />
        <EventHighlights />
        <ContactInfo />
        <RegisterSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
