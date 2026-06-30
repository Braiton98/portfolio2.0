"use client";
import { useState, useEffect } from "react";

export default function Navbar() {

  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // variables para el nav activo
  const [activeTab, setActiveTab] = useState("home");

  // variables para el scroll y .footer-iconTop
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si el usuario scrolleó más de 350px, mostramos el botón
      if (window.scrollY > 350) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    // Escuchamos el evento de scroll del navegador
    window.addEventListener("scroll", handleScroll);

    // Limpiamos el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const linkSelected = (activo) => {
    setActiveTab(activo);
    setIsOpen(false);
  }
  return (
    <>
      <header className="header">
        <a href="#" className="logo" onClick={() => linkSelected("home")}>Brian</a>
        <nav className="navbar">
          {/* MENÚ HAMBURGUESA */}
          <button
            className={`menu-toggle ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>

          <ul className={`nav-links ${isOpen ? 'on' : ''}`} >
            <li className="lista">
              <a
                href="#"
                onClick={() => linkSelected("home")}
                className={`linked ${activeTab === "home" ? "active" : ""}`}
              >
                Inicio
              </a>
            </li>
            <li className="lista">
              <a
                href="#about"
                onClick={() => linkSelected("about")}
                className={`linked ${activeTab === "about" ? "active" : ""}`}
              >
                Sobre mí
              </a>
            </li>
            <li className="lista">
              <a
                href="#education"
                onClick={() => linkSelected("education")}
                className={`linked ${activeTab === "education" ? "active" : ""}`}
              >
                Educación
              </a>
            </li>
            <li className="lista">
              <a
                href="#skills"
                onClick={() => linkSelected("skills")}
                className={`linked ${activeTab === "skills" ? "active" : ""}`}
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#form"
                onClick={() => linkSelected("contact")}
                className={`linked ${activeTab === "contact" ? "active" : ""}`}
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* SUBIR AL INICIO */}
      <div className={`footer-iconTop ${showScrollUp ? 'visible' : 'hidden'}`}>
        <a
          href="#"
          onClick={() => setActiveTab("home")}
          className={`linkUp ${activeTab === "home" ? "active" : ""}`}
        >
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </>
  );
}