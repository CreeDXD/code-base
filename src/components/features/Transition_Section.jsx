import React from 'react'
import articles from '../../data/data'

const TransitionSection = () => {
  console.log(articles)
  const image1 = articles.length > 0 ? articles[articles.length - 1].image : ''
  const image2 = articles.length > 1 ? articles[articles.length - 2].image : ''
  return (
    <div className="transition__section">
      <img
        src={image1}
        alt="LastProduct1"
        className="transition__section--image transition__section--image1"
      />
      <div className="transition__section--container">
        <h2 className="transition__section--title">
          Regardes les derniers Articles ajoutées{' '}
        </h2>
        <p className="transition__section--description">
          les derniers ordinateurs portables, smartphones, tablettes et
          accessoires avec les dernières technologies et les meilleurs prix.
        </p>
      </div>

      <img
        src={image2}
        alt="LastProduct2"
        className="transition__section--image transition__section--image2"
      />
    </div>
  )
}

export default TransitionSection
