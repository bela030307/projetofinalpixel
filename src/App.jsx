import Header from './Components/Header/header'
import Hero from './Components/Hero/hero'
import Sobre from './Components/Sobre/sobre'
import Estatisticas from './Components/Estatisticas/estatisticas'
import Cardapio from './Components/Cardapio/cardapio'
import Depoimentos from './Components/Depoimentos/depoimentos'
import Parceiros from './Components/Parceiros/parceiros'
import Footer from './Components/Footer/footer'
import Adocao from './Components/Adocao/adocao'

function App() {

  if (window.location.pathname === '/adocao') {
    return (
      <>
        <Header />
        <Adocao />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Estatisticas />
      <Cardapio />
      <Depoimentos />
      <Parceiros />
      <Footer />
    </>
  )
}

export default App