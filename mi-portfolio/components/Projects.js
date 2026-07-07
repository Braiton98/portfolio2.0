export default function Projects() {
  // Llenamos la información
  const projectList = [
    {
      title: "Página de videojuegos",
      subtitle: "(A convertir en ecommerce)",
      image: "/assets/images/videogames.png",
      link: "https://games-project-b.netlify.app/",
      description: "Web que muestra videojuegos; la empezamos en la diplomatura en equipo y fue el proyecto que presentamos como final. Actualmente estoy haciendo actualizaciones de manera personal para mejorar en experiencia y habilidades. Cuenta con registro de usuarios, cookies, cierre de sesión, usando como base de datos MongoDB Atlas (CRUD), NodeJS (Express) para el back y ReactJS para el front. Incluso se pueden subir más juegos; aún quedan funciones por desarrollar."
    },
    {
      title: "Rick and Morty",
      subtitle: "Uso de APIs",
      image: "/assets/images/rickapp.png",
      link: "https://newrickandmortysapp.netlify.app",
      description: "Es un proyecto de práctica interactivo conectado con la API pública de Rick and Morty desarrollado durante las clases para dominar el consumo de datos y renderizado dinámico."
    },
    {
      title: "Sistema de Estrellas",
      subtitle: "Práctica CRUD",
      image: "/assets/images/stars.png",
      link: "https://starssystem.netlify.app/",
      description: "Un proyecto práctico enfocado en operaciones CRUD esenciales, donde se puede crear, puntuar, listar y eliminar registros de estudiantes de manera dinámica."
    }
  ];

  return (
    <section id="projects">
      <h2 className="heading">Mis <span>Proyectos</span></h2>
      {/* Mapeamos la información y mostramos */}
      <div className="projects">
        {projectList.map((project, index) => (
          <div className="card-container" key={index}>
            <div className="card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={`Captura de ${project.title}`} />
              <h2>{project.title}</h2>
              {project.subtitle && <h3>{project.subtitle}</h3>}
              <p className="about">{project.description}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}