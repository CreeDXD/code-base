import logo from '../../assets/icons8-pi-100.png'
import Card from './Card'
import Carrousel from '../shared/caroussel/Carrousel'
import carouselData from '../../data/data'

export function Main() {
  return (
    <div className="container__main">
      <h1>Main</h1>

      <Card
        title="Card title"
        description="Card description"
        imageUrl={logo}
        link="/page3"
      />
      <Card
        title="Card title"
        description="Card description"
        imageUrl={logo}
        link="/page4"
      />
      <Card
        title="Card title"
        description="Card description"
        imageUrl={logo}
        link="/page5"
      />
      <Carrousel images={carouselData} />
    </div>
  )
}
