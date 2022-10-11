import {Routes, Route} from 'react-router-dom'
import FavoritesPage from './pages/FavoritesPage'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import Container from './components/Container'

const App = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
