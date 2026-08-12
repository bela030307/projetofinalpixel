import './footer.css'

function Footer() {
  return (
    <footer className="footer">

      <div className="redes">
        <a
          href="https://www.instagram.com/ejpixel/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/img/redes.png"
            alt="Redes sociais"
          />
        </a>
      </div>

      <div className="info">

        <p>
          Rua Lauro Linhares, 75 - Trindade - Florianópolis
        </p>

        <p>
          contato@cafeteriaronronar.com.br
        </p>

        <p>
          De terça a domingo das 15h30 às 22h00 (Feriado não abrimos)
        </p>

        <p>
          (48) 94150-1843 - Horário Comercial
        </p>

      </div>

      <div className="logo-footer">
        <a href="#inicio">
          <img
            src="/img/logo2.png"
            alt="Logo Ronronar"
          />
        </a>
      </div>

    </footer>
  )
}

export default Footer