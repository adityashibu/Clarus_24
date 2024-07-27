import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Hero, Navbar, StarsCanvas, Milestones, DigitalWorkspace, Team, FAQAccordion, Contact, Footer, ScrollUp } from './components';
import Partners from './components/Partners';
import { Analytics } from "@vercel/analytics/react";
import { Apple, CISO, Helpdesk } from './subpages/digital-Workspace/';

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-white">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="bg-white">
                  <Navbar />
                </div>
                <div className="relative z-0">
                  <Hero />
                </div>
                <div className="relative z-0">
                  <About />
                  <Milestones />
                  <Partners />
                  <StarsCanvas />
                  <DigitalWorkspace />
                  <Team />
                  <FAQAccordion />
                  <Contact />
                  <Footer />
                  <ScrollUp />
                </div>
                <Analytics />
              </>
            }
          />
          <Route path="/apple-adoption" element={<Apple />} />
          <Route path="/ciso-services" element={<CISO />} />
          <Route path="/helpdesk" element={<Helpdesk />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
