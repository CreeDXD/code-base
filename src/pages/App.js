import '../style/css/index.css'
import { Main } from '../components/features/Main'
import { Header } from '../components/features/Header'
import HeaderAmazon from '../components/features/Header_amazon'
import { Footer } from '../components/features/Footer'

function App() {
  return (
    <div className="container">
      {/* <Header /> */}
      <HeaderAmazon />
      <Main />
      <Footer />
    </div>
  )
}

export default App
