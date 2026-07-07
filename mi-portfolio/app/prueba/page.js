'use client';
import { useState, useEffect } from "react";
import styles from './prueba.module.css';
import Link from "next/link";

import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Journey from "../../components/Journey";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects"
import Contact from "../../components/Contact";

export default function Home() {

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
      {/* <Navbar /> */}

      <header className={styles.header}>
        <a
          href="#"
          className={styles.logo}
          onClick={() => linkSelected("home")}
        >
          Brian
        </a>
        <nav className={styles.navbar}>
          <button
            className={`${styles['menu-toggle']} ${isOpen ? styles.open : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>

          {/* 2. Corregido el guion y la concatenación */}
          <ul className={`${styles['nav-links']} ${isOpen ? styles.on : ''}`} >
            {/* Nota semántica: Lo ideal sería envolver estos <a> en etiquetas <li> */}
            <li className="lista">
              <a
                href="#"
                onClick={() => linkSelected("home")}
                className={`${styles['linked']} ${activeTab === "home" ? styles.active : ""}`}
              >
                Inicio
              </a>
            </li>

            <li className="lista">
              <a
                href="#about"
                onClick={() => linkSelected("about")}
                className={`${styles['linked']} ${activeTab === "about" ? styles.active : ""}`}
              >
                Sobre mí
              </a>
            </li>

            <li className="lista">
              <a
                href="#education"
                onClick={() => linkSelected("education")}
                className={`${styles['linked']} ${activeTab === "education" ? styles.active : ""}`}
              >
                Educación
              </a>
            </li>

            <li className="lista">
              <a
                href="#skills"
                onClick={() => linkSelected("skills")}
                className={`${styles['linked']} ${activeTab === "skills" ? styles.active : ""}`}
              >
                Habilidades
              </a>
            </li>

            <li className="lista">
              <a
                href="#form"
                onClick={() => linkSelected("contact")}
                className={`${styles['linked']} ${activeTab === "contact" ? styles.active : ""}`}
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* 3. Corregido el guion en footer-iconTop. 
        Nota: Si 'hidden' es una clase global (como en Tailwind), déjala así. 
        Si viene de tu CSS Module, cámbiala por styles.hidden */}
      <div className={`${styles['footer-iconTop']} ${showScrollUp ? styles.visible : styles.hidden}`}>
        <a
          href="#"
          onClick={() => linkSelected("home")}
          className={`${styles['linkUp']} ${activeTab === "home" ? styles.active : ""}`}
        >
          {/* 4. Corregido el operador && por interpolación limpia */}
          <i className={`${styles['bx']} ${'bx'} ${'bx-up-arrow-alt'}`}></i>
        </a>
      </div>
      <div className="btn-box">
        <Link href="http://localhost:3000/" className="btn">Home</Link>
      </div>

      <main>
        {/* Sección Inicio (Home) */}
        <section id="home" className="home">
          <div className="home-content">
            <h1>Hola, soy <span>Brian Cáceres</span></h1>
            <div className="text-animate">
              <h3>Desarrollador FullStack</h3>
            </div>

            <div className="btn-box">
              <a download="BrianCaceresCV" href="/assets/Brian_Caceres_CV.pdf" className="btn">
                Descargar CV
              </a>
              <a href="#form" className="btn">Hablemos</a>
            </div>

            <div className="home-sci">
              <a href="https://github.com/Braiton98" target="_blank" rel="noopener noreferrer"><i className="bx bxl-github"></i></a>
              <a href="https://www.linkedin.com/in/briancaceres98/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>
          <div className="home-imgHover"></div>
        </section>
        {/* About Section */}
        <About />
        {/* Journey Section */}
        <Journey />
        {/* Skills Section */}
        <Skills />
        {/* Projects Section */}
        <Projects />
        {/* Contact Section */}
        <Contact />
      </main>
    </>
  );
}

