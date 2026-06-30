export default function Journey() {
  // Datos de Educación
  const educationData = [
    {
      year: "2026",
      title: "Licenciatura en Sistemas",
      institution: "Universidad Nacional de Lanús (UNLa)",
      description: "Actualmente me encuentro cursando la carrera de grado, profundizando en lógica de desarrollo, arquitectura de computadoras y tecnologías de software."
    },
    {
      year: "2025",
      title: "Secundario Finalizado",
      institution: "Escuela Secundaria Nº10 'Memoria de Malvinas'",
      description: "Modalidad: Educación Física."
    },
    {
      year: "2023",
      title: "Diplomatura en Desarrollo Web FullStack",
      institution: "Fundación Empujar (Programa Emplear + Empujar)",
      description: "Formación intensiva donde me diplomé como Desarrollador FullStack, adquiriendo bases sólidas de tecnologías web y habilidades profesionales."
    },
    {
      year: "2017",
      title: "Orientación e Informática Aplicada",
      institution: "Disal UOM Avellaneda (Dictado en la UNLZ)",
      description: "Curso de nivelación informática orientado a software aplicado (Word, Excel, PowerPoint)."
    }
  ];

  // Datos de Experiencia
  const experienceData = [
    {
      year: "2023 - Actual",
      title: "Kermesse",
      institution: "Animaciones El Fránces / Eventos",
      description: "Armado, logística y atención al público en juegos de feria de circo tradicionales."
    },
    {
      year: "2022",
      title: "Seguridad",
      institution: "Supermercado Mayorista Trapal",
      description: "Desempeño en tareas de prevención, control de accesos y seguridad interna del establecimiento."
    }
  ];

  return (
    <section className="education" id="education">
      <h2 className="heading">Mi <span>Travesía</span></h2>

      <div className="education-row">
        {/* COLUMNA: EDUCACIÓN */}
        <div className="education-column">
          <h3 className="title">Educación</h3>

          <div className="education-box">
            {educationData.map((item, index) => (
              <div className="education-content" key={index}>
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i> {item.year}
                  </div>
                  <h3>{item.title}</h3>
                  <span className="institution">{item.institution}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMNA: EXPERIENCIA */}
        <div className="education-column">
          <h3 className="title">Experiencia</h3>

          <div className="education-box">
            {experienceData.map((item, index) => (
              <div className="education-content" key={index}>
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i> {item.year}
                  </div>
                  <h3>{item.title}</h3>
                  <span className="institution">{item.institution}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}