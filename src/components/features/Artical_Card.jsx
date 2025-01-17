import React from 'react'

const ArticleCard = ({ title, description, price, addToCart }) => {
  return (
    <div className="article-card">
      <div className="article-card__content">
        <h2 className="article-card__title">{title}</h2>
        <p className="article-card__description">{description}</p>
        <p className="article-card__price">${price}</p>
      </div>
      <button className="article-card__button" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  )
}

export default ArticleCard
