import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Login from "../components/Login";
import Articles from "../components/Articles";
import Error from "../components/Error";
import NavBar from "./NavBar";

export default function AppRouter() {
  return (
    <Router>
      <div className="flex flex-col w-full items-center">
        {/* Menú de Navegación */}
        <header>
          <NavBar />
        </header>
        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}
