import { useParams, Link } from "react-router-dom"
import useRecipes from "../components/useRecipes"
import {styled} from "styled-components"
import { motion } from "framer-motion"

function Cuisines() {
    const params = useParams()
    const [ group ] = useRecipes(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=30&cuisine=${params.type}`, `${params.type}`)
    
  return (
    <motion.Wrapper
        animate={{opacity:1}}
        initial={{ opacity:0}}
        exit={{opacity:0}}
        transition={{duration:1}}
      >
        <h2>{params.type} Cuisines</h2>
        <Section>
          {
            group.map(recipe => {
              return <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                        <Card>
                          <img src={recipe.image} alt="" />
                          <p>{recipe.title}</p>
                          <div className="overlay">
                          {/* dark overlay on each card */}
                          </div>
                        </Card>
                      </Link>
            })
          }
        </Section>
      </motion.Wrapper>
  )
}

const Wrapper = styled.div`

`

const Section = styled.div`
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  // background: red;
  margin-left: 30px
`

const Card = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 1px 3px grey;
  width: 200px;
  height: 150px;
  margin-right: 10px;
  margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    p {
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 3;
      transform: translate(-50%, -50%);
      color: #fff;
      font-weight: 600;
      font-size: 12px;
    }

    .overlay {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      z--index: 2;
    }
`

export default Cuisines