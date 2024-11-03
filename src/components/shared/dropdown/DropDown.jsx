import React, { useState } from 'react'
// import './DropDown.scss'

export default function DropDown() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [isDropdownVisible, setDropdownVisible] = useState(false)

  const sampleSuggestions = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
  ]

  // const handleInputChange = (e) => {
  //   const value = e.target.value
  //   setQuery(value)
  //   if (value) {
  //     const filteredSuggestions = sampleSuggestions.filter((item) =>
  //       item.toLowerCase().includes(value.toLowerCase()),
  //     )
  //     setSuggestions(filteredSuggestions)
  //     setDropdownVisible(true)
  //   } else {
  //     setDropdownVisible(false)
  //     setSuggestions([])
  //   }
  // }

  return (
    <div className="dropdown__container">
      <button className="dorpdown__button" type="text">
        catégories
      </button>
      <ul>
        <li></li>
      </ul>
    </div>
  )
}
