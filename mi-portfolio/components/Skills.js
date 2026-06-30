export default function Skills() {
  // Array de habilidades técnicas con sus respectivas imágenes
  const techSkills = [
    { name: "HTML", src: "/assets/images/html.png" },
    { name: "CSS", src: "/assets/images/css.png" },
    { name: "JS", src: "/assets/images/javascript1.png" },
    { name: "REACT", src: "/assets/images/react.png" },
    { name: "MongoDB", src: "/assets/images/mongodb.png" },
    { name: "NodeJs", src: "/assets/images/nodejs.png" }
  ];

  // Array de habilidades profesionales (blandas)
  const softSkills = [
    "Trabajo en Equipo",
    "Comunicación",
    "Proactivo",
    "Aprendiz",
    "Gestión de tiempo"
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="heading h-skills">Mis <span>Habilidades</span></h2>

      <div className="skills-row">
        {/* COLUMNA: HABILIDADES TÉCNICAS */}
        <div className="skills-column">
          <h3 className="title">Habilidades Técnicas</h3>

          <div className="skills-box">
            <div className="skills-content s1">
              {techSkills.map((skill, index) => (
                <div className="progress" key={index}>
                  <h3>{skill.name}</h3>
                  <img src={skill.src} alt={`${skill.name} Logo`} className="skill-icon" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COLUMNA: HABILIDADES PROFESIONALES */}
        <div className="skills-column">
          <h3 className="title">Habilidades Profesionales</h3>

          <div className="skills-box">
            <div className="skills-content soft-skills-container">
              {softSkills.map((skill, index) => (
                <div className="progress" key={index}>
                  <div className="soft-skill-card">
                    <h3>{skill}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}