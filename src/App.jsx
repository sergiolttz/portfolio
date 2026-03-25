import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Blob from "./components/Blob";
import CursorGlow from "./components/CursorGlow";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectPage from "./pages/ProjectPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Blob />
      <Navbar />
      <CursorGlow />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </>
          }
        />

        {/* Ruta dinámica para cada proyecto */}
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>

      <Footer />
    </>
  );
}
