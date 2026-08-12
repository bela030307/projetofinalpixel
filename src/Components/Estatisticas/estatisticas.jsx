import './estatisticas.css'

function Estatisticas() {
  return (
    <section className="estatisticas" id="estatisticas">

      <div className="item">
        <img src="/img/medalha.png" alt="Medalha" className="medalha" />
        <p>Melhor cafeteria do<br />Brasil</p>
      </div>

      <div className="item">
        <img src="/img/mao.png" alt="Mão" className="mao" />
        <p>+200 adoções<br />por ano</p>
      </div>

      <div className="item">
        <img src="/img/cafe.png" alt="Café" className="cafe" />
        <p>+70 especialidades<br />culinárias</p>
      </div>

      <div className="item">
        <img src="/img/maos.png" alt="Mãos" className="maos" />
        <p>10 anos de<br />História</p>
      </div>

    </section>
  )
}

export default Estatisticas