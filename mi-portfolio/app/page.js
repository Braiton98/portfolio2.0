import Navbar from "../components/Navbar";
import About from "../components/About";
import Journey from "../components/Journey";
import Skills from "../components/Skills";
import Projects from "../components/Projects"
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      
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