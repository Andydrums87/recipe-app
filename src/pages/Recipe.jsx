import React, { useState, useEffect } from "react";
import './recipe.css'
import Logo from "/src/images/logo-light.svg"
import {  useLocation  } from 'react-router-dom'
import { useNavigate  } from 'react-router-dom'


const Recipe = () => {
  
    const location = useLocation()
    const [recipe, setRecipe] = useState([])
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }

    useEffect(() => {
        setRecipe(location.state.detailRecipe)
    
    },[])



return (
    
<div className="container">
    
    <nav >
        <img src={Logo} alt="" />
        <button className="return__btn" onClick={handleClick}>Back To Categories</button>
    </nav>
    <div className="content">
    <img src={recipe.strMealThumb} alt="" />
    <h1 className="recipe__title">{recipe.strMeal}</h1>
   
    <span className="type">Category: {recipe.strCategory}</span>
    <span className="type">Area: {recipe.strArea}</span>
<ul className="ingredient__list">
    <p className="ingredients"><span id="yellow">0</span>Ingredients</p>
    {Object.keys(recipe).map( 
        key => {
            if(key.startsWith('strIngredient') && recipe[key]) {
                return <li>{recipe[key]}</li>
            }
           
        }
    )}
</ul>
<p className="instructions"><span id="blue">0</span>{recipe.strInstructions}</p>
</div>

   
</div>
  
)
}

export default Recipe;