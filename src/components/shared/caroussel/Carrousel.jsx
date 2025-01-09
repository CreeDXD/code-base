import React, { useState } from 'react'

const Carrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    )
  }

  return (
    <div className="carrousel">
      <button onClick={prevSlide} className="carrousel-button prev">
        Previous
      </button>
      <div className="carrousel-slide">
        <img
          src={images[currentIndex].imageUrl}
          alt={images[currentIndex].altText}
        />
      </div>
      <button onClick={nextSlide} className="carrousel-button next">
        Next
      </button>
    </div>
  )
}

export default Carrousel
