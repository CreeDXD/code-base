import logo from '../../assets/icons8-pi-100.png'

export function Main() {
  return (
    <div className="container__main">
      <h1>Main</h1>
      <div className="container__main__logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}
