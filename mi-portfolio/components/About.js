export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="heading">Sobre <span>Mí</span></h2>
      <div className="about-img">
        <img
          src="/assets/images/profile-pic-0.png"
          alt="Foto de perfil de Brian Cáceres"
        />
        <span className="circle-spin"></span>
      </div>

      <div className="about-content">
        <h3>Desarrollador Web Junior</h3>
        <p>
          Mi nombre es Brian Cáceres. Actualmente me encuentro cursando la
          carrera de Licenciatura en Sistemas en la Universidad Nacional de Lanús (UNLa).
          Me apasiona el desarrollo de software y la resolución de problemas lógicos,
          enfocándome constantemente en aprender nuevas tecnologías y mejorar mis habilidades
          tanto en el Frontend como en el Backend.
        </p>
      </div>
    </section>
  );
}