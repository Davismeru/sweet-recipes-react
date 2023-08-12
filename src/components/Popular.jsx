import { styled } from "styled-components"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import useRecipes from "./useRecipes";
import { Link } from "react-router-dom";

function Popular() {
  
  const [group] = useRecipes(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=15`, "popular")

  return (
    <Wrapper>
      <h2>Popular Picks</h2>
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
    </Wrapper>
  )
}
 
export default Popular

const Wrapper = styled.div`
  text-align: center;
  margin: 30px 0;
`

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  text-align: center;
`

const Card = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  width: 150px;
  height: 100px;
  font-weight: 500;
  text-align: left;

    img {
      width: 100%;
      height: 100%;
    }

    p {
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 3;
      transform: translate(-50%, -50%);
      color: #fff;
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
    
    @media screen and (max-width:380px) {
      width: 90%;
      height: auto;
      margin: 0 auto;
    }
`