import logo from '../../assets/icons8-pi-100.png'
import Card from './Card'
import Carrousel from '../shared/caroussel/Carrousel'
export function Main() {
  return (
    <div className="container__main">
      <h1>Main</h1>

      <a href="/page1">
        <Card
          title="Card title"
          description="Card description"
          imageUrl={logo}
        />
      </a>
      <a href="/page2">
        <Card
          title="Card title"
          description="Card description"
          imageUrl={logo}
        />
      </a>
      <a href="/page3">
        <Card
          title="Card title"
          description="Card description"
          imageUrl={logo}
        />
      </a>
      <Carrousel />
    </div>
  )
}
