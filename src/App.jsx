import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SlidingGallery from "./components/SlidingGallery";
import SecondHero from "./components/SecondHero";
import EventHighlights from "./components/EventHighlights";
import ContactInfo from "./components/ContactInfo";
import RegisterSection from "./components/RegisterSection";
import Footer from "./components/Footer";
import Register from "./components/Register";
import EventInfo from "./components/EventInfo";
import ContactAs from "./components/ContactAs";
import AboutAs from "./components/AboutAs";

const Home = () => {
  return (
    <div className="pt-24">
      <HeroSection />
      <SlidingGallery />
      <SecondHero />
      <EventHighlights />
      <ContactInfo />
      <RegisterSection />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/eventinfo" element={<EventInfo />} />
        <Route path="/aboutAs" element={<AboutAs />} />
        <Route path="/contactAs" element={<ContactAs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
