import SearchBar from '../shared/search_bar'
export default function HeaderAmazon() {
  return (
    <div className="container__header">
      <div className="logo"></div>
      <SearchBar />
      <div className="language"></div>
      <div className="connexion"></div>
      <div className="retour&commandes"></div>
      <div className="panier"></div>
    </div>
  )
}
