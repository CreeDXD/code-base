import React, { useState } from 'react'

const BurgerSection = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleBurgerSection = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="burger-section">
      <button onClick={toggleBurgerSection} className="burger-section__button">
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      {isOpen && (
        <div className="burger-section__content open">
          <h2 className="burger-section__title">Burger Menu</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
            <li>Item 7</li>
            <li>Item 8</li>
            <li>Item 9</li>
            <li>Item 10</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default BurgerSection
