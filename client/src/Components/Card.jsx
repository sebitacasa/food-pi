import React from "react";
//import styles from "./Card.module.css";
import './recipe.css';



let idRecipe = 3

export default function Card (recipes) {
    const { image, title, diets, healthScore} = recipes
   
    return (
        <div className="recipe">
            <div>
                <h2 className="recipeName">{title}</h2>            
            </div>
            
            <div>
                <img className="recipeImg" src={image} alt="Not found"/>
            </div>
            

            <div className="dietcointainer">
            {diets?.map((d) => (
            <div key={idRecipe++}>
             
              <h5 className="diets" > {d}</h5>
            </div>  
            ))}       
            </div>

            <div>
              <h6 className="score">Health Score: {healthScore}</h6>
            </div>
            
        </div>
    )
}
        

        

