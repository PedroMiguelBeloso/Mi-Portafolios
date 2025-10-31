import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
