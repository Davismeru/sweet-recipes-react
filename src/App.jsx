import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Pages from './pages/Pages'
import CuisinesMenu from './components/CuisinesMenu'
import SearchInput from './components/SearchInput'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar/>
        <SearchInput />
        <CuisinesMenu />
        <Pages />
    </div>
    </BrowserRouter>
  )
}

export default App
