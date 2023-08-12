import { useEffect, useState } from "react";

const useRecipes = (url, category) => {
    const [group, setGroup] = useState([])
  
    const fetchPopular = async () => {
        const checkLocal = localStorage.getItem(category)
        if(checkLocal) {
            setGroup(JSON.parse(checkLocal))
        } else {
            const res = await fetch(url)
            const data = await res.json()
            localStorage.setItem(category, JSON.stringify(data.recipes))
            setGroup(data.recipes)
        }
    }

    useEffect(()=> {
        fetchPopular()
    }, [url])

    return [group]
}

export default useRecipes