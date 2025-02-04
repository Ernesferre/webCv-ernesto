import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Navbar,
  Hero,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { Analytics } from "@vercel/analytics/react"
import WhatsappButton from "./components/WhatsApp";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Analytics />
      <WhatsappButton />
    </BrowserRouter>
  );
};

export default App;
