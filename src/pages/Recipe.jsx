import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';

import React from 'react';

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [active, setActive] = useState('instructions')

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${import.meta.env.VITE_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  }

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return <Fragment>
    <H2 style={{textAlign: 'center', marginBottom: "20px"}}>{details.title}</H2>
    <Section>
    <div className="image">
      <img src={details.image} alt="" />
    </div>

    <div className="details">
      <div className="btns">
      <button className={active == 'instructions'? 'active' : ''} onClick={() => setActive('instructions')}>Instructions</button>
      <button className={active == 'ingredients'? 'active' : ''} onClick={() => setActive('ingredients')}>Ingredients</button>
      </div>

      <div>
        {active == 'instructions' && <p dangerouslySetInnerHTML={{__html: details.summary}}></p>}
        
        {<ul>
        {active == 'ingredients' && details.extendedIngredients.map((ingredient) => 
            <li key={ingredient.id}>{ingredient.original}</li>
          )}
        </ul>}
      </div>
    </div>
  </Section>
  </Fragment>
}
const H2 = styled.h2`
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`

const Section = styled.div `
  display: flex;
  margin: 0 30px;

  .image {
    overflow: hidden;
    flex: 3;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%
      border-radius: inherit;
    }
  }

  .details {
    margin-left: 40px;
    flex: 3;

    .btns {
      button {
        width: 150px;
        border: none;
        color: #444;
        padding: 10px 0;
        margin-right: 10px;
        margin-bottom: 10px;
        border-radius: 3px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.5s;
        background: #fff;
        box-shadow: 1px 1px 3px grey;
      }

      .active {
        background: #444;
        color: #fff;
      }
    }
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;

    .details{
      margin: 20px 0;
    }
  }
`

export default Recipe