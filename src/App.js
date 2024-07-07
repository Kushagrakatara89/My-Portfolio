import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbarr from "./Components/Navbarr";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbarr />
      <About />
      <Project />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}