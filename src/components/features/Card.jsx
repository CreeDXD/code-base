import React from 'react'

const Card = ({ title, description, imageUrl, link }) => {
  return (
    <a href={link} className="card__link">
      <div className="card">
        <img src={imageUrl} alt={title} className="card__image" />
        <div className="card__content">
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
        </div>
        <button className="">Get Started</button>
      </div>
    </a>
  )
}

export default Card
