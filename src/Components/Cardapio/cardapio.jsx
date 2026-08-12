import { useEffect, useRef } from 'react'
import './cardapio.css'

function Cardapio() {
  const viewportRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const viewport = viewportRef.current
    const track = trackRef.current
    const btnAnterior = document.getElementById('btn-anterior')
    const btnProximo = document.getElementById('btn-proximo')

    if (!viewport || !track || !btnAnterior || !btnProximo) {
      return
    }

    function larguraCard() {
      const gap = parseFloat(getComputedStyle(track).gap) || 0
      return track.children[0].offsetWidth + gap
    }

    function proximo() {
      track.style.transition = 'transform 0.5s ease'
      track.style.transform = `translateX(-${larguraCard()}px)`
    }

    function anterior() {
      track.style.transition = 'none'

      track.insertBefore(
        track.lastElementChild,
        track.firstElementChild
      )

      track.style.transform = `translateX(-${larguraCard()}px)`

      track.offsetHeight

      track.style.transition = 'transform 0.5s ease'
      track.style.transform = 'translateX(0)'
    }

    function terminouTransicao() {
      if (track.style.transform !== 'translateX(0px)') {
        track.style.transition = 'none'
        track.appendChild(track.firstElementChild)
        track.style.transform = 'translateX(0)'
      }
    }

    track.addEventListener('transitionend', terminouTransicao)

    btnProximo.addEventListener('click', proximo)
    btnAnterior.addEventListener('click', anterior)

    let autoplay = setInterval(proximo, 3500)

    function pausar() {
      clearInterval(autoplay)
    }

    function continuar() {
      autoplay = setInterval(proximo, 3500)
    }

    viewport.addEventListener('mouseenter', pausar)
    viewport.addEventListener('mouseleave', continuar)

    return () => {
      track.removeEventListener('transitionend', terminouTransicao)

      btnProximo.removeEventListener('click', proximo)
      btnAnterior.removeEventListener('click', anterior)

      viewport.removeEventListener('mouseenter', pausar)
      viewport.removeEventListener('mouseleave', continuar)

      clearInterval(autoplay)
    }
  }, [])

  return (
    <section className="cardapio" id="cardapio">

      <h2>Itens mais pedidos:</h2>

      <div className="carrossel-container">

        <button
          className="seta seta-esquerda"
          id="btn-anterior"
        >
          &larr;
        </button>

        <div
          className="carrossel-viewport"
          ref={viewportRef}
        >
          <div
            className="cards"
            id="cards-track"
            ref={trackRef}
          >

            <div className="card">
              <h3>Cat Waffle</h3>
              <img
                src="/img/carrosel1.png"
                alt="Cat Waffle"
              />
            </div>

            <div className="card">
              <h3>Sanducat</h3>
              <img
                src="/img/carrosel2.png"
                alt="Sanducat"
              />
            </div>

            <div className="card">
              <h3>Donucat</h3>
              <img
                src="/img/carrosel3.png"
                alt="Donucat"
              />
            </div>

            <div className="card">
              <h3>Catuccino</h3>
              <img
                src="/img/carrosel4.png"
                alt="Catuccino"
              />
            </div>

            <div className="card">
              <h3>Salgacats</h3>
              <img
                src="/img/carrosel5.png"
                alt="Salgacats"
              />
            </div>

            <div className="card">
              <h3>Pudimcat</h3>
              <img
                src="/img/carrosel6.png"
                alt="Pudimcat"
              />
            </div>

            <div className="card">
              <h3>Bubble cats</h3>
              <img
                src="/img/carrosel7.png"
                alt="Bubble cats"
              />
            </div>

            <div className="card">
              <h3>Biscoito cats</h3>
              <img
                src="/img/carrosel8.png"
                alt="Biscoito cats"
              />
            </div>

          </div>
        </div>

        <button
          className="seta seta-direita"
          id="btn-proximo"
        >
          &rarr;
        </button>

      </div>

      <button
        className="btn-cardapio"
        id="btn-cardapio"
        onClick={() => window.open('https://drive.google.com/file/d/19kDoS5S2GfURAw2yAjpsd6pXhsWFqYf8/view?usp=sharing', '_blank')}
      >
        Acessar cardápio completo
      </button>

    </section>
  )
}

export default Cardapio