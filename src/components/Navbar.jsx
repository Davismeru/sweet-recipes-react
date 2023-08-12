import React from 'react'
import { Link } from 'react-router-dom'
import {styled} from 'styled-components'

function Navbar() {
  return (
    <Nav>
      <Link to={'/'} className='logo'><i className="fa-solid fa-utensils"></i>Sweet Recipes</Link>
      <Link to={'/'}><i className="home fa-solid fa-home"></i>Home</Link>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 20px;

  .logo {
    font-size: 30px;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: salmon;
  }

  i {
    margin-right: 10px;
  }

  @media screen and (max-width:550px) {
    padding: 10px;

    .logo {
      font-size: 20px;
    }
  }

  @media screen and (max-width:300px) {
    .logo {
      font-size: 15px;
    }
  }
`

export default Navbar