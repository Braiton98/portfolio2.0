export default function Contact() {
  return (
    <>
      {/* SECCIÓN CONTACTO */}
      <section className="form-section" id="form">
        <h2 className="heading"><span>¡</span>Hablemos<span>!</span></h2>

        <form autoComplete="off" className="form" action="https://formsubmit.co/06f2df4b161c25e1a046de597da0ef3f" method="POST">

          {/* <input type="hidden" name="_next" value="https://brianportfolioweb.netlify.app/gracias.html"> */}

            <label htmlFor="nombre">Nombre:
              <input className="nombre" type="text" id="nombre" name="name" placeholder="Joe" required />
            </label>

            <label htmlFor="email">Tu Correo:
              <input className="email" type="email" id="email" name="email" placeholder="joedoe@email.com" required />
            </label>

            <label htmlFor="mensaje">Mensaje:
              <textarea className="mensaje" id="mensaje" name="message" placeholder="Escribe tu mensaje." required></textarea>
            </label>

            <button className="submit" type="submit">Enviar Correo</button>

        </form>
      </section>

      {/* SECCIÓN FOOTER */}
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2026 por Brian Cáceres | Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}