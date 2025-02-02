// const Materiel = () => {
//   return (
//     <div className="container__materiel call-to-action">
//       <h1>Vente de matériels informatiques</h1>
//       <p>
//         Tout le matériel nécaissaire pour votre bureautique (écran, composants,
//         tour, clavier, ordinateur portable...){' '}

//       </p>
//     </div>
//   )
// }
// export default Materiel
import React, { useEffect, useState } from 'react'
import ArticleCard from './Artical_Card'

const Materiel = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    import('../../data/data')
      .then((module) => setArticles(module.default))
      .catch((error) => console.error('Error loading data:', error))
  }, [])
  return (
    <div id='materiel' className="container__materiel call-to-action" >
      <h1>Vente de matériels informatiques</h1>
      <p>
        Tout le matériel nécaissaire pour votre bureautique (écran, composants,
        tour, clavier, ordinateur portable...){' '}
      </p>
      <div className="articles">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}

export default Materiel
