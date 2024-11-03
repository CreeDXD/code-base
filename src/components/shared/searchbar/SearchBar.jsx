import DropDown from '../dropdown/DropDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import './SearchBar.scss'

export default function searchBar({ query, handleInputChange }) {
  return (
    <div className="searchbar">
      <DropDown />
      <input
        type="text"
        placeholder="Toutes nos catégories"
        value={query}
        onChange={handleInputChange}
        className="searchbar__element"
      />
      <button className="searchbar__btn"></button>
    </div>
  )
}
