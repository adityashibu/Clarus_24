import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { About, Contact, Hero, Navbar, StarsCanvas, Milestones, DigitalWorkspace, Team } from './components';

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
                  <StarsCanvas />
                  <DigitalWorkspace />
                  <Team />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

