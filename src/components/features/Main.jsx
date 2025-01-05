import logo from '../../assets/icons8-pi-100.png'
import Card from './Card'
export function Main() {
  return (
    <div className="container__main">
      <h1>Main</h1>

      <Card title="Card title" description="Card description" imageUrl={logo} />
      <Card title="Card title" description="Card description" imageUrl={logo} />
      <Card title="Card title" description="Card description" imageUrl={logo} />
    </div>
  )
}
