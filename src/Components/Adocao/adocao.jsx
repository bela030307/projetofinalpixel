import './adocao.css'

function Adocao() {
  const gatos = [
    {
      imagem: '/img/gato1.png',
      nome: 'Teo',
      idade: '3 anos',
      caracteristica: 'Castrado'
    },
    {
      imagem: '/img/gato2.png',
      nome: 'Jessica',
      idade: '6 anos',
      caracteristica: 'Castrada'
    },
    {
      imagem: '/img/gato3.png',
      nome: 'Romeu',
      idade: '2 anos',
      caracteristica: 'Castrado'
    },
    {
      imagem: '/img/gato4.png',
      nome: 'Roberto',
      idade: '3 meses',
      caracteristica: 'Brincalhão'
    },
    {
      imagem: '/img/gato5.png',
      nome: 'Carnavalda',
      idade: '2 anos',
      caracteristica: 'Castrada'
    },
    {
      imagem: '/img/gato6.png',
      nome: 'Luna',
      idade: '3 meses',
      caracteristica: 'Carinhosa'
    },
    {
      imagem: '/img/gato7.png',
      nome: 'João',
      idade: '1 ano',
      caracteristica: 'Castrado'
    },
    {
      imagem: '/img/gato8.png',
      nome: 'Helena',
      idade: '4 anos',
      caracteristica: 'Castrada'
    }
  ]

  return (
    <>
      <section className="adocao" id="adocao">

        <h2>Adoção</h2>

        <p className="texto-adocao">
          Muitos dos nossos gatinhos foram resgatados e aguardam uma nova
          oportunidade de encontrar um lar cheio de amor. Aqui na Cafeteria
          Ronronar, acreditamos que todo gato merece uma família para chamar de sua.
        </p>

        <div className="processo-adocao">

          <img
            src="/img/adote.png"
            className="foto-adocao"
            alt="Gato disponível para adoção"
          />

          <div className="passos">

            <h3>Como funciona a adoção?</h3>

            <ol>
              <li>Conheça nossos gatinhos.</li>
              <li>Converse com nossa equipe.</li>
              <li>Passe pela entrevista.</li>
              <li>Leve seu novo amigo para casa.</li>
            </ol>

          </div>

        </div>

      </section>

      <section className="gatinhos">

        <h2 className="titulo-gatos">
          Nossos gatinhos 🐾
        </h2>

        <div className="lista-gatos">

          {gatos.map((gato) => (
            <div className="gato" key={gato.nome}>

              <img
                src={gato.imagem}
                alt={`Gato ${gato.nome}`}
              />

              <h3>{gato.nome}</h3>

              <p>{gato.idade}</p>

              <p>{gato.caracteristica}</p>

              
              <button
                className="adote"
                onclick={() => window.open('https://wa.me/5548999999999?text=Olá,%20gostaria%20de%20adotar%20um%20gato!', '_blank')}
              >
                Quero adotar!
              </button>
            

            </div>
          ))}

        </div>

      </section>
    </>
  )
}

export default Adocao