import logo from '../../assets/icons8-pi-100.png'
import Card from './Card'
import Carrousel from '../shared/caroussel/Carrousel'
import carrouselData from '../../data/data'
import Materiel from '../features/Materiel'

export function Main() {
  return (
    <div className="container__main">
      {/* <h1>Main</h1> */}

      <Card
        title="Matériel"
        description={carrouselData[0].altText}
        imageUrl={carrouselData[0].imageUrl}
        link="/page3"
      />
      <Card
        title="Cours"
        description={carrouselData[1].altText}
        imageUrl={carrouselData[1].imageUrl}
        link="/page4"
      />
      <Card
        title="Réparation"
        description={carrouselData[2].altText}
        imageUrl={carrouselData[2].imageUrl}
        link="/page5"
      />
      <Materiel />
      {/* <Carrousel images={carouselData} /> */}
    </div>
  )
}
