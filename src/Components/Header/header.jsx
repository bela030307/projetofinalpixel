import './header.css'

function Header() {
  return (
    <header>
      <div className="logo">
        <a href="#inicio">
          <img
            src="/img/logo.png.png"
            alt="Logo"
          />
        </a>
      </div>

      <nav>
        <ul className="nav-links">
          <li><a href="/#inicio">HOME</a></li>
          <li><a href="/#cardapio">CARDÁPIO</a></li>
          <li><a href="/#sobre">SOBRE</a></li>
          <li><a href="/adocao">ADOÇÃO</a></li>
          <li><a href="/#parceiros">PARCEIROS</a></li>
          <li><a href="/#depoimentos">DEPOIMENTOS</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header