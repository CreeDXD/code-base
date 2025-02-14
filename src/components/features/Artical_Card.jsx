import React from 'react'

const ArticleCard = ({ article }) => {
  const { title, description, price, image } = article
  const addToCart = () => {
    console.log(`${title} added to cart at $${price}`)
  }
  return (
    <div className="article-card">
      <div className="article-card__content">
        <h2 className="article-card__content__title">{title}</h2>
        <p className="article-card__content__description">{description}</p>
        <img src={image} alt={title} className="article-card__content__image" />
        <p className="article-card__price">${price}</p>
      </div>
      {/* <button className="article-card__button" onClick={addToCart}>
        Add to Cart
      </button> */}
    </div>
  )
}

export default ArticleCard
