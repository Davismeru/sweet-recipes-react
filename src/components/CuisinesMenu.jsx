import { styled } from "styled-components"
import { NavLink } from "react-router-dom"

function CuisinesMenu() {
  return (
    <Wrapper>
        <h2>Cuisines<i className="fa-solid fa-martini-glass-citrus" style={{marginLeft: "10px"}}></i></h2>
        <div className="links">
            <NavLink to={'./cuisines/african'}>
                <i className="fas fa-pepper-hot"></i>
                <p>African</p>
            </NavLink>

            <NavLink to={'./cuisines/italian'}>
                <i className="fa-solid fa-pizza-slice"></i>
                <p>Italian</p>
            </NavLink>

            <NavLink to={'./cuisines/caribbean'}>
            <i className="fas fa-ice-cream"></i>
                <p>Caribbean</p>
            </NavLink>

            <NavLink to={'./cuisines/indian'}>
            <i className="fa-solid fa-bowl-rice"></i>
                <p>Indian</p>
            </NavLink>

            <NavLink to={'./cuisines/mexican'}>
            <i className="fa-solid fa-hotdog"></i>
                <p>Mexican</p>
            </NavLink>

            <NavLink to={'./cuisines/american'}>
            <i className="fa-solid fa-burger"></i>
                <p>American</p>
            </NavLink>

            <NavLink to={'./cuisines/thai'}>
            <i className="fa-solid fa-carrot"></i>
                <p>Thai</p>
            </NavLink>

            <NavLink to={'./cuisines/european'}>
            <i className="fa-solid fa-cheese"></i>
                <p>European</p>
            </NavLink>

            <NavLink to={'./cuisines/french'}>
            <i className="fa-solid fa-wine-glass-empty"></i>
                <p>French</p>
            </NavLink>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    text-align: center;
    margin: 30px 0;

    .links {
        display: flex;
        width: 100%;
        justify-content: center;
        overflow-x: auto;
    }

    a {
        margin: 0 20px;
        text-align: center;
        color: grey;
        cursor: pointer;
        text-decoration: none;

        i {
            font-size: 25px;
        }
    }

    .active {
        background: #444;
        color: #fff;
        padding: 5px;
        border-radius: 5px;
    }

    @media screen and (max-width:850px) {
        .links {
            justify-content: start;
        }
    }
`

export default CuisinesMenu