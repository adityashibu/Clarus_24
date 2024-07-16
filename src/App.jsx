import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, StarsHeroCanvas, CopyrightFooter } from './components';
import ProfilePage from './profile'
import Projects from './projects';

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
                  <StarsHeroCanvas />
                </div>
                <div className="relative z-0">
                  <About />
                  <StarsCanvas />
                </div>
                <Experience />
                <Tech />
                <Works />
                {/* <Feedbacks /> */}
                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>
                <div className='bg-black mt-5 py-5'>
                  <CopyrightFooter />
                </div>
              </>
            }
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

