import './sobre.css'

function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <h1>A Cafeteria Ronronar</h1>

      <div className="conteudo-sobre">

        <div className="cortina-reveal visivel">
          <img
            src="/img/fotocafe.png"
            alt="Cafeteria"
            className="foto-cafe"
          />
        </div>

        <div className="texto-sobre">
          <h2>
            Um cantinho acolhedor para amantes de café e gatos.
            Aqui você pode relaxar, experimentar deliciosas bebidas
            e conhecer nossos gatinhos resgatados.
          </h2>

          <p>Rua Lauro Linhares, 75, Trindade, Florianópolis</p>
          <p>Terça a Domingo - 15h às 22h</p>
          <p>Não abrimos em feriados</p>
        </div>

      </div>
    </section>
  )
}

export default Sobre