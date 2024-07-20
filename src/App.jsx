import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { About, Hero, Navbar, StarsCanvas, Milestones, DigitalWorkspace, Team, FAQAccordion, Contact, Footer, ScrollUp, DigitalWorkspace1, DigitalWorkspace2, DigitalWorkspace3 } from './components';
import Partners from './components/Partners';
import { Analytics } from "@vercel/analytics/react"

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
                  <DigitalWorkspace1 />
                  <DigitalWorkspace2 />
                  <DigitalWorkspace3 />
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;

