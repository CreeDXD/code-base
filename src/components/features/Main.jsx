import Card from './Card'
// import Carrousel from '../shared/caroussel/Carrousel'
import { carrouselData } from '../../data/data'
import Materiel from '../features/Materiel'
import Cours from '../features/Cours'
import Reparation from '../features/Reparation'
export function Main() {

  

  return (
    <div id='home' className="container__main" >
      {/* <h1>Main</h1> */}

      <Card
        title="Matériel"
        description={carrouselData[0].altText}
        imageUrl={carrouselData[0].imageUrl}
        link="materiel"
       
      />
      <Card
        title="Cours"
        description={carrouselData[1].altText}
        imageUrl={carrouselData[1].imageUrl}
        link="cours"
      />
      <Card
        title="Réparation"
        description={carrouselData[2].altText}
        imageUrl={carrouselData[2].imageUrl}
        link="reparation"
      />

      <Materiel 
      
      />
      <Cours />
      <Reparation />
      {/* <Carrousel images={carouselData} /> */}
    </div>
  )
}
