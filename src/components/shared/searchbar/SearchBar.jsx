import DropDown from '../dropdown/DropDown'
// import './SearchBar.scss'

export default function searchBar({ query, handleInputChange }) {
  return (
    <div className="container__header">
      <DropDown />
      <input
        type="text"
        placeholder="Toutes nos catégories"
        value={query}
        onChange={handleInputChange}
        className="searchbar__element"
      />
    </div>
  )
}
