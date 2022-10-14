import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import FavoritesPage from './pages/FavoritesPage'
import Navigation from './components/Navigation'
import Container from './components/Container'

const App = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/favorites'
            element={<FavoritesPage />}
          />
        </Routes>
      </Container>
    </>
  )
}

export default App
