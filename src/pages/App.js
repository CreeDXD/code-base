import '../style/css/index.css'
import { Main } from '../components/features/Main'
import { Header } from '../components/features/Header'
import { Footer } from '../components/features/Footer'

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
