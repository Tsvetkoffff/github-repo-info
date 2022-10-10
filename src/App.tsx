import {Routes, Route} from 'react-router-dom'
import FavoritesPage from './pages/FavoritesPage'
import HomePage from './pages/HomePage'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
    </Routes>
  )
}

export default App
