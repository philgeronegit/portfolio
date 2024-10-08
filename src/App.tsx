import { Footer } from "flowbite-react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Contact,
  Content,
  DarkModeContext,
  Experience,
  Formation,
  Hero,
  Navbar,
  Project,
  StarsCanvas,
  Tech,
} from "./components";

function App() {
  const [isDarkMode, setDarkMode] = useState<boolean>(true);
  return (
    <div>
      <BrowserRouter>
        <DarkModeContext.Provider value={isDarkMode}>
          <div className="relative z-0 bg-gray-800 dark:bg-primary">
            <div className="bg-hero-pattern-light bg-contain bg-center bg-no-repeat md:bg-cover dark:bg-hero-pattern">
              <Navbar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
              <Hero />
            </div>
            <Content />
            <Formation />
            <Project />
            <Experience />
            <Tech />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
            <Footer container className="bg-gray-900">
              <Footer.Copyright href="#" by="Philippe Gerhardt" year={2024} />
            </Footer>
          </div>
        </DarkModeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
