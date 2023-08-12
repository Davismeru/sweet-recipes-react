import { useState } from "react"
import { styled } from "styled-components"
import { useNavigate } from "react-router-dom"

function SearchInput() {
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search/${inputValue}`)
    }

  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="find a recipe"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="search-btn">
                <i className="fa-solid fa-search"></i>
            </button>
        </Form>
    </div>
  )
}

const Form = styled.form`
    background: #444;
    width: 400px;
    height: 40px;
    margin: 0 auto;
    position: relative;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid #dd7468;

    input {
        flex: 5;
        border: none;
        outline: none;
        padding: 10px;
        font-size: 18px;
        color: grey;
    }

    .search-btn {
        background: #dd7468;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        cursor: pointer;
        border: none;
    }

    @media screen and (max-width: 500px) {
        width: 90%;
        margin: 0 auto;

        input {
            font-size: 12px;
            padding: 5px;
        }
    }
`

export default SearchInput