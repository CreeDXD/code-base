import BurgerSection from '../features/Burger_Section'

export function Header() {
  return (
    <div className="container__header">
      <nav>
        <ul>
          <li>
            <a href="#home" className="logo_name">
              JCN Club Informatique
            </a>
          </li>
          <li>
            <a href="#services">Matériel</a>
          </li>
          <li>
            <a href="#about">Cours</a>
          </li>
          <li>
            <a href="#contact"> Réparation</a>
          </li>
          <li>
            <BurgerSection />
          </li>
        </ul>
      </nav>
    </div>
  )
}
