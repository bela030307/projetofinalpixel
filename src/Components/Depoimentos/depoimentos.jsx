import './depoimentos.css'

function Depoimentos() {
  return (
    <section className="depoimentos" id="depoimentos">

      <h2>depoimentos</h2>

      <div className="cards-depoimentos">

        <div className="depoimento">
          <img src="/img/depoimento1.png" alt="" />
          <p>
            "Melhor cafeteria do mundo, recomendo demais!" - Maria Fernanda K.
          </p>
        </div>

        <div className="depoimento">
          <img src="/img/depoimento2.png" alt="" />
          <p>
            "Um dos lugares mais aconchegantes que já visitei em Florianópolis." - Isabella
          </p>
        </div>

        <div className="depoimento">
          <img src="/img/depoimento3.png" alt="" />
          <p>
            "Passei horas aqui sem perceber o tempo passar." - Flavia C.
          </p>
        </div>

        <div className="depoimento">
          <img src="/img/depoimento4.png" alt="" />
          <p>
            "Vim pelo café e saí querendo adotar todos os gatos!" - Stella C.
          </p>
        </div>

        <div className="depoimento">
          <img src="/img/depoimento5.png" alt="" />
          <p>
            "Foi impossível não me apaixonar pelos gatos." - Maria L.
          </p>
        </div>

      </div>

      <button 
      id="btn2-reserva"
      onClick={() => window.open('https://wa.me/5548999999999?text=Olá,%20gostaria%20de%20fazer%20uma%20reserva!', '_blank')}
      >
        Faça a sua reserva agora!
      </button>

    </section>
  )
}

export default Depoimentos