import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";

import './index.css';
import About from "./pages/about.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import PatitasYCorazones from "./pages/projects/PatitasYCorazones.jsx";
import TheMarketPlace from "./pages/projects/TheMarketPlace.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Mi-Portafolios">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Projects />} />
          <Route path="sobre-mi" element={<About />} />
          <Route path="proyectos" element={<Projects />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="proyectos/patitas-y-corazones" element={<PatitasYCorazones />} />
          <Route path="proyectos/the-market-place" element={<TheMarketPlace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
