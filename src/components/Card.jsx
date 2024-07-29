import React from "react";

import { useState } from 'react'
import { useNavigate } from "react-router-dom";



function Card({data}) {

    const [clickedRecipe, setClickedRecipe] = useState()

    const navigate = useNavigate();


    const showRecipe = (clickedRecipe) => {
       
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${clickedRecipe}`
        
        fetch(url)
            .then( response => response.json())
                .then(data => {
                    console.log(url)
                    navigate('/recipe', {state: {detailRecipe: data.meals[0]}})
                })
    }
    
    return (
        <div className="card__container">
            {data.map((item, index) => {
                return (
                <div className="card" key={index} onClick={(e) => {showRecipe(item.idMeal); setClickedRecipe(item.idMeal)}}>
                             <img className="card__img" src={item.strMealThumb} alt="" />
                             <p>{item.strMeal}</p>     
                           
                </div>

                    
                )
                
                
            })}
             
        </div>
    )
}

export default Card;