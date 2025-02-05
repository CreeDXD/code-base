import React from 'react'

const Card = ({ title, description, imageUrl, link }) => {
  function smoothScroll() {
    document.getElementById(link).scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className="card" onClick={smoothScroll}>
      <img src={imageUrl} alt={title} className="card__image" />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>

      <button className="">Découvrire</button>
    </div>
  )
}

export default Card
