import BurgerSection from '../features/Burger_Section'

export function Header() {
  const smoothScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className="container__header" id="hoime">
      <nav>
        <ul>
          <li onClick={() => smoothScroll('home')}>JCN Club Informatique</li>
          <li onClick={() => smoothScroll('materiel')}>Matériel</li>
          <li onClick={() => smoothScroll('cours')}>Cours</li>
          <li onClick={() => smoothScroll('reparation')}>Réparation</li>
          <li>
            <BurgerSection />
          </li>
        </ul>
      </nav>
    </div>
  )
}
