import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="layout">
      <Header /> {/* Los botones volverán aquí */}
      <main className="container">
        <Outlet /> {/* Aquí se renderizan las subpáginas */}
      </main>
      <Footer />
    </div>
  );
}
