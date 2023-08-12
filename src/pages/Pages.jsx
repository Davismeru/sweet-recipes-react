import Cuisines from './Cuisines'
import Home from './Home'
import { Route, Routes} from "react-router-dom"
import SearchedRecipes from './SearchedRecipes'
import Recipe from './Recipe'

function Pages() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cuisines/:type' element={<Cuisines />}/>
        <Route path='/search/:searched' element={<SearchedRecipes />}/>
        <Route path='/recipe/:id' element={<Recipe />}/>

      </Routes>
    </div>
  )
}

export default Pages