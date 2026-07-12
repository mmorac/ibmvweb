import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import Media from "./componentes/Media";
import Visita from "./componentes/Visita";
import Contacto from "./componentes/Contacto";
import Ministerios from "./componentes/Ministerios";

const App: React.FC = () => {
  const collapseRef = useRef<HTMLDivElement | null>(null);

  const handleNavItemClick = () => {
    const collapseElement = collapseRef.current;
    if (collapseElement && collapseElement.classList.contains("show")) {
      const bsCollapse = new (window as any).bootstrap.Collapse(collapseElement);
      bsCollapse.hide();
    }
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img className="social" src="/img/ibmv_logo.png" alt="Logo IBMV" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
              ref={collapseRef}
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/" onClick={handleNavItemClick}>
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/visita" onClick={handleNavItemClick}>
                    Visítanos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/ministerios" onClick={handleNavItemClick}>
                    Ministerios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/media" onClick={handleNavItemClick}>
                    Media
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/contacto" onClick={handleNavItemClick}>
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/media" element={<Media />} />
          <Route path="/visita" element={<Visita />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/ministerios" element={<Ministerios />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
